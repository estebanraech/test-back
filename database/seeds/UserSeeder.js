'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserSeeder {
  async run () {
    let user = await Factory.model('App/Models/User').create()
    for(let ii = 0; ii < 3; ii++){
      const exam = await Factory.model('App/Models/Exam').make()
      await user.exams().save(exam)
    }
    
    user = await Factory.model('App/Models/User').create()
    for(let ii = 0; ii < 5; ii++){
      const exam = await Factory.model('App/Models/Exam').make()
      await user.exams().save(exam)
    }
    
    user = await Factory.model('App/Models/User').create()
    for(let ii = 0; ii < 2; ii++){
      const exam = await Factory.model('App/Models/Exam').make()
      await user.exams().save(exam)
    }
    
    user = await Factory.model('App/Models/User').create()
    for(let ii = 0; ii < 2; ii++){
      const exam = await Factory.model('App/Models/Exam').make()
      await user.exams().save(exam)
    }
    
    user = await Factory.model('App/Models/User').create()
    for(let ii = 0; ii < 2; ii++){
      const exam = await Factory.model('App/Models/Exam').make()
      await user.exams().save(exam)
    }
    user = await Factory.model('App/Models/User').create()
    for(let ii = 0; ii < 1; ii++){
      const exam = await Factory.model('App/Models/Exam').make()
      await user.exams().save(exam)
    }
    user = await Factory.model('App/Models/User').create()
  }
}

module.exports = UserSeeder
