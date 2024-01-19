const data = fetch("./data.json")
.then((res) => {
    return res.json();
})
.then((res) => {
    for(i in res) {

        category = res[i].category;
        score = res[i].score;

        console.log(category + ": " + score);
    
    }
});

