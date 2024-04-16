function isWork(){
    return 1;
}


function capitalize(input){
    let asArray = input.split('');
    asArray[0] = asArray[0].toUpperCase();
    return asArray.join('');
}

function reverse(input){
    let asArray = input.split('');
    let result = [];
    for(let i = asArray.length - 1; i >= 0; i--){
        result.push(asArray[i]);
    }

    return result.join('');
}

const calculator = {
    add : function(num1, num2){
        return num1 + num2;
    },
    subtract : function(num1, num2){
        return num1 - num2;
    },
    divide : function(num1,num2){
        return num1 / num2;
    },
    multiply : function(num1,num2){
        return num1 * num2;
    }
};



function caesarCipher(input, shiftNum){
    // for every character in the input
    // get the character of value (charCode + shiftNum)
    // UNLESS that exceeds either 122 or 90 (depending on if cap)
    // in which case it has value of (120+5 = 120 + 2, 97, 98, 99)
        // if we start at 20, upper limit is 25, and shift is 7
        // 25-20 = 5, shift - 5 = 2, lower limit + 2 = result
        // (upper limit - start position)
    // add new char from code to output
    // (anything that ISNT in either of those ranges stays how it is)

    // could pass a ...[] into string.fromCharCode()

    const result = [];

    for(let i = 0; i < input.length; i++){
        result.push(shiftCharCode(input.charCodeAt(i), shiftNum))
    }

    return String.fromCharCode(...result);


    // return 'd';
}


function findRange(charCode){
    const shiftRanges = [
        { lowerLimit : 65,
        upperLimit : 90 },

        { lowerLimit : 97,
        upperLimit: 122 },
    ];

    for(let range of shiftRanges){
        if(charCode >= range.lowerLimit && charCode <= range.upperLimit){
            return range;
        }
    }

    return null;
}



function shiftCharCode(charCode, shiftNum){
    const range = findRange(charCode);

    if(range){
        if(charCode + shiftNum > range.upperLimit){
            return range.lowerLimit - 1 + (shiftNum - (range.upperLimit - charCode));
        }
        else{
            return charCode + shiftNum;
        }
    }
    else{
        return charCode;
    }  


}




function analyzeArray(input){
    let min;
    let max;
    let total = 0;

    input.forEach( (num) => {
        total += num;

        if(min){
            if(num < min) min = num;
        }
        else{
            min = num;
        }
        if(max){
            if(num > max) max = num;
        }
        else{
            max = num;
        }
    })


    return {
        average : (total / input.length),
        min : min,
        max : max,
        length : input.length
    }
}




module.exports = { isWork, capitalize, reverse, calculator, caesarCipher, analyzeArray };