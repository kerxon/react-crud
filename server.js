const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

app.use(express.static('public'));
app.use(cors());


app.get('/', (req,res) => {
  res.sendfile(path.resolve(__dirname), 'public', 'index.html')
});

app.listen(3000, () => {
  console.log('listening on port 3000');
})
