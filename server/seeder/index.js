const path = require('path');
const { Seeder } = require('mongo-seeding');

console.log('path is: ', path.resolve('./server/seeder/data'));

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

console.log(collections);

seeder
  .import(collections)
  .then(() => {
    console.log('Success');
  })
  .catch((err) => {
    console.log('Error', err);
  });
