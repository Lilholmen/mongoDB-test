const express = require('express');
const mongoose = require('mongoose');
const expressHandlebars = require('express-handlebars');
const testRoutes = require('./routes/app');

const PORT = process.env.PORT || 3000;

const app = express();
const hbs = expressHandlebars.create({
  defaultLayout: 'main',
  extname: 'hbs',
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(testRoutes);

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://admin1337:1337admin@cluster-test.yvvxt.mongodb.net/test-1?retryWrites=true&w=majority',
      { useNewUrlParser: true }
    );

    app.listen(PORT, () => {
      console.log('server started alredey');
    });
  } catch (err) {
    console.log(err);
  }
}

start();
