const express = require('express');
const ctr = require('./controllers/messages_controller');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

app.get('/api/messages', ctr.read);
app.post('/api/messages', ctr.create);
app.put('/api/messages/:id', ctr.update);
app.delete('/api/messages/:id', ctr.delete);

const port = 3001;
app.listen(port, ()=>console.log(`Listening on port ${port}`));