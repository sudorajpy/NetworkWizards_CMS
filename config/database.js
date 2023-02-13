// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });


// path: ./config/env/production/database.js

// path: ./config/env/production/database.js

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}`, // for a PostgreSQL database
      // ⚠️ For a MySQL database, use socketPath: `/cloudsql/${env('INSTANCE_CONNECTION_NAME')}` instead
      database: env('DATABASE_NAME'),
      user: env('DATABASE_USER'),
      password: env('DATABASE_PASSWORD'),
    },
  },
});
