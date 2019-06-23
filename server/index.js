/* eslint consistent-return:0 */

const express = require('express');
const mongoose = require('mongoose');
const { resolve } = require('path');
const passport = require('passport');
const session = require('express-session');
const dotenv = require('dotenv');
const cors = require('cors');
const renameIdPlugin = require('mongoose-rename-id');
const logger = require('./util//logger');
const argv = require('./util/argv');
const port = require('./util//port');
const setup = require('./middlewares/frontendMiddleware');

const app = express();

dotenv.config();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// create session
app.use(
  session({ secret: 'hello world', saveUninitialized: true, resave: false })
);

// Middleware
app.use(express.json()); // this is for parsing the body (req.body)

// Passport

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// Import Routes
const userRoute = require('./routes/user');
const postRoute = require('./routes/posts');
const forumRoute = require('./routes/forums');
const replyRoute = require('./routes/replies');
const authRoute = require('./routes/auth');
const playgroundRoute = require('./routes/playground');

// Route middlewares
app.use('/api/user', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/forums', forumRoute);
app.use('/api/replies', replyRoute);
app.use('/api/auth', authRoute);
app.use('/api/playground', playgroundRoute);

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useCreateIndex: true },
  () => {
    console.log('connected DB');
  }
);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/'
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }
  logger.appStarted(port, prettyHost);
});
