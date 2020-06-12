import sqlite3 from "sqlite3";
const commentclient = Object.create(null);

// comment client iterates through names and comments in the database table
// this iteration passes names and comments into seperate arrays and passes them
// into the client. Which receives this as a promise and itrerates through the
// arrays and passing them into comment templates to generate a list of comments

commentclient.init = function(database) {
    let db = new sqlite3.Database(database, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("Connected to the subscribers SQlite database.");
      });
    let sql = `SELECT * FROM comment`;
    const namearray = [];
    const commentarray = [];
    db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        rows.forEach((row) => {
          namearray.push(row.name);
          commentarray.push(row.comment);
        });
    });
    db.close((err) => {
        if (err) {
          return console.error(err.message);
        }
        console.log("Closed the database connection.");
      });
    return [namearray, commentarray];
};

export default Object.freeze(commentclient);