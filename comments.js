// Create web server 

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Set view engine
app.set('view engine', 'ejs');

// Set middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set static files
app.use(express.static('public'));

// Set routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/comments', (req, res) => {
    fs.readFile('comments.json', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal server error');
        }
        else {
            res.send(data);
        }
    });
});

app.post('/comments', (req, res) => {
    fs.readFile('comments.json', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('Internal server error');
        }
        else {
            const comments = JSON.parse(data);
            comments.push(req.body);
            fs.writeFile('comments.json', JSON.stringify(comments), (err) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Internal server error');
                }
                else {
                    res.send(comments);
                }
            });
        }
    });
});

app.listen(port, () => console.log(`Web server running at http://localhost:${port}`));