(() => {
    if (/Android/i.test(navigator.userAgent)) {
        document.documentElement.classList.add("android");
    }
})();
const logoSVG = `<svg
                draggable="false"
                class="logo"
                width="100%" 
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                baseProfile="tiny"
                version="1.2"
                viewBox="0 0 26.8 14.1"
              >
                <path
                  d="M26.2,6.4c1.5-2.2,0-6.5-3.7-6.5-2.08,0-3.3.8-3.8,2-.05.13-.1,0-.1,0-.6-1.2-1.8-2-3.1-2s-2.8.7-3.4,2c-.09.18-.1,0-.1,0C11.4.7,10-.1,8.5-.1s-3.1.9-3.7,2c-.05.1-.1,0-.1,0C3.9.5,2.2,0,1.2,0,.98,0,.8.1.8.3L.2,4.4c0,.2,0,.3.3.4.5.1.8.6.7,1.1l-1.2,7.7s0,.2.1.2h4.5s.1,0,.1-.1l1.2-7.8c0-.6.6-1.1,1.2-1s.9.7.8,1.4l-1.11,7.29s0,.2.1.2h4.6s.1,0,.1-.1l1.21-7.69c0-.6.5-1.1,1.2-1s.9.7.8,1.4l-1.07,7.19s0,.2.1.2h4.6s.1,0,.1-.1l1.07-6.89c.2-1.4,1-1.9,1.6-1.8s1,1,0,2.7-.6,3.9.4,5l1.6,1.6c.1.1.4.1.5,0l2.2-2.3c.1-.1.1-.3,0-.5l-.9-1c-.93-1.21.18-2.6,1.2-4.1Z"
                  fill="#efefef"
                />
              </svg>`;

const solarPanelSVG = `<svg
                class="solarPanel"
                xmlns="http://www.w3.org/2000/svg"
                baseProfile="tiny"
                version="1.2"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 178.81 22.84"
              >
                <rect width="42" height="23" fill="#48303c" />
                <rect x="45.6" width="42" height="23" fill="#4b333b" />
                <rect x="91.21" width="42" height="23" fill="#4e3539" />
                <rect x="136.81" width="42" height="23" fill="#503838" />
              </svg>`;

const powerButtonSVG = `<svg
                xmlns="http://www.w3.org/2000/svg"
                class="buttonSymbol"
                viewBox="0 0 25.4 27.6"
              >
                <defs>
                  <style>
                    .cls-1 {
                      fill: #fff;
                    }
                  </style>
                </defs>
                <g>
                  <g>
                    <path
                      class="cls-1"
                      d="M12.7,27.6a12.81,12.81,0,0,1-6.42-1.67,12,12,0,0,1-4.61-4.61A12.81,12.81,0,0,1,0,14.9,12.8,12.8,0,0,1,1.67,8.49,12.11,12.11,0,0,1,6.28,3.87L7.92,6.61a8.05,8.05,0,0,0-3.58,3.58,10.36,10.36,0,0,0-1.2,4.71,10.36,10.36,0,0,0,1.2,4.71,8,8,0,0,0,3.58,3.58,10.36,10.36,0,0,0,4.71,1.2,10.36,10.36,0,0,0,4.71-1.2,7.86,7.86,0,0,0,3.58-3.58,10.36,10.36,0,0,0,1.2-4.71,10.36,10.36,0,0,0-1.2-4.71,8,8,0,0,0-3.58-3.58l1.77-2.74a12.13,12.13,0,0,1,4.62,4.62A12.8,12.8,0,0,1,25.4,14.9a12.81,12.81,0,0,1-1.67,6.42,12,12,0,0,1-4.62,4.61A12.77,12.77,0,0,1,12.7,27.6ZM11,14.57V0h3.21V14.57Z"
                    />
                  </g>
                </g>
              </svg>`;

const squareRootButtonSVG = `<svg
                class="buttonSymbol"
                style="height: 35px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21.99 28.17"
              >
                <defs>
                  <style>
                    .cls-1 {
                      fill: #fff;
                    }
                  </style>
                </defs>
                <g>
                  <g>
                    <path
                      class="cls-1"
                      d="M14.29,28.17H9.41L3.49,15H0V11.15H7.59l4.1,9.37L17.37,0H22Z"
                    />
                  </g>
                </g>
              </svg>`;

const backButtonSVG = `<svg 
                        class="buttonSymbol"
                        xmlns="http://www.w3.org/2000/svg" 
                        version="1.1" viewBox="0 0 21.7 19.6"
                        >
                          <defs>
                            <style>
                                .st2 {
                                    fill: #fff;
                                }
                             </style>
                         </defs>
                         <polygon class="st2" points="21.7 4.9 10.8 4.9 10.8 0 0 9.8 10.8 19.6 10.8 14.7 21.7 14.7 21.7 4.9"/>
                         </svg>`;
