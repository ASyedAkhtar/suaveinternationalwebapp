const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const person = require('./models/schemas/Person');

const app = express();

app.use(logger);

// app.get("/", (req, res) =>  {
//     res.sendFile(path.join(__dirname, 'public/home.html'));
// });

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get("/api/person", async (req, res) => { 
  const applicants = await person.findAllPersons;
  res.send(applicants);
});

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}.`));
