"use strict";

let start = 50;

const txtToArray = async (txt) => {
    try{
        const response = await fetch(txt);
        const fileContent = await response.text();
        const textArray = fileContent.split('\n')
            .map(line => line.trim())
            .filter(line => line.length > 0)
        return textArray;
    }catch(err){
        console.error(err);
    }
}

const findCode = async (rotations, start) => {
    let max = 100;
    let min = 0;
    let range = max - min;
    let code = 0;
    let totalRevolutions = 0;
    let currentNumber = start

    for(let i = 0; i < rotations.length; i++){
        let direction = 0;
        let previousNumber;
        let revolutions = 0;

        if(i > 0){
            previousNumber = currentNumber;
        }else{
            previousNumber = start;
        }

        if(rotations[i].startsWith("R")){
            direction = 1;
        }else if(rotations[i].startsWith("L")){
            direction = -1;
        }

        let rotation = direction * parseInt(rotations[i].substring(1));
        currentNumber += rotation;

        if(currentNumber > max){
            revolutions = Math.floor(currentNumber / range);
            if(currentNumber % range == 0){
                revolutions--;
            }
            totalRevolutions += revolutions;
        }else if(currentNumber < min){
            revolutions = Math.ceil(Math.abs(currentNumber) / range);
            if(previousNumber % range == 0){
                revolutions--;
            }
            totalRevolutions += revolutions;
        }

        currentNumber = ((currentNumber % range) + range) % range;

        if (currentNumber === 0) {
            code++;
        }
    }

    return {
        code1: code,
        revolutions: totalRevolutions,
        code2: code + totalRevolutions,
        output: currentNumber
    };
}

export { findCode, txtToArray };