const topPanelSVG = `<svg
            draggable="false"
            class="screenContainerSVG"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 450 193.7"
          >
            <defs>
              <style>
                .st0 {
                  fill: url(#linear-gradient1);
                }

                .st1 {
                  fill: url(#linear-gradient);
                }
              </style>
              <linearGradient
                id="linear-gradient"
                x1="455.5"
                y1="32.8"
                x2="4.9"
                y2="173"
                gradientTransform="translate(0 193.9) scale(1 -1)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#131218" />
                <stop offset="1" stop-color="#3b3b3b" />
              </linearGradient>
              <linearGradient
                id="linear-gradient1"
                x1="2"
                y1="9.3"
                x2="445.3"
                y2="9.3"
                gradientTransform="translate(0 193.9) scale(1 -1)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#787878" />
                <stop offset="1" stop-color="#131218" />
              </linearGradient>
            </defs>
            <g>
              <g>
                <path
                  class="st1"
                  d="M450,178.7s-96.8,10.5-236.4,10.5S0,178.7,0,178.7V0h450v178.7Z"
                  shape-rendering="optimizeQuality"
                />
                <path
                  class="st0"
                  d="M0,177.1v4.4s74,10.5,213.6,10.5,236.4-10.5,236.4-10.5v-4.4s-96.8,10.5-236.4,10.5S0,177.1,0,177.1Z"
                  shape-rendering="optimizeQuality"
                />
              </g>
            </g>
          </svg>
`;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('logoContainer').innerHTML = logoSVG;
    document.getElementById('solarPanelContainer').innerHTML = solarPanelSVG;
    document.getElementById('screenContainer').insertAdjacentHTML('beforeend', topPanelSVG);
    document.querySelector('#buttonPower .buttonGlare').insertAdjacentHTML('beforebegin', powerButtonSVG);
    document.querySelector('#buttonBack .buttonGlare').insertAdjacentHTML('beforebegin', backButtonSVG);
    document.querySelector('#buttonSquareRoot .buttonGlare').insertAdjacentHTML('beforebegin', squareRootButtonSVG);
});

window.addEventListener("load", (event) => {
    state = 1;
    currentValue = "0";
    operator = "";
    isMemoryAdded = false;
    isError = false;
    memoryValue = 0;
    setScreen(currentValue, isMemoryAdded, isError);
    debugPrintValues();
});

function handleKeys(event) {
    if (event.key >= '0' && event.key <= '9') {
        onUserInput(event.key);
        return true;
    }

    if (event.code == 'Backspace') {
        onUserInput('back');
        return true;
    }

    if (event.code == 'Escape') {
        if (state === 0) {
            onUserInput('power');
            return true;
        }
        onUserInput('clear');
        return true;
    }

    if (event.code == 'Delete') {
        onUserInput('clear');
        return true;
    }

    if (event.code == 'Period' || event.code == 'NumpadDecimal') {
        onUserInput('decimal');
        return true;
    }

    if (event.code == 'NumpadSubtract' || event.code == 'Minus') {
        onUserInput('-');
        return true;
    }

    if (event.code == 'NumpadMultiply') {
        onUserInput('*');
        return true;
    }

    if (event.code == 'NumpadDivide' || (event.code == 'Slash' && event.shiftKey == false)) {
        onUserInput('/');
        return true;
    }

    if (event.code == 'NumpadAdd' || (event.code == 'Equal' && event.shiftKey == true)) {
        onUserInput('+');
        return true;
    }

    if (event.code == 'NumpadEnter' || event.code == 'Enter' || (event.code == 'Equal' && event.shiftKey == false || event.code == 'Space')) {
        onUserInput('=');
        return true;
    }
    return false;
}

document.addEventListener("keydown", (event) => {
    if (handleKeys(event)) {
        event.preventDefault();
    }
})

function setDot(index, state) {
    const dot = document.getElementById(`dot${index}`);
    if (dot) { dot.classList.toggle('active', state) };
}

function setDigit(index, value, state) {
    const digit = document.getElementById(`digit${index}`);
    if (digit) {
        digit.classList.toggle('active', state);
        digit.textContent = value;
    }
}

function setMinus(state) {
    const MinusIndicator = document.getElementById("MinusIndicator");
    if (state) {
        MinusIndicator.style.backgroundColor = "black";
        return;
    }
    MinusIndicator.style.backgroundColor = "#BBCAB5";
}

function setMemory(state) {
    const MemoryIndicator = document.getElementById("MemoryIndicator");
    if (state) {
        MemoryIndicator.style.color = "black";
        return;
    }
    MemoryIndicator.style.color = "#BBCAB5";
}

function setError(state) {
    const ErrorIndicator = document.getElementById("ErrorIndicator");
    if (state) {
        ErrorIndicator.style.color = "black";
        return;
    }
    ErrorIndicator.style.color = "#BBCAB5";
}

