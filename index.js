const express = require('express')

const port = 3001;

const app = express(); //http.createServer

app.get('/', (req, res) => { // if req.url ==='/'
    console.log('Get /');
    res.send('<h1>Authors API</h1>')
}); 
app.get('/authors/1/', (req,res) => {
    console.log('GET /authors/1/!');

    res.send('Lawrence Nowell, UK');
});
app.get('/authors/2/', (req,res) => {
    console.log('GET /authors/2/!');

    res.send('William Shakespeare, UK');
});
app.get('/authors/3/', (req,res) => {
    console.log('GET /authors/3/!');

    res.send('Charles Dickens, US');
});
app.get('/authors/4/', (req,res) => {
    console.log('GET /authors/4/!');

    res.send('Oscar Wilde, UK');
});

app.get('/authors/1/:name', (req,res) => {
    console.log('GET /authors/1/:name');
    console.log('req.params', req.params);
    // const name = req.param.name;
    // const {name} = req.params;

    res.send('Beowulf');
    // res.send(`${name}`);
});
app.get('/authors/2/:name', (req,res) => {
    console.log('GET /authors/2/:name');
    console.log('req.params', req.params);
    // const name = req.param.name;
    // const {name} = req.params;

    res.send('Hamlet, Othello, Romeo and Juliet, MacBeth');
});
app.get('/authors/3/:name', (req,res) => {
    console.log('GET /authors/3/:name');
    console.log('req.params', req.params);
    // const name = req.param.name;
    // const {name} = req.params;

    res.send('Oliver Twist, A Christmas Carol');
});
app.get('/authors/4/:name', (req,res) => {
    console.log('GET /authors/4/:name');
    console.log('req.params', req.params);
    // const name = req.param.name;
    // const {name} = req.params;

    res.send('The Picture of Dorian Gray, The Importance of Being Earnest');
});

app.get('/bonjour/:name/books/:books', (req, res) => {
    console.log('GET /bonjour/:name/books/:books');
    console.log('req.params', req.params);

    res.send(`${req.params.name}${req.params.books}`);
});

// Plusieurs paramètres dans les routes

app.get('*', (req, res) => {
    res.send('Error');

    
}); //gestion erreur

// app.get('*',(req, res) => {
//     console.log('GET /bonjour/:name');
//     console.log('req.params', req.params);
//     res.send(`The author with the ID ${req.params.name} does not exist`);
// });

app.listen(port, () => {
    console.log(`Server satrted on port: ${port}`) // to confirme that server is started on that port
});
