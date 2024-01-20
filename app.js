
const data = fetch("./data.json")
.then((res) => {
    return res.json();
})
.then((res) => {

    let scoresum = 0;

    for(i in res) {

        document.getElementById(res[i].category.toLowerCase()).innerHTML = res[i].score;

        scoresum += res[i].score;

    }

    document.getElementById("main").innerHTML = Math.round(scoresum / res.length);
});