function setScreen(currentValue, isMemoryAdded, isError) {
    for (let i = 0; i < maxChars; i++) {
        setDot(i, false)
    }

    setMinus(false);
    setMemory(isMemoryAdded);
    setError(isError);

    if (currentValue[0] === "-") {
        setMinus(true);
        currentValue = currentValue.slice(1);
    }

    const decimalIndex = currentValue.indexOf(".");

    let padLeft = maxChars - currentValue.length;

    if (decimalIndex !== -1) {
        currentValue = currentValue.slice(0, decimalIndex) + currentValue.slice(decimalIndex + 1);
        //padLeft was calculated before removing the dot hence ++
        padLeft++;
        // decimalIndex-1 because dots and digits indexes are not alligned
        setDot(padLeft + decimalIndex - 1, true);
    }
    for (let i = 0; i < padLeft; i++) {
        setDigit(i, 0, false);
    }
    for (let i = padLeft; i < maxChars; i++) {
        setDigit(i, currentValue[i - padLeft], true);
    }
}

const maxChars = 9;

let state = 0;

let currentValue = null;
let operator = null;
let isMemoryAdded = false;
let isError = false;
let isFirstOperation = true;
let memoryValue = null;
let operand1 = null;

function onUserInput(input) {
       switch (state) {
        //0. Calc Off
        case 0:
            if (input === "power") {
                state = 1;
                currentValue = "0";
                operator = "";
                isMemoryAdded = false;
                isError = false;
                memoryValue = 0;
            }            
            debugPrintValues(); 
            break;
        //1. Composing Digit
        case 1:
            handleState1(input);
            debugPrintValues();
            break;
        //2. Waiting Input
        case 2:
            handleState2(input);
            debugPrintValues();
            break;
        //3. Composing Next Operand
        case 3:
            handleState3(input);
            debugPrintValues();
            break;
        //4. Show calculated result (first time)
        case 4:
            handleState4(input);
            debugPrintValues();
            break;
        //5. Error without memory
        case 5:
            handleState5(input);
            debugPrintValues();
            break;
        //6. M+ Post Memory Store
        case 6:
            handleState6(input);
            debugPrintValues();
            break;
        //7. M+ Composing Digit
        case 7:
            handleState7(input);
            debugPrintValues();
            break;
        //8. M+ Waiting input
        case 8:
            handleState8(input);
            debugPrintValues();
            break;
        //9. M+ Post Memory Recall Op2
        case 9:
            handleState9(input);
            debugPrintValues();
            break;
        //10. M+ Composing second operand
        case 10:
            handleState10(input);
            debugPrintValues();
            break;
        //11. M+ Show calculated result
        case 11:
            handleState11(input);
            debugPrintValues();
            break;
        //12. M+ Error
        case 12:
            handleState12(input);
            debugPrintValues();
            break;
        //13. Show result with first operand saved 
        case 13:
            handleState13(input);
            debugPrintValues();
            break;
        //14. Show calculated result (not first time)
        //Probably redundant
        case 14:
            handleState13(input);
            debugPrintValues();
            break;
    }
    setScreen(currentValue, isMemoryAdded, isError);
}

//1. Composing Digit
function handleState1(input) {
    if (input === "power") {
        powerOff();
    }
    if (input === "clear") {
        clear();
    }
    if (input === "back") {
        back();
    }
    if (input >= "0" && input <= "9") {
        if (currentValue === "0") {
            currentValue = input;
            return;
        }
        if (getDigitAbsoluteLength(currentValue) === maxChars) {
            console.log("%cInfo: %cNumber of digits exceeds maxChar", "color :aqua; font-weight:bold", "color:white")
            return;
        }
        currentValue += input;
        return;
    }
    if (input === "decimal") {
        if (currentValue.includes(".")) {
            return;
        }

        if (currentValue === "0") {
            currentValue = "0.";
        } else {
            currentValue += ".";
        }
        return;
    }
    if (input === "+" || input === "-" || input === "*" || input === "/") {
        operand1 = +currentValue;
        state = 2;
        operator = input;
        return;
    }
    if (input === "sign") {
        if (currentValue[0] === "-") {
            currentValue = currentValue.substring(1);
            return;
        }
        if (currentValue !== "0") {
            currentValue = "-" + currentValue;
        }
    }
    if (input === "sqrt") {
        currentValue = trimDecimals(sqrt(currentValue));
    }
    if (input === "m+") {
        state = 6;
        isMemoryAdded = true;
        memoryValue += +currentValue;
    }
}

