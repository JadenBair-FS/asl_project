'use strict';

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl sed aliquam ultricies, nunc sapien aliquet nunc, nec aliquam nisl nunc sed"
const [ createdAt, updatedAt ] = [ new Date(), new Date() ]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('Products', [
      { 
        id: 1, 
        title: 'Nike Womens Go FlyEase Shoe', 
        slug: 'nike-womens-go-flyease', 
        price: 89.78, 
        is_published: true,
        description, createdAt, updatedAt
      },
      { 
        id: 2, 
        title: 'Nike Mens Go FlyEase Shoe', 
        slug: 'nike-womens-go-flyease', 
        price: 89.78, 
        is_published: true,
        description, createdAt, updatedAt
      }
    ])
  },
  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('Products', null, {})
  }
};