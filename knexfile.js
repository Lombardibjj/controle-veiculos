'use strict'

module.exports = {
  development: {
    client: 'mssql',
    connection: {
      server: "LAPTOP-OJ7HTGG5",
      port: 1433,
      database: "CONTROLE_VEICULOS",
      options: {
        trustedConnection: true
      }
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/db/seeds`
    }
  },
  staging: {
    client: 'tedious',
    connection: {
      database: 'CONTROLE_VEICULOS-test',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'tedious',
    connection: {
      database: 'CONTROLE_VEICULOS-prod',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
