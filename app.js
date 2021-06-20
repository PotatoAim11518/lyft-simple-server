const express = require('express');
const app = express();

app.use(express.json());

app.post('/test', (req, res) => {
  const {string_to_cut} = req.body

  const return_string = string_to_cut
  .split('')
  .map((letter, idx) => {
    if ((idx + 1) % 3 === 0) {
      return letter
    }
  })
  .join('');

  return res.json({return_string});
})

const port = 4000;

app.listen(port, () => {
  console.log(`Simple-Server app listening on port ${port}...`)
})
