const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend/dist')));

app.get('/api/messages', (req, res) => {
    res.json({ message:"hello from backend! messages will be here."});
});

app.get('*', (req,res) => {
    res.sendFile(path.json(__dirname, '../frontend/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});