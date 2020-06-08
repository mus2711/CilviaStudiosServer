const feedbackUI = Object.create(null);

feedbackUI.init = async function (serverid) {
    console.log("feedbackUI running");
    const el = (id) => document.getElementById(id);
    const cloneTemplate = (id) => document.importNode(el(id).content, true);

    const commenthistory = [];
    const name = el("name");
    const email = el("email");
    const feedback = el("feedback");
    const usercomments = el("usercomments");

    const getData = async function() {
        const response = await fetch(serverid);
        let json = await response.json();
        return json;
    }
    const theComments = async function() {
        let CommentList = await getData();
        return CommentList;
    };

    let testObj = await theComments();
    let names = await Object.values(testObj)[0][0];
    let comments = await Object.values(testObj)[0][1];
    el("nocomments").textContent = `${comments.length} comments `;
    var commentCounter = 0
    setTimeout(names.forEach(name => {
        const commentTemplate = cloneTemplate("user-comment");
        commentTemplate.querySelector("[name = username]").textContent = name;
        commentTemplate.querySelector("[name = comment]").textContent = comments[commentCounter];
        commentTemplate.querySelector("[name = seperator]").textContent = "";
        usercomments.append(commentTemplate);
        commentCounter += 1;
    }), 0);

    var counterCommentNumber = 0;
    el("commentbutton").onclick = async function () {
        const userName = name.value;
        const userFeedback = feedback.value;
        if (name.value !== "") {
            if(userFeedback !== "") {
                console.log("clicked");
                const data = {userName, userFeedback};
                const options = {
                    method: "POST",
                    headers: {
                    "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                };

                const response = await fetch(serverid, options);
                const json = await response.json();
                console.log(json);

                const commentTemplate = cloneTemplate("user-comment");
                commenthistory.push(userFeedback);
                commentTemplate.querySelector("[name = username]").textContent = userName;
                commentTemplate.querySelector("[name = comment]").textContent = userFeedback;
                commentTemplate.querySelector("[name = seperator]").textContent = "";
                usercomments.appendChild(commentTemplate);

                name.value = "";
                feedback.value = "";
                counterCommentNumber += 1;
                el("nocomments").textContent = `${comments.length + counterCommentNumber} comments `;
                theComments();
            } else {
                console.log("empty comment");
            }
        } else {
            console.log("empty name");
        }
    };

};

export default Object.freeze(feedbackUI);