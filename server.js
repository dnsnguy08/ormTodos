const express = require('express');
const sequelize = require('./config/connection');
const Todo = require('./model/Todo')


const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Every time our server restarts, our data will automatically be deleted
// and our tables will be recreated
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App running on PORT ${PORT}`));
});