//2. Waiting Input
function handleState2(input) {
    if (input === "power") {
        powerOff();
    }
    if (input === "clear") {
        clear();
    }
    if (input >= "0" && input <= "9") {        
        //check if this commented line needed at some point       
        // operand1 = +currentValue;
        currentValue = input;
        state = 3;
        return;        
    }
    if (input === "decimal") {        
        currentValue = "0.";
        state = 3;
        return;
    }
    if (input === "+" || input === "-" || input === "*" || input === "/") {
        operator = input;
        return;
    }
    if (input === "sign") {
        //check if this commented line needed at some point
        // operand1 = +currentValue;
        if (currentValue[0] === "-") {
            currentValue = currentValue.substring(1);
            return;
        }
        if (currentValue !== "0") {
            currentValue = "-" + currentValue;
            state = 3;
        }
    }
    if (input === "sqrt") {
        currentValue = trimDecimals(sqrt(currentValue));
        state = 13;
    }
    if (input === "=") {
        if (operator === "/" && currentValue === "0") {
            isError = true;
            state = 5;
            return;
        }
        state = 4;
        currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator));
        if (getDigitAbsoluteLength(currentValue) > maxChars) {
            isError = true;
            state = 5;
        }
        return;
    }
    if (input === "m+") {
        state = 6;
        isMemoryAdded = true;
        memoryValue += +currentValue;
    }
}

//3. Composing Next Operand
function handleState3(input) {
    if (input === "power") {
        powerOff();
    }
    if (input === "clear") {
        clear();
    }
    if (input === "back") {
        back();
    }
    if (input >= "0" && input <= "9") {
        if (getDigitAbsoluteLength(currentValue) === maxChars) {
            console.log("%cInfo: %cNumber of digits exceeds maxChar", "color :aqua; font-weight:bold", "color:white")
            return;
        }
        currentValue += input;
        return;
    }
    if (input === "decimal") {
        if (currentValue.includes(".")) {
            return;
        }

        if (currentValue === "0") {
            currentValue = "0.";
        } else {
            currentValue += ".";
        }
        return;
    }
    if (input === "+" || input === "-" || input === "*" || input === "/") {
        if (operator === "/" && currentValue === "0") {
            console.log("%cError: %cYou can't divide by zero", "color :red; font-weight:bold", "color:white")
            isError = true;
            state = 5;
            return;
        }
        isFirstOperation = false;
        currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator));
        operator = input;
        operand1 = +currentValue;
        state = 4;
        return;
    }
    if (input === "sign") {
        if (currentValue[0] === "-") {
            currentValue = currentValue.substring(1);
            return;
        }
        if (currentValue !== "0") {
            currentValue = "-" + currentValue;
        }
    }
    if (input === "sqrt") {
        currentValue = trimDecimals(sqrt(currentValue));
        state = 13;
    }
    if (input === "=") {        
        if (operator === "/" && currentValue === "0") {
            console.log("%cError: %cYou can't divide by zero", "color :red; font-weight:bold", "color:white")
            isError = true;
            state = 5;
            return;
        }
        state = 4;
        let tmp = +currentValue;
        currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator));
        operand1 = tmp;
        if (getDigitAbsoluteLength(currentValue) > maxChars) {
            isError = true;
            state = 5;
        }
        return;
    }
    if (input === "%") {
        if (!operator) return;
        currentValue = trimDecimals(calculatePercentage(operand1, +currentValue, operator));
    }
    if (input === "m+") {
        isMemoryAdded = true;
        currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator));
        memoryValue += + currentValue;
        state = 6;
        operator = '';
    }
}

//4. Show calculated result
function handleState4(input) {
    if (input === "power") {
        powerOff();
    }
    if (input === "clear") {
        clear();
    }
    if (input >= "0" && input <= "9") {
        if (isFirstOperation) {            
            state = 1; //
            currentValue = input;
            operator = "";
            return;
        }
        state = 3;
        currentValue = input;
        return;
    }
    if (input === "decimal") {
        state = 1;        
        currentValue = "0.";
        operator = "";
        return;
    }
    if (input === "+" || input === "-" || input === "*" || input === "/") {
        operand1 = +currentValue;
        operator = input;
        state = 2;
        return;
    }
    if (input === "sign") {
        if (currentValue[0] === "-") {
            currentValue = currentValue.substring(1);
            return;
        }
        if (currentValue !== "0") {
            currentValue = "-" + currentValue;
        }
    }
    if (input === "sqrt") {
        currentValue = trimDecimals(sqrt(currentValue));
    }
    if (input === "=") {
        if (operator === "/" && operand1 === 0) {
            console.log("%cError: %cYou can't divide by zero", "color :red; font-weight:bold", "color:white")
            isError = true;
            state = 5;
            return;
        }
        state = 4;
        currentValue = trimDecimals(calculateResult(+currentValue, operand1, operator));

        if (getDigitAbsoluteLength(currentValue) > maxChars) {
            isError = true;
            state = 5;
        }
        return;
    }
    if (input === "m+") {
        isMemoryAdded = true;
        memoryValue += +currentValue;
        state = 11;
    }
}

