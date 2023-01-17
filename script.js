let firstInput = "0";
let lastInput = "";
let selectedOperation;
let res;
let savedOperation;
let savedLastInput;

const inputField = document.querySelector('.inputField');

const numberButton = document.querySelectorAll('.numberButton');

for(let i=0; i<numberButton.length; i++){
    numberButton[i].addEventListener('click',function(e){
        if (selectedOperation ==  null){
            if (firstInput==0){
                firstInput="";
                firstInput = e.target.id;
                inputField.textContent = firstInput;
            }
            else{
                firstInput+=e.target.id;
                inputField.textContent = firstInput;}
            //TODO CHANGE THIS SECTION TO CHECK IF OPERATOR IS NULL INSTEAD OF FIRST INPUT
        }
        else {
            lastInput += e.target.id;
            inputField.textContent = lastInput;
        }
    });
};

const orangeButton = document.querySelectorAll('.orangeButton');

for(let i =0; i<orangeButton.length;i++){
    orangeButton[i].addEventListener('click',function(e){
        if (e.target.id!="equals"){
            selectedOperation = e.target.id;
        }
        else{
            switch(selectedOperation){
                case "addition":
                    res = additionOperation(firstInput,lastInput);
                    console.log(res);
                    selectedOperation = null;
                    savedOperation = "addition";
                    firstInput = "";
                    savedLastInput = lastInput;
                    lastInput = "";
                    inputField.textContent = res;
                    break;
                case "subtraction":
                    res = subtractionOperation(firstInput, lastInput);
                    console.log(res);
                    selectedOperation = null;
                    savedOperation = "subtraction";
                    firstInput = "";
                    savedLastInput = lastInput;
                    lastInput = "";
                    inputField.textContent = res;
                    break;
                case "multiplication":
                    res = mulOpertation(firstInput, lastInput);
                    console.log(res);
                    selectedOperation = null;
                    savedOperation = "multiplication";
                    firstInput = "";
                    savedLastInput = lastInput;
                    lastInput = "";
                    inputField.textContent = res;
                    break;
                case "division":
                    res = divisionOperation(firstInput, lastInput);
                    console.log(res);
                    selectedOperation = null;
                    savedOperation = "multiplication";
                    firstInput = "";
                    savedLastInput = lastInput;
                    lastInput = "";
                    inputField.textContent = res;
                    break;
            }
        }
        //TODO else of equals operation
    })
}

function additionOperation(initialInput, finalInput){
    return Number(initialInput)+Number(finalInput);
}

function subtractionOperation(initialInput, finalInput){
    return initialInput-finalInput;
}

function mulOpertation(initialInput, finalInput){
    return initialInput*finalInput;
}

function divisionOperation(initialInput, finalInput){
    return initialInput/finalInput;
}