States:
0. Calc Off
1. Composing Digit
2. Waiting Input
3. Composing next Operand
4. Show calculated result
5. Error without memory
6. M+ Post Memory Store
7. M+ Composing Digit
8. M+ Waiting input
9. M+ Post Memory Recall Op2
10. M+ Composing next operand
11. M+ Show calculated result
12. M+ Error
13. Show result with first operand saved

State 0 - Calc Off
Input          | Effect / Next State
-------------- | ----------------------------------------------------------
power          | Initializes calculator: state -> 1; currentValue -> "0"; operator -> ""; memoryValue -> 0; isMemoryAdded/isError clear          | Ignored (device off)   
back           | Ignored (device off)
digits/decimal | Ignored (device off)
operators      | Ignored (device off)
sign/sqrt/%/=  | Ignored (device off)
m+/mr          | Ignored (device off)
OTHER NOTES    | Only power button is active

State 1 - Composing Digit
Input          | Effect / Next State
-------------- | ----------------------------------------------------------
power          | powerOff(); state -> 0
clear          | clear(); state -> 1
back           | back(); trims digits or returns to "0"
digits 0-9     | Replace "0" or append (blocks when maxChars)
decimal        | Adds "." if missing; prefixes "0." when needed
operators      | operand1 = +currentValue; operator = input; state -> 2
sign           | Toggle "-" when value != "0"
sqrt           | If negative -> isError=true; state -> 5; currentValue="0"; else currentValue = trimDecimals(sqrt); state -> 4
%              | n/a
=              | n/a
m+             | memoryValue += +currentValue; isMemoryAdded=true; state -> 6
mr             | n/a

State 2 - Waiting Input
Input          | Effect / Next State
-------------- | ----------------------------------------------------------
power          | powerOff(); state -> 0
clear/back     | clear(); state -> 1
digits 0-9     | currentValue = digit; state -> 3
decimal        | currentValue = "0."; state -> 3
operators      | Updates operator
sign           | Toggle sign of currentValue; if changed, state -> 3
sqrt           | If negative -> isError=true; state -> 5; currentValue="0"; else currentValue = trimDecimals(sqrt); state -> 13
%              | n/a
=              | If divide by zero -> isError=true; state -> 5; else currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator)); overflow -> state 5 else state -> 4
m+             | memoryValue += +currentValue; isMemoryAdded=true; state -> 7
mr             | n/a

State 3 - Composing next Operand
Input          | Effect / Next State
-------------- | ----------------------------------------------------------
power          | powerOff(); state -> 0
clear          | clear(); state -> 1
back           | back()
digits 0-9     | Append (blocks at maxChars)
decimal        | Add "." if missing (prefix "0." if needed)
operators      | If operator "/" and currentValue == "0" -> isError=true; state -> 5; else currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator)); operand1 = +currentValue; operator = input; state -> 4
sign           | Toggle "-"
sqrt           | If negative -> isError=true; state -> 5; currentValue="0"; else currentValue = trimDecimals(sqrt); state -> 13
%              | If operator missing -> no-op; else currentValue = trimDecimals(calculatePercentage(operand1, +currentValue, operator))
=              | If divide by zero -> isError=true; state -> 5; else tmp = +currentValue; currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator)); operand1 = tmp; overflow -> state 5; else stay 4
m+             | isMemoryAdded=true; tmp = +currentValue; currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator)); memoryValue += +currentValue; operand1 = tmp; state -> 7
mr             | n/a

