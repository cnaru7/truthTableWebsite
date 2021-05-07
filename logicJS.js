/**
 * Name: Richard, NAME, NAME
 */

/**
 * @param none
 * @returns none
 * solveEquation() will create a truth table with solutions of equation textbox input.
 * --WIP--
 */
function solveEquation(){
    var equation = document.getElementById('equation').value.replace(/([(!)])/g, ' $1 ').trim(); // adding spaces before every regex so that every alphabet character is unique.
    var formula = equation.replace(/\s+/g, ' ').trim().split(" "); // create array formula to parse and remove any excess whitespace.
    solve(formula);
    //document.getElementById('output').innerHTML = 
}

/**
 * 
 * @param formula is an array that contains equation.
 * @returns an arrary that contains reassigned readable operators.
 * --WIP--
 */
function convertOperator(formula){
    var compare = ["&", "^", "and", "v", "or", "|", "->", "implies", "<=>", "<->", "bijection", "not", "~"];
    var temp = [];
    var i = 0;

    for(i = 0 ; i < formula.length; i++){
        if(compare.includes(formula[i])){
             // if index in certian range convert to && (and), || (or), ! (negation), (!p || q) (implication), == (bijection) 
            if(0 <= compare.indexOf(formula[i])  && compare.indexOf(formula[i]) < 3){ // and
                temp.push("&&");
            }else if(compare.indexOf(formula[i]) < 5){ // or
                temp.push("||");
            }else if(compare.indexOf(formula[i]) < 8){ // implies --WIP-- 
                formula[i] = "||";
            }else if(compare.indexOf(formula[i]) < 11){ // bijection
                temp.push("==");
            }else if(compare.indexOf(formula[i]) <= 12){ // not
                temp.push("!");
            }else{ // add current element to temp
                temp.push(formula[i]);
            }
        }
    }
    return temp;
}

/**
 * 
 * @param formula is an array that contains eqaution.
 * @returns total possible outcomes of equation.
 * by: Richard
 */ 
function totalCount(formula){
    var temp = []; // temp to hold unique values
    var total = 0; // count exponent
    var i = 0;
    
    for(i = 0 ; i < formula.length; i++){
        if(formula[i].length === 1 && /[a-z]/i.test(formula[i]) && !temp.includes(formula[i]) ){ // tests regex, size, and make sure we are not counting same string again.
            temp.push(formula[i]); // adding string to array.
            total++; // increment count exponent
        }
    }
    
    // testing to see if output works [alert(2**total);]
    return (Math.pow(2, total));
}

/**
 * 
 * @param formula is an array that contains eqaution.
 * @returns array of unique non-operators.
 * by: Richard
 */ 
function unique(formula){
    var temp = []; // temp to hold unique values
    var i = 0;
    
    for(i = 0 ; i < formula.length; i++){
        if(formula[i].length === 1 && /[a-z]/i.test(formula[i]) && !temp.includes(formula[i]) ){ // tests regex, size, and make sure we are not counting same string again.
            temp.push(formula[i]); // adding string to array.
        }
    }

    return temp;
}
/**
 * 
 * @param number is abitrary integer that can be converted in binary 
 * @returns a 32 bit binary string of number.
 * by: Richard
 */
function zeroFill(number){
    var binaryValue = number.toString(2);
    var originalSize = binaryValue.length;
    var index = 0;
    
    for(index = 0; index < (32-originalSize); index++){
        binaryValue = "0"+ binaryValue;
    }

    return binaryValue;
}

function replaceElement(formula, swap, swapping){
    var index = 0;
    for(index = 0; index < formula.length; index++){
        if(formula[index] == swap){
            formula[index] = swapping;
        }
    }
    return formula;
}

/**
 * 
 * @param formula is an array that contains eqaution.
 * @returns an array contain truth value solution.
 */
function solve(formula){
    // use eval to solve conditional logic
    var temp = unique(formula);
    var i = 0;
    
    for(i = 0; i <= totalCount(formula); i++){
        var binaryValue = zeroFill(i);
        var j = 0;
        for(j = 0; j < temp.length; j++){
            formula = replaceElement(formula, temp[j], binaryValue.charAt(j)); // RICHARD FIGURE OUT HOW TO REPLACE EVERY "SPECIFIC" ELEMENT IN AN ARRAY.
        }
    }
    /** 
    a   |  b
    ---------
     0  | 0 (false and false 0)
     0  | 1 (false and true 1)
     1  | 0 (true and false 2)
     1  | 1 (true and true 3)

     (2^n)/2^(i) = 8/4 = 2
     (2^4)/2^(4) = 8/16 = 1/2
     -- pattern that fabs has notted!

     --WIP-- (could be used instead of recursive method).

     a      |  b   | c
    -------------------
     0      | 0    | 0  (false and false 0)
     0      | 0    | 1  (false and true 1)
     0      | 1    | 0  (true and false 2)
     0      | 1    | 1  (true and true 3)
     1      | 0    | 0
     1      | 0    | 1
     1      | 1    | 0
     1      | 1    | 1
     
    */
    return 0;
}

