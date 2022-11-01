exports.up = knex => {
  return knex.schema.createTable('TAB_DIM_COR', t => {
    t.increments('ID_COR').primary().unsigned()
    t.string('COR').notNullable()
  })
}

exports.down = knex => {
  return knex.schema.dropTable('TAB_DIM_COR')
}
