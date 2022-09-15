const express = require('express');
const path = require('path');
const db = require('./db/db.json'); //*db = database
const PORT = process.env.PORT || 3001;
const fs = require('fs');

//*this will make a random charset with numbers and put it to string
//*this is courtesy of Assignment 19
//*I may change it to be something else
const randomID = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})

app.get('/*/', (req, res) => {
    res.sendFile(path.join(__dirname), './public/index.html')
})

app.get('/api/notes', (req, res) => {
    console.log('request for note api received')
    res.status(200).json(db)
})

app.post('/api/notes', (req, res) => {
    console.info(`${req.method} requested`)

    const { title, text } = req.body;

    if (title && text) {

        const incomingNote = {
            title,
            text,
            id: randomID()
        }

        db.push(incomingNote)

        const response = {
            status: 'Success!',
            body: `${incomingNote.title}, ${incomingNote.text}, ${incomingNote.id}`
        };

        const newDB = JSON.stringify(db);

        fs.writeFile(`./db/db.json`, newDB, (err) => {
            if (err) {
                console.log(err)
            } else {
                console.log('Database has been updated with your note')
            }
        })

        res.status(201).json(`${response.status} here is the note you just logged: ${response.body}`)

    } else {
        res.status(500).json(`There was an error, please try again`)
    }


})


//!this will be app.delete if I can get it working
app.delete('/api/notes/:id', (req, res) => {
    console.info(`${req.method} requested`);

    const deleteItem = req.params.id;

    if (db.some(note => note.id == deleteItem)) {

        for (let i = 0; i < db.length; i++) {

            if (deleteItem == db[i].id) {
                console.info('Match found')

                db.splice(i, 1)

                const newDB = JSON.stringify(db);

                fs.writeFile(`./db/db.json`, newDB, (err) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log('Database has been updated with your delete')
                    }
                })

                return res.json(db)
            }

        }

    } else {
        console.info('No ID found')
    }

    res.json('No ID Found')

})


app.listen(PORT, () => {
    console.log(`Port is live http://localhost:3001`)
})