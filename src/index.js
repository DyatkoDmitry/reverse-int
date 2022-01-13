module.exports = function reverse (n) {

// Get string integer without minus    
let stringN = String(Math.abs(n)); 

let reverseN = '';

    for(let i = 0; i < stringN.length; i++){
        reverseN = stringN[i] + reverseN;
    }
    return reverseN;
}

