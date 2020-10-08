document.addEventListener("DOMContentLoaded", function () {
    let d4Button = document.getElementById('d4');
    let d6Button = document.getElementById("d6");
    let d8Button = document.getElementById('d8');
    let d10Button = document.getElementById('d10');
    let d12Button = document.getElementById('d12');
    let d20Button = document.getElementById('d20');
    let reRollButton = document.getElementById("reRoll");
    let dieSumButton = document.getElementById("dieSum");
    let resetButton = document.getElementById("reset-button");
    let diceContainer = document.getElementById("diceContainer");
    let squareValue = 0;
    let getRandomValue = (min, max) =>
        Math.floor(Math.random() * (max - min) + min);
    let diceArray = [];

    class Die {
        constructor(value) {
            this.value = value;

        }
        roll() {
            this.value = getRandomValue(1, 5);
            this.div.innerText = this.value;
        }
        deleteDie() {
            this.div.remove();
            let index = diceArray.indexOf(this);
            diceArray.splice(index, 1);
        }
    }
    class D4 extends Die {
        constructor(value) {
            super(value);
            this.div = document.createElement("div");
            this.div.addEventListener('click', () => this.roll());
            this.div.addEventListener('dblclick', () => this.deleteDie());
            this.div.className = "d4-roll";
            this.div.innerText = this.value;
            diceContainer.appendChild(this.div);
            this.div.style.color = "black";
        }
    };

    class D6 extends Die {
        constructor(value) {
            super(value);
            this.div = document.createElement("div");
            this.div.addEventListener('click', () => this.roll());
            this.div.addEventListener('dblclick', () => this.deleteDie());
            this.div.className = "d6-roll";
            this.div.innerText = this.value;
            diceContainer.appendChild(this.div);
            this.div.style.color = "black";
        }
        roll() {
            this.value = getRandomValue(1, 7);
            this.div.innerText = this.value;
        }
    }

    class D8 extends Die {
        constructor(value) {
            super(value);
            this.div = document.createElement("div");
            this.div.addEventListener('click', () => this.roll());
            this.div.addEventListener('dblclick', () => this.deleteDie());
            this.div.className = "d8-roll";
            this.div.innerText = this.value;
            diceContainer.appendChild(this.div);
            this.div.style.color = "black";
        }
        roll() {
            this.value = getRandomValue(1, 9);
            this.div.innerText = this.value;
        }
    }

    class D10 extends Die {
        constructor(value) {
            super(value);
            this.div = document.createElement("div");
            this.div.addEventListener('click', () => this.roll());
            this.div.addEventListener('dblclick', () => this.deleteDie());
            this.div.className = "d10-roll";
            this.div.innerText = this.value;
            diceContainer.appendChild(this.div);
            this.div.style.color = "black";
        }
        roll() {
            this.value = getRandomValue(1, 11);
            this.div.innerText = this.value;
        }
    }
    class D12 extends Die {
        constructor(value) {
            super(value);
            this.div = document.createElement("div");
            this.div.addEventListener('click', () => this.roll());
            this.div.addEventListener('dblclick', () => this.deleteDie());
            this.div.className = "d12-roll";
            this.div.innerText = this.value;
            diceContainer.appendChild(this.div);
            this.div.style.color = "black";
        }
        roll() {
            this.value = getRandomValue(1, 13);
            this.div.innerText = this.value;
        }
    }
    class D20 extends Die {
        constructor(value) {
            super(value);
            this.div = document.createElement("div");
            this.div.addEventListener('click', () => this.roll());
            this.div.addEventListener('dblclick', () => this.deleteDie());
            this.div.className = "d20-roll";
            this.div.innerText = this.value;
            diceContainer.appendChild(this.div);
            this.div.style.color = "black";
        }
        roll() {
            this.value = getRandomValue(1, 21);
            this.div.innerText = this.value;
        }
    }


    reRollButton.addEventListener("click", reRoll);
    d4Button.addEventListener("click", makeD4);
    d6Button.addEventListener("click", makeD6);
    d8Button.addEventListener("click", makeD8);
    d10Button.addEventListener("click", makeD10);
    d12Button.addEventListener("click", makeD12);
    d20Button.addEventListener("click", makeD20);
    dieSumButton.addEventListener('click', sumDice);

    function makeD4() {
        let d4 = new D4(getRandomValue(1, 5));
        diceArray.push(d4);
        console.log(diceArray);
    };
    function makeD6() {
        let d6 = new D6(getRandomValue(1, 7));
        diceArray.push(d6);
        console.log(diceArray);
    };
    function makeD8() {
        let d8 = new D8(getRandomValue(1, 9));
        diceArray.push(d8);
        console.log(diceArray);
    };
    function makeD10() {
        let d10 = new D10(getRandomValue(1, 9));
        diceArray.push(d10);
        console.log(diceArray);
    };
    function makeD12() {
        let d12 = new D12(getRandomValue(1, 13));
        diceArray.push(d12);
        console.log(diceArray);
    };
    function makeD20() {
        let d20 = new D20(getRandomValue(1, 21));
        diceArray.push(d20);
        console.log(diceArray);
    };

    function reRoll() {
        for (let i = 0; i < diceArray.length; i++) {
            diceArray[i].roll();
        }
    }

    function sumDice() {
        let sum = 0;
        for (let i = 0; i < diceArray.length; i++) {
            sum += diceArray[i].value;
        }

        alert(`Total: ${sum}`);
    };
    resetButton.addEventListener("click", function() {
        location.reload()
    });



    // event listener (
    // // let newdie = new Die(math.random.... )
    // )

    //end of body
});
