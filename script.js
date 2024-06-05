document.querySelector('.button').addEventListener('click', handleButtonClick);
function handleButtonClick() {
    console.log('Button was clicked!');
    var a = Math.floor((Math.random()) * 6)+1;
    var b = Math.floor((Math.random()) * 6)+1;
    a = parseInt(a); b = parseInt(b);
    const image1 = document.querySelector(".img1");
    const image2 = document.querySelector(".img2");
    if (a === 1) {
        image1.src = `./images/dice1.png`;
    }
    else if (a === 2) {
        image1.src = `./images/dice2.png`;
    }
    else if (a === 3) {
        image1.src = `./images/dice3.png`;
    }
    else if (a === 4) {
        image1.src = `./images/dice4.png`;
    }
    else if (a === 5) {
        image1.src = `./images/dice5.png`;
    }
    else {
        image1.src = `./images/dice6.png`;
    }
    
    if (b === 1) {
        image2.src = `./images/dice1.png`;
    }
    else if (b === 2) {
        image2.src = `./images/dice2.png`;
    }
    else if (b === 3) {
        image2.src = `./images/dice3.png`;
    }
    else if (b === 4) {
        image2.src = `./images/dice4.png`;
    }
    else if (b === 5) {
        image2.src = `./images/dice5.png`;
    }
    else {
        image2.src = `./images/dice6.png`;
    }

    if (a > b) {
        document.querySelector(".lol").innerHTML = 'Team 1 Wins!';
    }
    else if(a===b) {
        document.querySelector(".lol").innerHTML = 'Resuffle:(';
    }
    else{
        document.querySelector(".lol").innerHTML = 'Team 2 Wins!';
    }
}
