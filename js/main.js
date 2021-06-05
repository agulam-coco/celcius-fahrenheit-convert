//variable declarations

//convert button
const btn = document.querySelector('button');

//the inputted integer value
const degree = document.getElementById('degrees');

//convert from choice list
const temperature = document.getElementById('from');

//convert to choice list
const convertTo = document.getElementById('to');

// result div box element
let result = document.getElementById('result');

//listner to remove caution placeholder which might be set
degree.onclick = (event)=>{
    degree.placeholder = ''
    degree.style.border = '2px solid gray';
}

// listner to watch for button click
btn.onclick = (event)=>{
    event.preventDefault();
    
    //check if degree is null
    if(degree.value === ''){
        setError(degree)
    }

    else{
        if(temperature.value === 'f'){

            if(convertTo.value === 'c'){
                 result.innerText = result.textContent = fahrenheitToCelsius(degree.value) + '°C';
            }

            else if(convertTo.value === 'k') {
                result.innerText = result.textContent = fahrenheitToKelvin(degree.value) + 'K';
            }

            else{
                selectOption(convertTo,'c')
                btn.click()
            }
        }

        else if(temperature.value === 'c'){

            if(convertTo.value === 'f'){
                result.innerText = result.textContent = celsiusToFahrenheit(degree.value) + '°F';
            }

            else if(convertTo.value === 'k') {
                result.innerText = result.textContent = celsiusToKelvin(degree.value) + 'K';
            }

            else{
                selectOption(convertTo,'f')
                btn.click()
            }
        }

        else{
            if(convertTo.value === 'f'){
                result.innerText = result.textContent = kelvinToFahrenheit(degree.value) + '°F';
            }

            else if(convertTo.value === 'c'){
                result.innerText = result.textContent = kelvinToCelsius(degree.value) + '°C';
            }

            else{
                selectOption(convertTo,'c')
                btn.click()
            }
        }
    }
}

//sets error on input for degrees
function setError(elm) {
    elm.style.border = '2px solid #ff0000';
    elm.placeholder = '⚠️';
}

//selects a  newValue from a selection list 
function selectOption(convertTo, newValue){
    //select celsius and convert
    let opts = convertTo.options;
    for (let opt, j = 0; opt = opts[j]; j++) {
        if (opt.value == newValue) {
            convertTo.selectedIndex = j;
            break;
        }
    }
}

function fahrenheitToKelvin(f){
    return (parseInt(f)-32) * 5/9 + 273.15;
}

function fahrenheitToCelsius(f){
    return (parseInt(f)-32) * 5/9;
}

function celsiusToFahrenheit(c){
    return parseInt(c) * 9/5 + 32;
}

function celsiusToKelvin(c){
    return parseInt(c) + 273.15;
}

function kelvinToFahrenheit(k){
    return (parseInt(k) - 273.15) * 9/5 + 32;
}

function kelvinToCelsius(k){
    return parseInt(k) - 273.15;
}