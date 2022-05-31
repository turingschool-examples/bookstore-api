const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3001);

app.get('/', (req, res) => {
  res.send('This is the bookstore API. See the documentation for available endpoints. Enjoy!');
});

app.listen(app.get('port'), () => {
  console.log(`Bookstore API running on http://localhost:${app.get('port')}`);
});
