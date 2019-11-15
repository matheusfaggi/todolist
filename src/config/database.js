const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB } = process.env;
module.exports = {
  dialect: 'postgres',
  host: 'db',
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
