const path = require('path');
const { Seeder } = require('mongo-seeding');

const config = {
  database: {
    name: 'forum'
  },
  dropDatabase: true
};
const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(
  path.resolve('./server/seeder/data'),
  {
    transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId]
  }
);

seeder
  .import(collections)
  .then(() => {
    console.log('Success');
  })
  .catch((err) => {
    console.log('Error', err);
  });
