function getRandom() {
    let bot = parseInt(document.getElementById("bot").value,10);
    let top = parseInt(document.getElementById("top").value,10);
    document.getElementById("out").innerHTML = "";
    if (bot != NaN && top != NaN && bot < top) {
        let num = Math.floor(Math.random() * (top-bot))+bot;
        document.getElementById("out").innerHTML = num;
    }
    else {
        document.getElementById("out").innerHTML = "<font style=\"color:red;\">Input incorrect !!</font>";
    }

}