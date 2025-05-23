window.onload = function () {
    const clickBtn = document.getElementById("clickBtn");
    const clickLbl = document.getElementById("label1");
    const boughtBtn = document.getElementById('boughtBtn');

    let score = 0
    let score_adder = 1
    let cost = 10

    clickBtn.onclick = function() {
        score += score_adder;
        clickLbl.textContent = score;
    };

    boughtBtn.onclick = function() {
        if (score >= cost){
            score -= cost;
            score_adder += 1;
            console.log(score_adder);
            clickLbl.textContent = score;
        }
    }


};

