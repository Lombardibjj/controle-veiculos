exports.up = knex => {
  return knex.schema.createTable('OBJ_DIM_VEICULOS', t => {
    t.increments('ID_VEICULO').primary().unsigned()
    t.integer('ID_COR').references('TAB_DIM_COR.ID_COR').unsigned().index().onDelete('CASCADE')
    t.integer('RENAVAM').notNullable()
    t.boolean('TETOSOLAR').notNullable()
    t.string('PLACA').notNullable()
  })
}

exports.down = knex => {
  return knex.schema.dropTable('OBJ_DIM_VEICULOS')
}
