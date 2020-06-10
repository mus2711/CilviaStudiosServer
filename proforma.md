# Computing 2 Submission Proforma

**CID:** [your CID]

For each section, write a maximum of 200 words.

## Brief
*State what you set out to acomplish with this web app.*
With this web app I aimed to showcase my work in order to gain feedback from people interested in my projects.
The main index.html file displays my content in a fornt page style, with an email subscription sign up available,
this textarea receives emails, checks for their validity then sends them to the database, emails are also checked
to see if they are in the database prior to inclusion. Then when navigating to the projects tab, various projects are shown.
Each project has a comment section which users' are allowed to comment, theses comments are also saved and retrieved, thus
users can access and make comments at any time.

## Coding
*Highlight your approach to coding in this project.*
For easy integration of new pages and databses, each html page is served by its own main.js file which calls upon the
various .js files written to take in inputs and execute functions, making each module adapatable and unique for each web page. ie the commentdb.js file takes in the db string to write to that specific database. All HTML, CSS and .JS files
are seperatley arranged to allow for easy code debugging and again, easy module importing to serve multiple webpages.
Asyncronous code is incorporated when generating the comments for each project page, and in regards to checking if an email is already been registered. Callbacks and events are found throughout, by can be clearly seen in the startinganimation.js file which animates an initial frame of a shrinking logo.

## UX/UI
*Outline the key elements of your UX/UI design.*
The CSS has been written to be adpative to web screens in an horizontal landscape. The UI is clear and intuitive by the use
of highlighting of interactive elements, ie. colour change of top right navigation button, chnage of photo and colour on the
design projects panel and the feedback from the email input box if the email is valid or already taken. setTimeout functions are used to reduce lag as functions will be executed once the callstack is finished such as in feedbackUI which will only generate the comments after the page has loaded. 

## Data
*Explain how you structure and process your data.*
The coding in this project utilies a node js server which serves the cilviastudios static webpages. The server and pages interact by passing arrays of emails, and arrays of names and comments. These databases are SQL based, this database is written and read by the server when the server receives the appropriate post or get request. Comments are generated by a template style which iterates over the name and comment arrays to produce individual comments for each project page. 
Data tables were structured in SQLite then downloaded in the db file, which houses the project comment and email databases.
Essentially, the server receives get and post requests from the website and seperatley executes the .js files found outside the cilviastudios file. ie. commentdb is used to receive comments and write to the database, whilst commentclient sends an array of names and comments, which are then handled by the server to newemail.js in cilviastudios which uses async functions to receieve the post request from the server containing the various arrays. The comment databases are a two column table of names and comments, while the email database is a single column table or emails. It should be noted.

## Debugging
*Describe how you used debugging practices and tools and how they helped you overcome a bug or conceptual issue.*
I faced a lot of issues initially working with the server get requests pertaining to receiving the arrays of emails, names and comments from the server. Initially I struggled with only receiving promises instead of the array I wanted,with reading on promises and their asynchronous nature, I altered by code by making the relevant functions async and making the variables await the input from the server. This solved my problem but then I was faced with the database arrays not being refreshed until the server was refreshed, this resulted in the comments being lost when the page was reloaded until the server was restarted. This was resolved by making the arrays a var variable and having the server execute the commentclient.js files which receives the comment arrays, to continually refresh the passed array to the site to allow the comments to be updated and displayed by the page wihtout the need to restart the server.
Testing was done on the email valid passing function, this was done to determine the best regex to use to pass in valid emails. This was done primarily off an example based test as I felt it would be more appropiate then somehow generating emails through property-based testing. However, a trivial property based test was taken out to ensure random strings were not allowed to be passed. 

## Best Practice
*Outline your use of software development best practices*
Accessibility has been considered, by implementing code in mainaccess.js for the index.html file to allow users to tab through the interactive elements and access them with an enter, thus trying my best to conform to standards. Javascript files have been checked for js lint errors for consistient writing, the onlly jslint errors that come up have been left on purpouse for my own readability ie whitespace and lines 80+ charcter. Comments will be applied prior to final submisison, but have been noted in the emailtest.js files which serves test.html. As menitoned, all CSS, HTML and JS are seperately structured, the only instance where script is introcued in html files is to intergrate aos.js, a pre-written script to allow for the various fade animations found through-out the project. 