//14. Show calculated result
function handleState14(input) {
    if (input === "power") {
        powerOff();
    }
    if (input === "clear") {
        clear();
    }
    if (input >= "0" && input <= "9") {
        state = 3;
        currentValue = input;
        return;
    }
    if (input === "decimal") {
        state = 3;
        currentValue = "0.";
        return;
    }
    if (input === "+" || input === "-" || input === "*" || input === "/") {
        operand1 = +currentValue;
        operator = input;
        state = 2;
        return;
    }
    if (input === "sign") {
        if (currentValue[0] === "-") {
            currentValue = currentValue.substring(1);
            return;
        }
        if (currentValue !== "0") {
            currentValue = "-" + currentValue;
        }
    }
    if (input === "sqrt") {
        currentValue = trimDecimals(sqrt(currentValue));
    }
    if (input === "=") {
        if (operator === "/" && operand1 === 0) {
            console.log("%cError: %cYou can't divide by zero", "color :red; font-weight:bold", "color:white")
            isError = true;
            state = 5;
            return;
        }
        state = 4;
        currentValue = trimDecimals(calculateResult(+currentValue, operand1, operator));

        if (getDigitAbsoluteLength(currentValue) > maxChars) {
            isError = true;
            state = 5;
        }
        return;
    }
    if (input === "m+") {
        isMemoryAdded = true;
        memoryValue += +currentValue;
        state = 11;
    }
}

//5. Error without memory
function handleState5(input) {
    if (input === "power") {
        powerOff();
    }
    if (input === "clear") {
        clear();
    }
    if (input === "back") {
        clear();
    }
}


//6.M+ Post Memory Store
function handleState6(input) {
    if (input === "power") {
        powerOff();
    }
    if (input === "clear") {
        clear();
        state = 6;
    }
    // if (input === "back") {
    // }
    if (input >= "0" && input <= "9") {
        state = 7;
        currentValue = input;
        operator = "";
        return;
    }
    if (input === "decimal") {
        state = 7;
        currentValue = "0.";
        return;
    }
    if (input === "+" || input === "-" || input === "*" || input === "/") {
        operand1 = +currentValue;
        operator = input;
        state = 10;
        return;
    }
    if (input === "sign") {
        if (currentValue[0] === "-") {
            currentValue = currentValue.substring(1);
            return;
        }
        if (currentValue !== "0") {
            currentValue = "-" + currentValue;
        }
    }
    if (input === "sqrt") {
        currentValue = trimDecimals(sqrtM(currentValue));
        state = 11;
    }
    // if (input === "=") {
    // }
    if (input === "m+") {
        memoryValue += +currentValue;
    }
    if (input === 'mr') {
        currentValue = memoryValue.toString();
        state = 7;
    }
}

//7.M+ Composing Digit
function handleState7(input) {
    if (input === "power") {
        powerOff();
    }
    if (input === "clear") {
        clear();
    }
    if (input === "back") {
        back();
    }
    if (input >= "0" && input <= "9") {
        if (currentValue === "0") {
            currentValue = input;
            return;
        }
        if (getDigitAbsoluteLength(currentValue) === maxChars) {
            console.log("%cInfo: %cNumber of digits exceeds maxChar", "color :aqua; font-weight:bold", "color:white")
            return;
        }
        currentValue += input;
        return;
    }
    if (input === "decimal") {
        if (currentValue.includes(".")) {
            return;
        }

        if (currentValue === "0") {
            currentValue = "0.";
        } else {
            currentValue += ".";
        }
        return;
    }
    if (input === "+" || input === "-" || input === "*" || input === "/") {
        operand1 = +currentValue;
        state = 8;
        operator = input;
        return;
    }
    if (input === "sign") {
        if (currentValue[0] === "-") {
            currentValue = currentValue.substring(1);
            return;
        }
        if (currentValue !== "0") {
            currentValue = "-" + currentValue;
        }
    }
    if (input === "sqrt") {
        currentValue = trimDecimals(sqrtM(currentValue));
        state = 11;
    }
    if (input === "m+") {
        memoryValue += +currentValue;
    }
    if (input === 'mr') {
        currentValue = memoryValue.toString();
    }
}

//8. M+ Waiting input
function handleState8(input) {
    if (input === "power") {
        powerOff();
    }
    if (input === "clear") {
        clear();
        state = 7;
    }
    if (input >= "0" && input <= "9") { 
        //check if this commented line needed at some point       
        // operand1 = +currentValue;
        currentValue = input;
        state = 10;
        return;
    }
    if (input === "decimal") {        
        currentValue = "0.";
        state = 10;
        return;
    }
    if (input === "+" || input === "-" || input === "*" || input === "/") {
        operator = input;
        return;
    }
    if (input === "sign") {
        //check if this commented line needed at some point
        // operand1 = +currentValue;
        if (currentValue[0] === "-") {
            currentValue = currentValue.substring(1);
            return;
        }
        if (currentValue !== "0") {
            currentValue = "-" + currentValue;
            state = 10;
        }
    }
    if (input === "sqrt") {
        currentValue = trimDecimals(sqrtM(currentValue));
        //not sure if should be 9 or a completely new state "M+ Show result with first operand saved"
        state = 9;
    }
    if (input === "=") {
        if (operator === "/" && currentValue === "0") {
            isError = true;
            state = 12;
            return;
        }
        state = 11;
        currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator));
        if (getDigitAbsoluteLength(currentValue) > maxChars) {
            isError = true;
            state = 12;
        }
        return;
    }
    if (input === "m+") {
        state = 6;
        isMemoryAdded = true;
        memoryValue += +currentValue;
    }
    if (input === 'mr') {
        currentValue = memoryValue.toString();
        state = 9;
    }
}

