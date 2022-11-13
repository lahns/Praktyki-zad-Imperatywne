function handleCalculatorForm(form){

    let formValue1 = parseFloat(form.inputbox1.value);
    let formValue2 = parseFloat(form.inputbox2.value);
    const radioButtons = document.querySelectorAll('input[name="operation_type"]');
    let selected;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selected = radioButton.value;
            break;
        }
    }
    console.log(selected);
    document.getElementById("calcResult").innerHTML = calculate(formValue1,formValue2,selected);
}

function handlePalindromeForm(form){

    let formValue = form.inputbox3.value;
    document.getElementById("palindromeResult").innerHTML = palindrome(formValue);
}

function handleAnagramForm(form){

    let formValue1 = form.inputbox4.value;
    let formValue2 = form.inputbox5.value;
    document.getElementById("anagramResult").innerHTML = anagram(formValue1,formValue2);
}

function handleSecondForm(form){

    let formValue = form.inputbox6.value.trim().split(",");
    document.getElementById("secondResult").innerHTML = theSecond(formValue);
}

function calculate(num1, num2, option){
    let operations = {
        "add" : function(){ return num1 + num2},
        "substract" : function(){ return num1 - num2},
        "multiply" : function(){ return num1 * num2},
        "divide" : function(){ return (num2 !== 0) ? num1 / num2 : "dzielenie przez zero"}
    }
    return operations[option]();
}

function palindrome(var1){
    let reverse = "";
    for(let i = var1.length - 1;i>=0;i--){
        reverse += var1[i];
    }
    return (var1===reverse) ? true : false;
}

function bubblesort(arr, flag){
    if(typeof(arr && flag == "toChar")=="string"){
        for(let i=0; i<arr.length; i++){
            arr[i] = arr[i].charCodeAt(0);
        }
    }
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

function anagram(var1,var2){
    let letters1 = var1.split("");
    let letters2 = var2.split("");
    letters1 = bubblesort(letters1, "toChar");
    letters2 = bubblesort(letters2, "toChar");
    if (JSON.stringify(letters1) == JSON.stringify(letters2)){
        return true;
    }
    return false; 
}
function theSecond(arr){
    console.log(arr)
    let tryParse = parseInt(arr[0]);
    if(isNaN(tryParse)){
        let lengths = [];
        let secondLongestSize = 0;
        for(let i = 0; i < arr.length; i++){
            lengths.push(arr[i].length);
        }
        lengths = bubblesort(lengths, 0);
        longest = lengths[lengths.length-1];
        for(let i = lengths.length-1;i>=0;i--){
            if(lengths[i]<longest){
                secondLongestSize = lengths[i];
                break;
            }
        }
        for(let i = 0; i <arr.length; i++){
            if(arr[i].length==secondLongestSize){
                return arr[i];
            }
        } 
    }
    else{
        for(let i = 0; i < arr.length; i++){
            arr[i] = parseInt(arr[i]);
        }
        arr = bubblesort(arr, 0);
        let biggest = arr[arr.length-1];
        let secondBiggest = 0;
        for(let i = arr.length-1;i>=0;i--){
            if(arr[i]<biggest){
                secondBiggest = arr[i];
                break;
            }
        }
        return secondBiggest;
    }
}
