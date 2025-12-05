States:
0. Calc Off
1. Composing Digit
2. Waiting Input
3. Composing Next Operand
4. Show calculated result (first time)
5. Error without memory
6. M+ Post Memory Store
7. M+ Composing Digit
8. M+ Waiting input
9. M+ Post Memory Recall Op2
10. M+ Composing next operand
11. M+ Show calculated result
12. M+ Error
13. Show result with first operand saved

General Notes:
- `powerOff()` moves the machine to state 0, clears all registers, resets `isMemoryAdded`, and empties `memoryValue`.
- `clear()` always resets to state 1 with `currentValue = "0"`, clears `operator`/`operand1`, resets `isError` and `isFirstOperation`, and clears the console.
- `back()` trims the rightmost digit of `currentValue`; when only one character remains it snaps back to `"0"`.
- `maxChars = 9` counts digits only (minus sign and decimal point do not count). Digit entry stops once the limit is hit, and any computed value whose absolute digit length exceeds the limit immediately switches to state 5 (non-memory) or state 12 (memory) with `isError = true`.
- `calculateResult(left, right, operator)` is used exactly as coded. Some states feed the displayed value as the left operand and the stored `operand1` as the right operand to support repeated `=` presses.
- `calculatePercentage(operand1, currentValue, operator)` always uses the stored operand as the base value.
- `trimDecimals` is applied to every computed value before it is written to the screen to keep the display width consistent.
- `sqrt`/`sqrtM` reject negative values: states 1‒5/13 send the flow to state 5, whereas states 6‒12 send it to state 12. Successful roots land in state 4, 9, 11, or 13 depending on the caller.
- `isFirstOperation` starts `true`, flips to `false` after the first commit in state 3, and is only reset by `clear()`/`powerOff()`. State 4 checks it to decide whether digit entry should start a fresh calculation (state 1) or continue composing the next operand (state 3).


State 0 - Calc Off
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | Initializes the calculator 
clear           | Ignored (device is off)
back            | Ignored (device is off)
digits 0-9      | Ignored (device is off)
decimal         | Ignored (device is off)
+ , -, *, /     | Ignored (device is off)
sign            | Ignored (device is off)
sqrt            | Ignored (device is off)
%               | Ignored (device is off)
=               | Ignored (device is off)
m+              | Ignored (device is off)
mr              | Ignored (device is off)
OTHER NOTES     | Only the power key is checked in this state

State 1 - Composing Digit
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | `powerOff()` -> state 0
clear           | `clear()` -> state 1 (`currentValue = "0"`, flags reset)
back            | `back()` trims the composed number; returns to `"0"` when empty
digits 0-9      | Replaces `"0"` or appends the digit (blocked when `maxChars` reached); stays in state 1
decimal         | Adds `"."` when absent (`"0."` when value equals `"0"`); stays in state 1
+ , -, *, /     | Stores `operand1 = +currentValue`, sets `operator`, moves to state 2
sign            | Toggles the leading minus unless the value is `"0"`
sqrt            | Negative -> `isError = true`, state 5, `currentValue = "0"`; otherwise `currentValue = trimDecimals(sqrt(currentValue))`, state 4
%               | Not handled (input ignored)
=               | If `operator === "/" && operand1 === 0` -> divide-by-zero error (state 5). sOtherwise `currentValue = trimDecimals(calculateResult(+currentValue, operand1, operator))`, state 4; overflow -> state 5
m+              | Sets `isMemoryAdded = true`, adds `+currentValue` to `memoryValue`, switches to state 6
mr              | Not handled (input ignored)
OTHER NOTES     | Acts as the default entry mode immediately after power-on or after `clear()`

