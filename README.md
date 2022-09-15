# Note-taker assignment

### Acceptance Criteria: 
    1. Should open to the landing page of the index.html ✅
    2. Clicking on the 'notes' page link redirects you to the notes.html ✅
    3. Typing a note title and note text shows a save icon ✅
    4. When a note is saved, it appears on the left hand column ✅
    5. Clicking on a note in the left hand column puts it in the right hand column ✅
    6. Clicking the 'write icon' presents empty note fields ✅
    7. Application must use Express.js ✅
    8. Notes must have a unique ID in the JSON file ✅
    9. Application must be deployed to Heroku ✅

### Application specifics:
    1. server.js should include db.json file ✅
    2. server.js should include fs module ✅
    3. GET /notes should return notes.html (can check w/ insomnia) ✅
    4. GET * should return index.html (can check w/ insomnia) ✅
    5. GET api/notes should read the db.json file and return all saved notes (can check w/ insomnia) ✅
    6. POST api/notes should:
        a. receive a new note on the request body ✅
        b. add it to the db.json file ✅
        c. return the new note to the client ✅
        d. each note should have a unique ID ✅

### Bonus
    1. Delete /api/notes/:id should receive a query parameter of the note id ✅
    2. Delete should remove the note via its id property from the db.json file ✅


Application Description: This application is a note taker service that uses express.js to handle back end features such as GET, POST, and DELETE. The application lands on the home page, and then redirects the user to the note taking HTML upon button press, which is handled as a GET request. The left hand column uses the database (db.json) information to populate the notes. The user can type in notes and a description on the right hand side, which will cause a save button to appear. When hitting the save button, a POST request is made, and adds the note to the database JSON with the note title, description, and gives it a unique ID. The user is also able to delete any note by hitting the trash icon, which is a DELETE request to remove it via its ID from the JSON file. All requests are logged to the server.



Application URL: https://notetaker-shawn-canavan.herokuapp.com/

Application GitHub: https://github.com/shawnbandy/NoteTaker

Application Image: !(https://github.com/shawnbandy/NoteTaker/blob/main/Assets/imagesimages.gif)
