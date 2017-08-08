const express = require('express');
const massive = require('massive');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

//Setup database through massive
massive('postgres://qxcjfjmp:RSfd5jALpVgRaeefqISBrCKgVMl5aHr0@stampy.db.elephantsql.com:5432/qxcjfjmp').then( db => {
  app.set('db', db);
  db.create_tables()
})

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on ${port}.`)
});