State 4 - Show calculated result
Input          | Effect / Next State
-------------- | ----------------------------------------------------------
power          | powerOff(); state -> 0
clear          | clear(); state -> 1
back           | n/a
digits 0-9     | If isFirstOperation -> state 1 with digit; else state 3 with digit
decimal        | state -> 1; currentValue = "0."; operator = ""
operators      | operand1 = +currentValue; operator = input; state -> 2
sign           | Toggle "-"
sqrt           | If negative -> isError=true; state -> 5; currentValue="0"; else currentValue = trimDecimals(sqrt); state -> 13
%              | n/a
=              | If operator "/" and operand1 == 0 -> isError=true; state -> 5; else currentValue = trimDecimals(calculateResult(+currentValue, operand1, operator)); overflow -> state 5; else stay 4
m+             | memoryValue += +currentValue; isMemoryAdded=true; state -> 11
mr             | n/a

State 5 - Error without memory
Input          | Effect / Next State
-------------- | ----------------------------------------------------------
power          | powerOff(); state -> 0
clear          | clear(); state -> 1
back           | clear(); state -> 1
others         | Ignored while in error
OTHER NOTES    | Display shows error indicator; must clear/power to resume

State 6 - M+ Post Memory Store
Input          | Effect / Next State
-------------- | ----------------------------------------------------------
power          | powerOff(); state -> 0
clear          | clear(); state -> 6
back           | n/a
digits 0-9     | currentValue = digit; state -> 7
decimal        | currentValue = "0."; state -> 7
operators      | operand1 = +currentValue; operator = input; state -> 8
sign           | Toggle "-"
sqrt           | If negative -> isError=true; state -> 12; currentValue="0"; else currentValue = trimDecimals(sqrt); state -> 11
%              | n/a
=              | n/a
m+             | memoryValue += +currentValue
mr             | currentValue = memoryValue.toString(); state -> 7

State 7 - M+ Composing Digit
Input          | Effect / Next State
-------------- | ----------------------------------------------------------
power          | powerOff(); state -> 0
clear          | clear(); state -> 7
back           | back()
digits 0-9     | Replace "0" or append (maxChars guard)
decimal        | Add "." if missing
operators      | operand1 = +currentValue; operator = input; state -> 8
sign           | Toggle "-"
sqrt           | If negative -> isError=true; state -> 12; currentValue="0"; else currentValue = trimDecimals(sqrt); state -> 11
%              | n/a
=              | If divide by zero -> isError=true; state -> 12; else tmp = +currentValue; currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator)); operand1 = tmp; overflow -> state 12; else state -> 11
m+             | memoryValue += +currentValue
mr             | currentValue = memoryValue.toString()

State 8 - M+ Waiting input
Input          | Effect / Next State
-------------- | ----------------------------------------------------------
power          | powerOff(); state -> 0
clear          | clear(); state -> 7
back           | n/a
digits 0-9     | currentValue = digit; state -> 10
decimal        | currentValue = "0."; state -> 10
operators      | Updates operator
sign           | Toggle "-" (if changed, state -> 10)
sqrt           | If negative -> isError=true; state -> 12; currentValue="0"; else currentValue = trimDecimals(sqrt); state -> 9
%              | n/a
=              | If divide by zero -> isError=true; state -> 12; else currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator)); overflow -> state 12; else state -> 11
m+             | isMemoryAdded=true; memoryValue += +currentValue; state -> 6
mr             | currentValue = memoryValue.toString(); state -> 9

State 9 - M+ Post Memory Recall Op2
Input          | Effect / Next State
-------------- | ----------------------------------------------------------
power          | powerOff(); state -> 0
clear          | clear(); state -> 7
back           | n/a
digits 0-9     | currentValue = digit; state -> 10
decimal        | currentValue = "0."; state -> 10
operators      | If operator "/" and currentValue == "0" -> isError=true; state -> 12; else currentValue = trimDecimals calculateResult(operand1, +currentValue, operator)); operator = input; operand1 = currentValue; state -> 11
sign           | Toggle "-"
sqrt           | If negative -> isError=true; state -> 12; currentValue="0"; else currentValue = trimDecimals(sqrt); state -> 9
%              | currentValue = trimDecimals(calculatePercentage(operand1, +currentValue, operator)); state -> 11
=              | If divide by zero -> isError=true; state -> 12; else tmp = +currentValue; currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator)); operand1 = tmp; overflow -> state 12; else state -> 11
m+             | memoryValue += +currentValue
mr             | currentValue = memoryValue.toString()