//9. M+ Post Memory Recall Op2
function handleState9(input) {
    if (input === "power") {
        powerOff();
    }
    if (input === "clear") {
        clear();
        state = 7;
    }
    // if (input === "back") {       
    // }
    if (input >= "0" && input <= "9") {
        currentValue = '';
        currentValue += input;
        state = 10;
        return;
    }
    if (input === "decimal") {
        state = 10;
        currentValue = "0.";
        return;
    }
    if (input === "+" || input === "-" || input === "*" || input === "/") {
        if (operator === "/" && currentValue === "0") {
            isError = true;
            state = 12;
            return;
        }
        currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator));
        operator = input;
        operand1 = currentValue;
        state = 11;
        return;
    }
    if (input === "sign") {
        if (currentValue[0] === "-") {
            currentValue = currentValue.substring(1);
            return;
        }
        if (currentValue !== "0") {
            currentValue = "-" + currentValue;
        }
    }
    if (input === "sqrt") {
        currentValue = trimDecimals(sqrtM(currentValue));
    }
    if (input === "=") {
        if (operator === "/" && currentValue === "0") {
            isError = true;
            state = 12;
            return;
        }
        state = 11;
        let tmp = +currentValue;
        currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator));
        operand1 = tmp;
        if (getDigitAbsoluteLength(currentValue) > maxChars) {
            isError = true;
            state = 12;
        }
        return;
    }
    if (input === "%") {
        currentValue = trimDecimals(calculatePercentage(operand1, +currentValue, operator));
        state = 11;
    }
    if (input === "m+") {
        memoryValue += + currentValue;
    }
    if (input === 'mr') {
        currentValue = memoryValue.toString();
    }
}

//10. M+ Composing next operand
function handleState10(input) {
    if (input === "power") {
        powerOff();
    }
    if (input === "clear") {
        clear();
        state = 7;
    }
    if (input === "back") {
        back();
    }
    if (input >= "0" && input <= "9") {
        if (getDigitAbsoluteLength(currentValue) === maxChars) {
            console.log("%cInfo: %cNumber of digits exceeds maxChar", "color :aqua; font-weight:bold", "color:white")
            return;
        }
        currentValue += input;
        return;
    }
    if (input === "decimal") {
        if (currentValue.includes(".")) {
            return;
        }
        if (currentValue === "0") {
            currentValue = "0.";
        } else {
            currentValue += ".";
        }
        return;
    }
    if (input === "+" || input === "-" || input === "*" || input === "/") {
        if (operator === "/" && currentValue === "0") {
            isError = true;
            state = 12;
            return;
        }
        currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator));
        operator = input;
        operand1 = currentValue;
        state = 11;
        return;
    }
    if (input === "sign") {
        if (currentValue[0] === "-") {
            currentValue = currentValue.substring(1);
            return;
        }
        if (currentValue !== "0") {
            currentValue = "-" + currentValue;
        }
    }
    if (input === "sqrt") {
        currentValue = trimDecimals(sqrtM(currentValue));
    }
    if (input === "=") {
        if (operator === "/" && currentValue === "0") {
            isError = true;
            state = 12;
            return;
        }
        state = 11;
        let tmp = +currentValue;
        currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator));
        operand1 = tmp;
        if (getDigitAbsoluteLength(currentValue) > maxChars) {
            isError = true;
            state = 12;
        }
        return;
    }
    if (input === "%") {
        currentValue = trimDecimals(calculatePercentage(operand1, +currentValue, operator));
        state = 11;
    }
    if (input === "m+") {
        if (operator === "/" && currentValue === "0") {
            isError = true;
            state = 12;
            return;
        }
        isMemoryAdded = true;
        memoryValue += + currentValue;
        currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator));
        state = 9;
        operator = '';
    }
    if (input === 'mr') {
        currentValue = memoryValue.toString();
        state = 8;
    }
}