State 2 - Waiting Input
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | `powerOff()` -> state 0
clear           | `clear()` -> state 1
back            | Not handled (input ignored)
digits 0-9      | Starts composing the right operand (`currentValue = digit`, state 3)
decimal         | Starts the right operand as `"0."` (state 3)
+ , -, *, /     | Updates `operator` while staying in state 2
sign            | If `currentValue !== "0"`, toggles sign and proceeds to state 3
sqrt            | Negative -> error (state 5, `currentValue = "0"`); otherwise `currentValue = trimDecimals(sqrt(currentValue))`, state 13 so the stored `operand1` can still be reused
%               | Not handled
=               | If dividing by zero (`operator === "/" && +currentValue === 0`) -> state 5. Otherwise `currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator))`, state 4; overflow -> state 5
m+              | Sets `isMemoryAdded = true`, adds `+currentValue` to `memoryValue`, moves to state 6
mr              | Not handled
OTHER NOTES     | Left operand is latched in `operand1`, awaiting the start of operand 2

State 3 - Composing Next Operand
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | `powerOff()` -> state 0
clear           | `clear()` -> state 1
back            | `back()` removes digits while staying in state 3
digits 0-9      | Appends digit unless `maxChars` reached
decimal         | Adds `"."` when missing; prepends `"0."` if value is `"0"`
+ , -, *, /     | Division by zero (`operator === "/" && currentValue === "0"`) -> state 5. Otherwise `isFirstOperation = false`, `currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator))`, `operand1 = +currentValue`, `operator = input`, state 4
sign            | Toggles minus (ignored for `"0"`)
sqrt            | Negative -> state 5; otherwise `currentValue = trimDecimals(sqrt(currentValue))`, state 13
%               | When an operator is set, replaces `currentValue` with `trimDecimals(calculatePercentage(operand1, +currentValue, operator))`; state remains 3
=               | Divide-by-zero (`operator === "/" && +currentValue === 0`) -> state 5. Otherwise `let tmp = +currentValue; currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator)); operand1 = tmp; state = 4; overflow -> state 5`
m+              | Sets `isMemoryAdded = true`; computes the intermediate result, adds it to `memoryValue`, swaps `operand1` with the typed number, then jumps to state 7
mr              | Not handled
OTHER NOTES     | Stores the currently typed value in `operand1` whenever `=` is pressed to enable repeated operations

State 4 - Show calculated result (first time)
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | `powerOff()` -> state 0
clear           | `clear()` -> state 1
back            | Not handled
digits 0-9      | If `isFirstOperation` is still `true`, treat the digit as a fresh entry (`state = 1`, `currentValue = digit`). Otherwise start composing the next operand (`state = 3`, `currentValue = digit`)
decimal         | Starts a fresh entry (`state = 1`, `currentValue = "0."`, `operator = ""`)
+ , -, *, /     | Sets `operand1 = +currentValue`, `operator = input`, transitions to state 2
sign            | Toggles minus (ignored for `"0"`)
sqrt            | Negative -> state 5; otherwise `currentValue = trimDecimals(sqrt(currentValue))`, moves to state 13
%               | Not handled
=               | If `operator === "/" && operand1 === 0` -> state 5. Otherwise `currentValue = trimDecimals(calculateResult(+currentValue, operand1, operator))`, remains in state 4; overflow -> state 5
m+              | Sets `isMemoryAdded = true`, adds the shown result to `memoryValue`, enters state 11
mr              | Not handled
OTHER NOTES     | Serves as the “just computed” state for non-memory workflows

State 5 - Error without memory
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | `powerOff()` -> state 0
clear           | `clear()` -> state 1 (error cleared)
back            | Calls `clear()` as well -> state 1
digits 0-9      | Ignored until the error is cleared
decimal         | Ignored
+ , -, *, /     | Ignored
sign            | Ignored
sqrt            | Ignored
%               | Ignored
=               | Ignored
m+              | Ignored
mr              | Ignored
OTHER NOTES     | Only `clear()` or `power` can recover from this state