State 10 - M+ Composing next operand
Input          | Effect / Next State
-------------- | ----------------------------------------------------------
power          | powerOff(); state -> 0
clear          | clear(); state -> 7
back           | back()
digits 0-9     | Append (maxChars guard)
decimal        | Add "." if missing
operators      | If operator "/" and currentValue == "0" -> isError=true; state -> 12; else currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator)); operand1 = currentValue; operator = input; state -> 11
sign           | Toggle "-"
sqrt           | If negative -> isError=true; state -> 12; currentValue="0"; else currentValue = trimDecimals(sqrt); state -> 9
%              | currentValue = trimDecimals(calculatePercentage(operand1, +currentValue, operator)); state -> 11
=              | If divide by zero -> isError=true; state -> 12; else tmp = +currentValue; currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator)); operand1 = tmp; overflow -> state 12; else state -> 11
m+             | If operator "/" and currentValue == "0" -> isError=true; state -> 12; else isMemoryAdded=true; memoryValue += +currentValue; currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator)); operator = ""; state -> 9
mr             | currentValue = memoryValue.toString(); state -> 8

State 11 - M+ Show calculated result
Input          | Effect / Next State
-------------- | ----------------------------------------------------------
power          | powerOff(); state -> 0
clear          | clear(); state -> 7
back           | n/a
digits 0-9     | state -> 7; currentValue = digit; operator = ""
decimal        | state -> 7; currentValue = "0."
operators      | operand1 = +currentValue; operator = input; state -> 8
sign           | Toggle "-"
sqrt           | If negative -> isError=true; state -> 12; currentValue="0"; else currentValue = trimDecimals(sqrt); state -> 9
%              | n/a
=              | If operator "/" and operand1 == 0 -> isError=true; state -> 12; else currentValue = trimDecimals(calculateResult(+currentValue, operand1, operator)); overflow -> state 12; else stay 11
m+             | memoryValue += +currentValue
mr             | currentValue = memoryValue.toString(); state -> 9

State 12 - M+ Error
Input          | Effect / Next State
-------------- | ----------------------------------------------------------
power          | powerOff(); state -> 0
clear          | clear(); state -> 7
back           | clear(); state -> 6
others         | Ignored while in error
OTHER NOTES    | Memory indicator can remain on; clear resets display

State 13 - Show result with first operand saved
Input          | Effect / Next State
-------------- | ----------------------------------------------------------
power          | powerOff(); state -> 0
clear          | clear(); state -> 1
back           | n/a
digits 0-9     | currentValue = digit; state -> 3
decimal        | currentValue = "0."; state -> 3
operators      | If operator "/" and currentValue == "0" -> isError=true; state -> 5; else currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator)); operand1 = +currentValue; operator = input; state -> 4
sign           | Toggle "-"
sqrt           | If negative -> isError=true; state -> 5; currentValue="0"; else currentValue = trimDecimals(sqrt); state -> 13
%              | n/a
=              | If operator "/" and operand1 == 0 -> isError=true; state -> 5; else currentValue = trimDecimals(calculateResult(+currentValue, operand1, operator)); overflow -> state 5; else state -> 4
m+             | isMemoryAdded=true; memoryValue += +currentValue; state -> 11
mr             | n/a

OTHER NOTES:
- maxChars guard: getDigitAbsoluteLength blocks further digit entry; trimDecimals also enforces length; overflow in handlers routes to error states.
- Divide-by-zero checks differ slightly by state (string vs numeric comparison); intent is zero divisors trigger error.
- back() is only wired in states 1, 3, 7, 10 (error states treat back as clear).
- isFirstOperation is reset by clear/power; it gates whether a fresh digit after a result starts over (state 1) or chains (state 3).
