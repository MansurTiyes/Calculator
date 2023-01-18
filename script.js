let firstInput = "0";
let lastInput = "";
let selectedOperation;
let res;
let savedOperation;
let savedLastInput;

const inputField = document.querySelector('.inputField');

const numberButton = document.querySelectorAll('.numberButton');

const clearButton = document.querySelector('#clearButton');

for(let i=0; i<numberButton.length; i++){
    numberButton[i].addEventListener('click',function(e){
        //TODO WORK ON DECIMAL LIMIT
        /*
        if (inputField.textContent.length>8){
            inputField.textContent = decimalLimit(inputField.textContent);
        }*/
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
            if (firstInput==""){
                firstInput = res;
            }
            lastInput += e.target.id;
            inputField.textContent = lastInput;
        }
        clearButton.textContent = "C";
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
                    selectedOperation = null;
                    savedOperation = "addition";
                    firstInput = "";
                    savedLastInput = lastInput;
                    lastInput = "";
                    inputField.textContent = res;
                    break;
                case "subtraction":
                    res = subtractionOperation(firstInput, lastInput);
                    selectedOperation = null;
                    savedOperation = "subtraction";
                    firstInput = "";
                    savedLastInput = lastInput;
                    lastInput = "";
                    inputField.textContent = res;
                    break;
                case "multiplication":
                    res = mulOpertation(firstInput, lastInput);
                    selectedOperation = null;
                    savedOperation = "multiplication";
                    firstInput = "";
                    savedLastInput = lastInput;
                    lastInput = "";
                    inputField.textContent = res;
                    break;
                case "division":
                    res = divisionOperation(firstInput, lastInput);
                    selectedOperation = null;
                    savedOperation = "multiplication";
                    firstInput = "";
                    savedLastInput = lastInput;
                    lastInput = "";
                    inputField.textContent = res;
                    break;
            }
        }
        //TODO WORK ON DECIMAL LIMIT
        /*if (inputField.textContent.length>8){
            inputField.textCOntent = decimalLimit(inputField.textContent);
        }*/
        //TODO else of equals operation
    })
}

const greyButton = document.querySelectorAll('.greyButton');
for (let i =0; i<greyButton.length; i++){
    greyButton[i].addEventListener('click',function(e){
        switch(e.target.id){
            case "clearButton":
                res = "0";
                firstInput = "0";
                lastInput = "";
                inputField.textContent = firstInput;
                clearButton.textContent = "AC";
                break;
            case "signChange":
                if (inputField.textContent == firstInput){
                    firstInput = signReverse(firstInput);
                    inputField.textContent = firstInput;
                }
                else if (inputField.textContent == lastInput){
                    lastInput = signReverse(lastInput);
                    inputField.textContent = lastInput;
                }
                else {
                    res = signReverse(res);
                    inputField.textContent = res;
                }
                break;
            case "percentageOption":
                if (inputField.textContent == firstInput){
                    firstInput = percentageFind(firstInput);
                    inputField.textContent = firstInput;
                }
                else if (inputField.textContent == lastInput){
                    lastInput = percentageFind(lastInput);
                    inputField.textContent = lastInput;
                }
                else {
                    res = percentageFind(res);
                    inputField.textContent = res;
                }
                break;
        }
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

function signReverse(input){
    return -Number(input);
}

function percentageFind(input){
    return input/100;
}

function decimalLimit(input){
    input.slice(8);
    return input;
}