State 6 - M+ Post Memory Store
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | `powerOff()` -> state 0
clear           | `clear()` resets values, then code forces `state = 6` to keep the post-store context
back            | Not handled
digits 0-9      | Starts composing a new number (`currentValue = digit`, state 7)
decimal         | Initializes `"0."` and moves to state 7
+ , -, *, /     | Stores `operand1 = +currentValue`, sets `operator`, moves to state 8
sign            | Toggles minus (ignored for `"0"`)
sqrt            | Negative -> state 12 error; positive value -> `currentValue = trimDecimals(sqrt(currentValue))`, state 11
%               | Not handled
=               | Not handled
m+              | Adds `+currentValue` to `memoryValue` (indicator already on), state unchanged
mr              | Recalls memory to `currentValue` and switches to state 7
OTHER NOTES     | Entry point right after any `m+` coming from non-memory states (1, 2, 4, 13)

State 7 - M+ Composing Digit
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | `powerOff()` -> state 0
clear           | `clear()` followed by `state = 7` (display reset, memory context preserved)
back            | `back()` removes digits (returns to `"0"` when empty)
digits 0-9      | Replaces `"0"` or appends (limited by `maxChars`)
decimal         | Adds `"."` when missing (`"0."` if value equals `"0"`)
+ , -, *, /     | Stores `operand1 = +currentValue`, sets `operator`, moves to state 8
sign            | Toggles minus (ignored for `"0"`)
sqrt            | Negative -> state 12 error; otherwise `currentValue = trimDecimals(sqrt(currentValue))`, transitions to state 11
%               | Not handled
=               | Divide-by-zero (`operator === "/" && +currentValue === 0`) -> state 12. Otherwise `let tmp = +currentValue; currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator)); if overflow -> state 12 else operand1 = tmp, state = 11`
m+              | Adds `+currentValue` to `memoryValue` (state unchanged)
mr              | Sets `currentValue = memoryValue.toString()` while staying in state 7
OTHER NOTES     | Mirrors state 1 but assumes `memoryValue` already contains something

State 8 - M+ Waiting input
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | `powerOff()` -> state 0
clear           | `clear()` then `state = 7`
back            | Not handled
digits 0-9      | Starts composing operand 2 (`currentValue = digit`, state 10)
decimal         | Starts operand 2 as `"0."` (state 10)
+ , -, *, /     | Updates `operator` while staying in state 8
sign            | Toggles minus (when changed, state -> 10)
sqrt            | Negative -> state 12; positive -> `currentValue = trimDecimals(sqrt(currentValue))`, state 9
%               | Not handled
=               | Divide-by-zero (`operator === "/" && +currentValue === 0`) -> state 12. Otherwise `currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator))`; overflow -> state 12; success -> state 11
m+              | Sets `isMemoryAdded = true`, adds `+currentValue` to `memoryValue`, goes back to state 6
mr              | Loads memory into `currentValue` and moves to state 9
OTHER NOTES     | Memory-enabled equivalent of state 2

State 9 - M+ Post Memory Recall Op2
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | `powerOff()` -> state 0
clear           | `clear()` then `state = 7`
back            | Not handled
digits 0-9      | Clears the recalled value and starts composing (`currentValue = digit`, state 10)
decimal         | Converts the recalled value into `"0."` and jumps to state 10
+ , -, *, /     | Division by zero (`operator === "/" && currentValue === "0"`) -> state 12. Otherwise `currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator))`, `operand1 = currentValue`, `operator = input`, state 11
sign            | Toggles minus (ignored for `"0"`)
sqrt            | Negative -> state 12; positive -> recomputes square root and stays in state 9
%               | Replaces `currentValue` with `trimDecimals(calculatePercentage(operand1, +currentValue, operator))`, proceeds to state 11
=               | Divide-by-zero check, then `let tmp = +currentValue; currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator)); operand1 = tmp; overflow -> state 12; otherwise state = 11`
m+              | Adds `+currentValue` to `memoryValue`
mr              | Refreshes `currentValue` from `memoryValue` (state unchanged)
OTHER NOTES     | Used when operand 2 was recalled via `mr` in a memory workflow

