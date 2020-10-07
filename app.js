document.addEventListener("DOMContentLoaded", function () {
    let newDieButton = document.getElementById("newDie");
    let reRollButton = document.getElementById("reroll");
    let dieSumButton = document.getElementById("dieSum");
    let diceContainer = document.getElementById("diceContainer");
    let squareValue = 0;
    let getRandomValue = (min, max) =>
        Math.floor(Math.random() * (max - min) + min);
    let diceArray = [];

    class Die {
        constructor() {
            this.div = document.createElement("div");
            this.div.addEventListener('click', () => this.roll());
            this.div.addEventListener('dblclick', () => this.deleteDie());
            this.value = document.createTextNode(squareValue);
            this.div.className = "die";
            this.div.id = squareValue;
            this.div.innerText = getRandomValue(1, 7);
            diceContainer.appendChild(this.div);
            this.div.style.color = "black";
           // console.log(this);
           
           
        }
        roll() {
             this.value = getRandomValue(1, 7);
             this.div.innerText = this.value;
        }

        deleteDie() {
            this.div.remove();
        }
        
    }

    //   reRollButton.addEventListener("click", function () {
    //     document.getElementsByClassName('die').roll();
    //   });

    newDieButton.addEventListener("click", makeDie);
dieSumButton.addEventListener('click', sumDice);

    function makeDie() {
        let dice = new Die();
        diceArray.push(dice);
        console.log(diceArray);
    };

    function sumDice() {

    };

    

    // event listener (
    // // let newdie = new Die(math.random.... )
    // )

    //end of body
});
