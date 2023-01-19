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
        this.classList.add('numberButtonAnimation');
        orangeRemove();
        setTimeout(function(){
            numberButton[i].classList.remove('numberButtonAnimation');
        },250);
        if (selectedOperation ==  null){
            if (firstInput==0){
                firstInput="";
                firstInput = e.target.id;
                inputField.textContent = firstInput;
            }
            else{
                firstInput+=e.target.id;
                inputField.textContent = firstInput;}
        }
        else {
            if (firstInput==""){
                firstInput = res;
            }
            lastInput += e.target.id;
            inputField.textContent = lastInput;
        }
        clearButton.textContent = "C";
        if (inputField.textContent.length>8){
            inputField.textContent = inputField.textContent.slice(0,8);
        }
    });
};

const orangeButton = document.querySelectorAll('.orangeButton');

for(let i =0; i<orangeButton.length;i++){
    orangeButton[i].addEventListener('click',function(e){
        orangeRemove();
        if (e.target.id!="equals"){
            selectedOperation = e.target.id;
            this.classList.add('orangeButtonAnimation');
        }
        else if (e.target.id=="equals"&&firstInput==""){
            switch (savedOperation){
                case "addition":
                    res = additionOperation(res,savedLastInput);
                    inputField.textContent = res;
                    break;
                case "subtraction":
                    res = subtractionOperation(res, savedLastInput);
                    inputField.textContent = res;
                    break;
                case "multiplication":
                    res = mulOpertation(res, savedLastInput);
                    inputField.textContent = res;
                    break;
                case "division":
                    res = divisionOperation(res, savedLastInput);
                    inputField.textContent = res;
                    break;
            }
        }
        else{
            this.classList.add('orangeButtonAnimation');
            setTimeout(function(){
                orangeButton[i].classList.remove('orangeButtonAnimation');
            },100)
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
                    savedOperation = "division";
                    firstInput = "";
                    savedLastInput = lastInput;
                    lastInput = "";
                    inputField.textContent = res;
                    break;
            }
        }
        if (inputField.textContent.length>8){
            inputField.textContent = inputField.textContent.slice(0,8);
        }
    })
}

const greyButton = document.querySelectorAll('.greyButton');
for (let i =0; i<greyButton.length; i++){
    greyButton[i].addEventListener('click',function(e){
        this.classList.add('greyButtonAnimation');
        setTimeout(function(){
            greyButton[i].classList.remove('greyButtonAnimation');
        }, 250);
        switch(e.target.id){
            case "clearButton":
                res = "0";
                firstInput = "0";
                lastInput = "";
                inputField.textContent = firstInput;
                clearButton.textContent = "AC";
                orangeRemove();
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

function orangeRemove(){
    for(let i=0;i<orangeButton.length;i++){
        orangeButton[i].classList.remove('orangeButtonAnimation');
    }
}
