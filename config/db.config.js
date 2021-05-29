module.exports = {
  HOST: "localhost",
  USER: "poseidon_reader",
  PASSWORD: "poseidon",
  DB: "poseidon",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};