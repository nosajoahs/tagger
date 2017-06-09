# Tagger

Welcome to the fullstack exercise! You'll be building out yet another note-taking web application. 

The requirements of the application are intentionally vague. You will need to scope out the problem space and discover how you will tackle creating the app, much like you would be expected to do in an architecture problem in an interview.

Then, you'll need to discover the tools and consult it's documentation to implement a working solution, much like you would be expected to do as a professional working engineer.

## Requirements:

You may not get to everything, but that's okay. Please create a note-taking app that adheres to this user story, and work on these top-down.

- [ ] As a user, I should be able to create a note.
- [ ] As a user, I should be able to view a list of notes that I have created.
- [ ] As a user, I should be able to edit an existing note.
- [ ] As a user, I should be able to delete a note.

Technical Considerations:

- [ ] Implement a RESTful API for your client-side code to make calls to.
- [ ] Implement a Single Page Application on the client-side with React or Angular.

You'll notice when you get to the front-end portion of the code that this app, while seemingly simple, is relatively complex to get the UI to behave and flow correctly. You should prioritize the functionality of a user story task, but then implement error handling and some basic styling for each step once the functionality is in place.

There is an example mockup that you can reference as an idea for getting started on the UI.

Good luck!

## Other Information:

### Technologies Used:

- Express
- Sqlite3
- Front-end framework of your choice
- ORM of your choice (Be sure to `npm install` it!)
- Any CSS libraries you wish to use

### Existing helpful commands:

`npm start` — start the nodemon process for server/index.js  
`npm run dev` — REACT ONLY: start webpack watch process for transpilation  
`npm run build` — REACT ONLY: run webpack once to create `public/react/build.js`  
`npm run drop` — remove the `server/db/tagger.sqlite` database file (drops the database)  
NOTE: The above command assumes that you name your database file `tagger.sqlite` within the `server/db/` directory.

### Angular Setup

If you're using angular, simply follow the directions in the `public/index.html` folder to get started. It is a simple `<script>` request for angular on CDNJS, and your own script file.

### Webpack Setup

The configuration set up for webpack exists inside of `public/react`. There is an index.js source file. When you run `npm run dev`, it will generate a `bundle.js` also in the same directory, and watch for further changes and rebundle it as necessary. `public/index.html` asks you to `<script>` source the `bundle.js` file. 
