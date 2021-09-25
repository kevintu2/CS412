const fun = (input, func) => func(input)

let input1 = "supercalifragilisticexpialidocious";

//expression 1
const exp1 = (input) =>{
    return input.split(/(?=c)/g);
}

console.log(fun(input1,exp1));

//expression 2
const exp2 = (input) =>{
    let count = 0;
    let newString = "";
    for(let i = 0 ; i < input.length; i++){
        if(input.charAt(i).localeCompare("a") == 0){
            count++;
            newString+= "A";
        }
        newString += input.charAt(i);
    }
    var ans = {
        orginalString: input,
        modifiedString: newString,
        numberReplaced: count,
        length: newString.length,
    }
    return ans;
}

console.log(fun(input1,exp2));