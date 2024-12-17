module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ctfdkvpu0jms739lo40g-a'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'estate_kings_basketball'),
      user: env('DATABASE_USERNAME', 'estate_kings_basketball_user'),
      password: env('DATABASE_PASSWORD', 'fXbHdh910kVPY5lt1Q7ShMCjDfV9CNtQ'),
      ssl: {
        rejectUnauthorized: true, // Required for many cloud databases
      },
    },
    pool: {
      min: 0,
      max: 10,
    },
  },
});
