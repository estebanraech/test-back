'use strict'
const User = use('App/Models/User')

class UserController {
  async getUsers(){
    return await User.all()
  }

  async getUsersExams(){
    return await User.query().with('exams').fetch()
  }
}

module.exports = UserController
