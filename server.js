import express from "express";
// const express = require("express");
import emaildata from "./emaildb.js";
import emailclient from "./emailsclient.js";
import insertcomments from "./commentdb.js";
import commentclient from "./commentclient.js";
var buggyArrays = commentclient.init("./db/buggycommentstest.sqlite");
var stoolArrays = commentclient.init("./db/stoolcommentstest.sqlite");
var sleepArrays = commentclient.init("./db/sleepcommentstest.sqlite");
var c19Arrays = commentclient.init("./db/c19commentstest.sqlite");
var emailArray = emailclient.init();
const port = process.env.PORT || 8080;
const app = express();

app.use("/", express.static("cilviastudios"));
app.listen(port, function () {
    console.log("Listening to port " + port);
});
app.use(express.json({limit: "20mb"}));

app.get("/api", (request, response) => {
    response.json({emails: emailArray});
    emailArray = emailclient.init();
});

app.post("/api", (request, response) => {
    console.log("I got an email.");
    emaildata.init(request.body.subscriber);
    response.json({
        status: "subscribed",
        email: request.body.subscriber
    });
    emailArray = emailclient.init();
});

app.get("/buggy", (request, response) => {
    response.json({comments: buggyArrays});
    buggyArrays = commentclient.init("./db/buggycommentstest.sqlite");
});

app.post("/buggy", (request, response) => {
    console.log("I got a comment");
    // console.log(request.body);
    insertcomments.init("./db/buggycommentstest.sqlite",request.body.userName, request.body.userFeedback);
    response.json({
        name: request.body.userName,
        comment: request.body.userFeedback
    });
    buggyArrays = commentclient.init("./db/buggycommentstest.sqlite");
});

app.get("/stool", (request, response) => {
    response.json({comments: stoolArrays});
    stoolArrays = commentclient.init("./db/stoolcommentstest.sqlite");
});

app.post("/stool", (request, response) => {
    console.log("I got a comment");
    // console.log(request.body);
    insertcomments.init("./db/stoolcommentstest.sqlite",request.body.userName, request.body.userFeedback);
    response.json({
        name: request.body.userName,
        comment: request.body.userFeedback
    });
    stoolArrays = commentclient.init("./db/stoolcommentstest.sqlite");
});

app.get("/sleep", (request, response) => {
    response.json({comments: sleepArrays});
    sleepArrays = commentclient.init("./db/sleepcommentstest.sqlite");
});

app.post("/sleep", (request, response) => {
    console.log("I got a comment");
    // console.log(request.body);
    insertcomments.init("./db/sleepcommentstest.sqlite",request.body.userName, request.body.userFeedback);
    response.json({
        name: request.body.userName,
        comment: request.body.userFeedback
    });
    sleepArrays = commentclient.init("./db/sleepcommentstest.sqlite");
});

app.get("/c19", (request, response) => {
    response.json({comments: c19Arrays});
    c19Arrays = commentclient.init("./db/c19commentstest.sqlite");
});

app.post("/c19", (request, response) => {
    console.log("I got a comment");
    // console.log(request.body);
    insertcomments.init("./db/c19commentstest.sqlite",request.body.userName, request.body.userFeedback);
    response.json({
        name: request.body.userName,
        comment: request.body.userFeedback
    });
    c19Arrays = commentclient.init("./db/c19commentstest.sqlite");
});