//11. M+ Show calculated result
function handleState11(input) {
    if (input === "power") {
        powerOff();
    }
    if (input === "clear") {
        clear();
        state = 7;
    }
    if (input >= "0" && input <= "9") {
        state = 7;
        currentValue = input;
        operator = "";
        return;
    }
    if (input === "decimal") {
        state = 7;
        currentValue = "0.";
        return;
    }
    if (input === "+" || input === "-" || input === "*" || input === "/") {
        operand1 = +currentValue;
        operator = input;
        state = 8;
        return;
    }
    if (input === "sign") {
        if (currentValue[0] === "-") {
            currentValue = currentValue.substring(1);
            return;
        }
        if (currentValue !== "0") {
            currentValue = "-" + currentValue;
        }
    }
    if (input === "sqrt") {
        currentValue = trimDecimals(sqrtM(currentValue));
    }
    if (input === "=") {
        if (operator === "/" && operand1 === 0) {
            console.log("%cError: %cYou can't divide by zero", "color :red; font-weight:bold", "color:white")
            isError = true;
            state = 12;
            return;
        }
        state = 11;
        currentValue = trimDecimals(calculateResult(+currentValue, operand1, operator));

        if (getDigitAbsoluteLength(currentValue) > maxChars) {
            isError = true;
            state = 12;
        }
        return;
    }
    if (input === "m+") {
        memoryValue += +currentValue;
    }
    if (input === 'mr') {
        currentValue = memoryValue.toString();
        state = 9;
    }
}

//12. M+ Error
function handleState12(input) {
    if (input === "power") {
        powerOff();
    }
    if (input === "clear") {
        clear();
        state = 6;
    }
    if (input === "back") {
        clear();
        state = 6;
    }
}

//13. Show result with first operand saved
function handleState13(input) {
    if (input === "power") {
        powerOff();
    }
    if (input === "clear") {
        clear();
    }
    if (input >= "0" && input <= "9") {
        currentValue = input;
        state = 3;
        return;
    }
    if (input === "decimal") {
        state = 3;
        currentValue = "0.";
        return;
    }
    if (input === "+" || input === "-" || input === "*" || input === "/") {
        if (operator === "/" && currentValue === "0") {
            console.log("%cError: %cYou can't divide by zero", "color :red; font-weight:bold", "color:white")
            isError = true;
            state = 5;
            return;
        }
        currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator));
        operator = input;
        operand1 = +currentValue;
        state = 4;
        return;
    }
    if (input === "sign") {
        if (currentValue[0] === "-") {
            currentValue = currentValue.substring(1);
            return;
        }
        if (currentValue !== "0") {
            currentValue = "-" + currentValue;
        }
    }
    if (input === "sqrt") {
        currentValue = trimDecimals(sqrt(currentValue));
    }
    if (input === "=") {
        if (operator === "/" && operand1 === 0) {
            console.log("%cError: %cYou can't divide by zero", "color :red; font-weight:bold", "color:white")
            isError = true;
            state = 5;
            return;
        }
        state = 4;
        currentValue = trimDecimals(calculateResult(+currentValue, operand1, operator));

        if (getDigitAbsoluteLength(currentValue) > maxChars) {
            isError = true;
            state = 5;
        }
        return;
    }
    if (input === "m+") {
        isMemoryAdded = true;
        memoryValue += +currentValue;
        //check, mb this should be 9
        state = 11;``
    }
}

function powerOff() {
    state = 0;
    currentValue = "";
    operand1 = null;
    operator = "";
    isMemoryAdded = false;
    isError = false;
    isFirstOperation = true;
    console.clear();
}

function clear() {
    state = 1;
    currentValue = "0";
    isError = false;
    isFirstOperation = true;
    operator = "";
    operand1 = null;
    console.clear();
}

function back() {
    if (currentValue.length > 1) {
        currentValue = currentValue.substring(0, currentValue.length - 1);
    } else if (currentValue.length == 1) {
        currentValue = '0';
    }
}

/**
 * Returns absolute length of the number string, without minus and decimal dot.
 *
 * @param {string} number - The first number.
 * @returns {number} String length.
 */
function getDigitAbsoluteLength(number) {
    let numberLength = number.length;
    if (number[0] === "-") {
        numberLength--;
    }
    if (number.includes(".")) {
        numberLength--;
    }
    return numberLength;
}

/**
 * Trims decimal number according to maxChar.
 *
 * @param {number} decimalValue - Input value.
 * @returns {number} Trimmed value.
 */
function trimDecimals(decimalValue) {
    let result = decimalValue.toFixed(maxChars);

    if (result[0] === "-") {
        result = result.substring(0, maxChars + 2);
    }
    else {
        result = result.substring(0, maxChars + 1);
    }

    let firstNonZeroIndex = result.length - 1;
    for (let i = result.length - 1; i >= 0; i--) {
        if (result[i] !== "0") {
            firstNonZeroIndex = i;
            break;
        }
    }
    result = result.substring(0, firstNonZeroIndex + 1);
    if (result[result.length - 1] === ".") {
        result = result.substring(0, result.length - 1);
    }
    if (result === "-0") {
        result = "0"
    }
    return result;
}

/**
 * Calculates square root.
 *
 * @param {string} radicand - The radicand.
 * @returns {number} The result of calculation.
 */

function sqrt(radicand) {
    if (radicand[0] === "-") {
        state = 5;
        isError = true;
        return 0;
    }
    state = 4;
    return Math.sqrt(+radicand);
}

