States:
0. Calc Off
1. Composing Digit
2. Waiting Input
3. Composing next Operand
4. Show calculated result
5. Error without memory
6. Composing Digit
7. M+ Waiting input
8. M+ Composing next operand
9. M+ Show calculated result
10. M+ Error

ToDo:
[-] On mobile screen calculator sides touch screen borders.
[v] On zen and mobile safari decimal dots hang lower than normal. On firefox they move upper. Try to rewrite this part based on how it looks on firefox.
[v] Add keyboard functionality.
[-] Check percentage in different states. 
[v] 15 * 8 M+ should add 120 to memory, now it adds 8. Pressing M+ second time does nothing. Should add 120 to memory resulting in 240 kept in memory, ready to recall.
[v] 15*8 M+ / 8 becomes 1208. Appending 8 instead of starting to compose second operand.
[-] Add favicon

State 0 - Calc Off
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | Initializes calculator: state -> 1, currentValue -> "0", operator cleared, memory reset
clear/back      | Ignored (device off)
digits 0-9      | Ignored (device off)
decimal         | Ignored (device off)
+, -, *, /      | Ignored (device off)
sign            | Ignored (device off)
sqrt            | Ignored (device off)
%               | Ignored (device off)
=               | Ignored (device off)
m+              | Ignored (device off)
mr              | Ignored (device off)
OTHER NOTES     | Only power button is active

State 1 - Composing Digit
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | Calls powerOff(); transitions to state 0
clear/back      | clear() resets to 0 and remains in state 1; back() removes last digit or returns to 0
digits 0-9      | Replaces 0 with digit or appends (until maxChars); stays in state 1
decimal         | Adds decimal point if missing; stays in state 1
+, -, *, /      | Stores currentValue as operand1, sets operator, moves to state 2
sign            | Toggles minus sign when value != 0
sqrt            | Uses sqrt helper; negative radicand -> state 5 (error), otherwise state 4 with result
%               | n/a
=               | n/a
m+              | n/a
mr              | n/a
OTHER NOTES     | Default input state right after power-on or digit entry

State 2 - Waiting Input
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | powerOff(); -> state 0
clear/back      | clear(); -> state 1
digits 0-9      | Starts composing second operand: operand1 saved, currentValue = digit, state -> 3
decimal         | n/a (ignored)
+, -, *, /      | Updates operator while staying in state 2
sign            | Toggles sign of currentValue; keeps operand1 synced with displayed value
sqrt            | Negative -> state 5 error; otherwise performs sqrt, result shown in state 4
%               | n/a
=               | Calculates operand1 (left) op currentValue (right); divide-by-zero or overflow -> state 5; success -> state 4
m+              | Adds currentValue to memoryValue, turns memory indicator on, transitions to state 7
mr              | n/a
OTHER NOTES     | User has entered first operand and operator, waiting for next number or command

State 3 - Composing Second Operand
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | powerOff(); -> state 0
clear/back      | clear(); -> state 1; back() removes last digit or returns to 0
digits 0-9      | Appends digit if under maxChars (second operand entry)
decimal         | Adds decimal point if missing
+, -, *, /      | calculats result and changes state to 2
sign            | Toggles sign of second operand when value != 0
sqrt            | Negative -> state 5 error; otherwise performs sqrt,stays in state 3
%               | Calculates percentage using operand1 and currentValue; stays in state 3 with result
=               | Computes operand1 op currentValue -> state 4; divide-by-zero/overflow -> state 5; stores prior second operand for repeat-equals behavior
m+              | Adds currentValue to memoryValue, turns memory indicator on, transitions to state 7
mr              | n/a
OTHER NOTES     | Active while composing second operand before pressing operator/equals/percent

State 4 - Show Calculated Result
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | powerOff(); -> state 0
clear/back      | clear(); -> state 1
digits 0-9      | Starts fresh entry with digit; state -> 1; operator cleared
decimal         | Starts fresh entry at 0.; state -> 3; 
+, -, *, /      | Treats current display as operand1, stores operator, goes to state 2
sign            | Toggles sign of currentValue (if not 0)
sqrt            | Uses sqrt helper; negative -> state 5 else stays in 4 with new result
%               | n/a
=               | Repeats last operation using operand1/operator; divide-by-zero or overflow -> state 5; success stays in state 4
m+              | Adds currentValue to memoryValue, turns memory indicator on, transitions to state 7
mr              | n/a
OTHER NOTES     | Displaying final result while allowing chaining or new entry

State 5 - Error (no memory)
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | powerOff(); -> state 0
clear/back      | clear(); -> state 1; resets error flags
digits 0-9      | Ignored until clear/power
decimal         | Ignored
+, -, *, /      | Ignored
sign            | Ignored
sqrt            | Ignored
%               | Ignored
=               | Ignored
m+              | Ignored
mr              | Ignored
OTHER NOTES     | Indicates error (E). Only clear or power recovers

State 6 - M+ Composing Digit
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | Calls powerOff(); transitions to state 0
clear/back      | clear() resets to 0 and remains in state 6; back() removes last digit or returns to 0
digits 0-9      | Replaces 0 with digit or appends (until maxChars); stays in state 1
decimal         | Adds decimal point if missing; stays in state 1
+, -, *, /      | Stores currentValue as operand1, sets operator, moves to state 8
sign            | Toggles minus sign when value != 0
sqrt            | Uses sqrt helper; negative radicand -> state 5 (error), otherwise state 4 with result
%               | n/a
=               | n/a
m+              | Adds currentValue to memoryValue, turns memory indicator on, transitions to state 8
mr              | n/a
OTHER NOTES     | 

State 7 - M+ Waiting for Operation
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | 
clear/back      | 
digits 0-9      | 
decimal         | 
+, -, *, /      | 
sign            | 
sqrt            | 
%               | 
=               | 
m+              | 
mr              | 
OTHER NOTES     | 

State 8 - M+ Waiting Input
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | 
clear/back      | 
digits 0-9      | 
decimal         | 
+, -, *, /      | 
sign            | 
sqrt            | 
%               | 
=               | 
m+              | 
mr              | 
OTHER NOTES     | 

State 9 - M+ Composing Second Operand
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | 
clear/back      | 
digits 0-9      | 
decimal         | 
+, -, *, /      | 
sign            | 
sqrt            | 
%               | 
=               | 
m+              | 
mr              | 
OTHER NOTES     | 

State 10 - M+ MR Composing Second Operand
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | 
clear/back      | 
digits 0-9      | 
decimal         | 
+, -, *, /      | 
sign            | 
sqrt            | 
%               | 
=               | 
m+              | 
mr              | 
OTHER NOTES     | 

State 11 - M+ Show Calculated Result
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | 
clear/back      | 
digits 0-9      | 
decimal         | 
+, -, *, /      | 
sign            | 
sqrt            | 
%               | 
=               | 
m+              | 
mr              | 
OTHER NOTES     | 

State 12 - M+ Error
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | 
clear/back      | 
digits 0-9      | 
decimal         | 
+, -, *, /      | 
sign            | 
sqrt            | 
%               | 
=               | 
m+              | 
mr              | 
OTHER NOTES     | 