'use strict'
const Exam = use('App/Models/Exam')

class ExamController {
  async getExams(){
    return await Exam.all()
  }
}

module.exports = ExamController
