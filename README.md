# React Calculator

Algorithm

    Enter first operand
    1 or more of the digit buttons
    Append each digit to the first operand
    First operand entry ends when an operator is pressed
    Append each digit to display as clicked
    Enter operator
    stores state in both first operand and operator
    Enables entry of second operator
    Clears display
    Enter second operand
    1 or more of the digit buttons
    Append each digit to the second operand
    second operand entry ends when an equal button is pressed
    Append each digit to display as clicked
    Enter equal button
    stores state second operand
    Calculates result
    Puts result on display
    AC button
    At any point of process clears all states

No idea how to handle decimal point yet.

Algorithm

initial state display is set to 0
//state of 1+2 operand and operator?

-user clicks digit
-store that digit as the first operand
-update the display to show that digit
(do over above as it keeps going)
-user clicks operator (+-\*/)
-store the operator
//-do nothing with the first operand, leave it alone//
//-do nothing with the display, leave it alone//
-user clicks digit
-store that digit as second operand
-update display to show the result
-user clicks operator
-calculate the result (first+second Operand), store it as first operand

-when user clicks =
-calculate result
-update display to show the result

-user clicks AC(clear)
-clear the first operand
-clear the second operand
-clear the operator
-set display as 0
