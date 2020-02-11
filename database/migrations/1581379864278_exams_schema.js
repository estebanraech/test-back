'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExamsSchema extends Schema {
  up () {
    this.create('exams', (table) => {
      table.increments()
      table.float('score')
      table.binary('approved')
      table.integer('user_id')
        .references('id').inTable('users')
        .notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('exams')
  }
}

module.exports = ExamsSchema