State 10 - M+ Composing next operand
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | `powerOff()` -> state 0
clear           | `clear()` then `state = 7`
back            | `back()` removes digits
digits 0-9      | Appends digits until `maxChars` is reached
decimal         | Adds `"."` when missing (`"0."` if the number is `"0"`)
+ , -, *, /     | Division by zero (`operator === "/" && currentValue === "0"`) -> state 12. Otherwise `currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator))`, `operator = input`, `operand1 = currentValue`, state 11
sign            | Toggles minus when possible
sqrt            | Negative -> state 12; otherwise `currentValue = trimDecimals(sqrt(currentValue))`, state 9
%               | `currentValue = trimDecimals(calculatePercentage(operand1, +currentValue, operator))`, state 11
=               | Divide-by-zero -> state 12. Otherwise `let tmp = +currentValue; currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator)); operand1 = tmp; overflow -> state 12; else state 11`
m+              | If dividing by zero, state 12. Otherwise sets `isMemoryAdded = true`, adds `+currentValue` to `memoryValue`, replaces `currentValue` with the intermediate result, clears `operator`, and moves to state 9
mr              | Loads memory into `currentValue` and returns to state 8
OTHER NOTES     | Mirrors state 3 but in the memory-enabled branch

State 11 - M+ Show calculated result
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | `powerOff()` -> state 0
clear           | `clear()` then `state = 7`
back            | Not handled
digits 0-9      | Starts a new memory-aware entry (`currentValue = digit`, `operator = ""`, state 7)
decimal         | Starts a new entry as `"0."` (state 7)
+ , -, *, /     | Sets `operand1 = +currentValue`, `operator = input`, and returns to state 8
sign            | Toggles minus (ignored for `"0"`)
sqrt            | Negative -> state 12; positive -> `currentValue = trimDecimals(sqrt(currentValue))`, state 9
%               | Not handled
=               | Division by zero (`operator === "/" && operand1 === 0`) -> state 12. Otherwise `currentValue = trimDecimals(calculateResult(+currentValue, operand1, operator))`; overflow -> state 12; stays in state 11 for repeated equals
m+              | Adds the shown result to `memoryValue` (state unchanged)
mr              | Recalls `memoryValue` to `currentValue` and transitions to state 9
OTHER NOTES     | Memory-enabled counterpart to state 4

State 12 - M+ Error
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | `powerOff()` -> state 0
clear           | `clear()` then `state = 7`
back            | `clear()` followed by `state = 6`
digits 0-9      | Ignored until the error is cleared
decimal         | Ignored
+ , -, *, /     | Ignored
sign            | Ignored
sqrt            | Ignored
%               | Ignored
=               | Ignored
m+              | Ignored
mr              | Ignored
OTHER NOTES     | Only `clear()` (with or without `back`) or `power` can recover from a memory error

State 13 - Show result with first operand saved
Input           | Effect / Next State
--------------- | ----------------------------------------------------------
power           | `powerOff()` -> state 0
clear           | `clear()` -> state 1
back            | Not handled
digits 0-9      | Starts composing a new operand (`currentValue = digit`, state 3)
decimal         | Sets `currentValue = "0."`, state 3
+ , -, *, /     | If dividing by zero (`operator === "/" && currentValue === "0"`) -> state 5. Otherwise `currentValue = trimDecimals(calculateResult(operand1, +currentValue, operator))`, `operand1 = +currentValue`, `operator = input`, state 4
sign            | Toggles minus (ignored for `"0"`)
sqrt            | Negative -> state 5; positive -> `currentValue = trimDecimals(sqrt(currentValue))`, stays in state 13
%               | Not handled
=               | If `operator === "/" && operand1 === 0` -> state 5. Otherwise `currentValue = trimDecimals(calculateResult(+currentValue, operand1, operator))`, state 4; overflow -> state 5
m+              | Sets `isMemoryAdded = true`, adds `+currentValue` to `memoryValue`, enters state 11
mr              | Not handled
OTHER NOTES     | Entered when a square root is taken while preserving `operand1` for future operations
