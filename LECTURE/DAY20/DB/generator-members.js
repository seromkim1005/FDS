const faker = require('faker');
const _     = require('lodash');

// http://marak.github.io/faker.js/
// faker.locale = "ko";

module.exports = ()=> {
  let members = [];
  _.times(10, (n)=>{
      members.push({
        name: `${faker.name.lastName()}${faker.name.firstName()}`,
        email: faker.internet.email(),
        photo: faker.image.avatar(),
        motto: faker.lorem.sentence(),
        company: faker.company.companyName()
      });
  });
  return {members};
};
