const emailcheckjava = Object.create(null);

emailcheckjava.init = async function(subscriber) {
    const response = await fetch("/api");
    const emails = await response.json();
    console.log(emails);
    };
