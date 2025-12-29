const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from public_html directory
app.use(express.static(path.join(__dirname, 'docs')));

// Serve index.html as the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'docs', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Bento Box Generator is running at http://localhost:${PORT}`);
  console.log(`Press Ctrl+C to stop the server`);
});