/**
 * Calculates square root in states with memory present.
 *
 * @param {string} radicand - The radicand.
 * @returns {number} The result of calculation.
 */
function sqrtM(radicand) {
    if (radicand[0] === "-") {
        state = 12;
        isError = true;
        return 0;
    }
    state = 11;
    return Math.sqrt(+radicand);
}

/**
 * Performs calculation between 2 numbers based on operation.
 *
 * @param {number} leftSideOperand - The first number.
 * @param {number} rightSideOperand - The second number.
 * @param {string} operation - operation.
 * @returns {number} The result of calculation.
 */
function calculateResult(leftSideOperand, rightSideOperand, operation) {

    if (operation === "+") {
        return leftSideOperand + rightSideOperand;
    }
    if (operation === "-") {
        return leftSideOperand - rightSideOperand;
    }
    if (operation === "*") {
        return leftSideOperand * rightSideOperand;
    }
    if (operation === "/") {
        return leftSideOperand / rightSideOperand;
    }
}
/**
 * Performs percentage calculation between 2 numbers based on operation.
 *
 * @param {number} leftSideOperand - The first number.
 * @param {number} rightSideOperand - The second number.
 * @param {string} operation - operation.
 * @returns {number} The result of calculation.
 */
function calculatePercentage(leftSideOperand, rightSideOperand, operation) {
    if (operation === "+") {
        return leftSideOperand + ((leftSideOperand * rightSideOperand) / 100);
    }
    if (operation === "-") {
        return leftSideOperand - ((leftSideOperand * rightSideOperand) / 100);
    }
    if (operation === "*") {
        return (leftSideOperand * rightSideOperand) / 100;
    }
    if (operation === "/") {
        return (leftSideOperand * 100) / rightSideOperand;
    }
}

/**
 * Prints the calculator's internal state values as a formatted and color-styled
 * ASCII table in the browser console.
 *
 * The function inspects a predefined set of global variables: 
 * - state
 * - operand1
 * - operator
 * - currentValue
 * - isMemoryAdded
 * - isError
 * - isFirstOperation
 *
 * Each row is styled based on the variable’s type:
 * - Numbers → blue styling
 * - Strings → orange styling
 * - Other → default console color (white)
 *
 * The output includes:
 * - Variable name
 * - Current value
 * - Value type (e.g. "number", "string", "boolean")
 *
 * The function is intended purely for debugging and visual inspection.
 * It does not return anything.
 */
function debugPrintValues() {
    console.clear();
    const blue = "color: #4ea3ff; font-weight: bold;";
    const orange = "color: #ffa64d; font-weight: bold;";
    const reset = "color: inherit;";
    const numberColors = [blue, reset, blue, reset, blue, reset];
    const stringColors = [orange, reset, orange, reset, orange, reset];
    const otherColors = [reset, reset, reset, reset, reset, reset];    
    function variableColor(variable) {
        if (typeof variable === "number") {
            return numberColors;
        }
        if (typeof variable === "string") {
            return stringColors;
        }       
        return otherColors;
    }
    function pad(str, len) {
        return String(str).padEnd(len, " ");
    }
    const COL1 = 18;
    const COL2 = 10;
    const COL3 = 10;
    console.log("┌───────────────────┬───────────┬───────────┐");
    console.log(`│ ${pad("Name", COL1)}│ ${pad("Value", COL2)}│ ${pad("Type", COL3)}│`);
    console.log("├───────────────────┼───────────┼───────────┤");
    console.log(`│ %c${pad("state", COL1)}%c│ %c${pad(state, COL2)}%c│ %c${pad(typeof state, COL3)}%c│`, ...variableColor(state));
    console.log(`│ %c${pad("operand1", COL1)}%c│ %c${pad(operand1, COL2)}%c│ %c${pad(typeof operand1, COL3)}%c│`, ...variableColor(operand1));
    console.log(`│ %c${pad("operator", COL1)}%c│ %c${pad(operator, COL2)}%c│ %c${pad(typeof operator, COL3)}%c│`, ...variableColor(operator));
    console.log(`│ %c${pad("currentValue", COL1)}%c│ %c${pad(currentValue, COL2)}%c│ %c${pad(typeof currentValue, COL3)}%c│`, ...variableColor(currentValue));
    console.log(`│ %c${pad("isMemoryAdded", COL1)}%c│ %c${pad(isMemoryAdded, COL2)}%c│ %c${pad(typeof isMemoryAdded, COL3)}%c│`, ...variableColor(isMemoryAdded));
    console.log(`│ %c${pad("isError", COL1)}%c│ %c${pad(isError, COL2)}%c│ %c${pad(typeof isError, COL3)}%c│`, ...variableColor(isError));
    console.log(`│ %c${pad("isFirstOperation", COL1)}%c│ %c${pad(isFirstOperation, COL2)}%c│ %c${pad(typeof isFirstOperation, COL3)}%c│`, ...variableColor(isFirstOperation));
    console.log("└───────────────────┴───────────┴───────────┘");
}