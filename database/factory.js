'use strict'
const Factory = use('Factory')
const Hash = use('Hash')

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
Factory.blueprint('App/Models/User', async (faker) => {
  return {
    name: faker.name(),
    email: faker.email(),
    password: await Hash.make(faker.password())
  }
})

Factory.blueprint('App/Models/Exam', async (faker) => {
  return {
    score: faker.floating({ min: 45, max: 100 }),
    approved: faker.bool({likelihood: 80})
  }
})
