module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'estate_kings_basketball'),
      user: env('DATABASE_USERNAME', 'estate_kings_basketball_user'),
      password: env('DATABASE_PASSWORD', 'fXbHdh910kVPY5lt1Q7ShMCjDfV9CNtQ'),
      ssl: env.bool('DATABASE_SSL', false), // Set to true if your database requires SSL
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
});
