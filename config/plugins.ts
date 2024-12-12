export default ({env}) => ({
    'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', 'default_jwt_secret'), // Replace 'default_jwt_secret' with your generated key
    },
  }
});
