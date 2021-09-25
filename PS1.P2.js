const evaluate = input =>{
    var a = Number(input.charAt(0));
    var b = Number(input.charAt(2));

    if(input.charAt(1).localeCompare("+") == 0){
        return add(a,b);
    }
    else if(input.charAt(1).localeCompare("-") == 0){
        return minus(a,b);
    }
    else if(input.charAt(1).localeCompare("*") == 0){
        return multi(a,b);
    }
    else if(input.charAt(1).localeCompare("/") == 0){
        return div(a,b);
    }
    else if(input.charAt(1).localeCompare("^") == 0){
        return pow(a,b);
    }
    else if(input.charAt(1).localeCompare("%") == 0) {
        return mod(a, b);
    }
    else{
        return "No valid Expression";
    }

}
const add = (a,b) =>{
    return a + b;
}
const minus = (a,b) =>{
    return a - b;
}
const multi = (a,b) =>{
    return a * b;
}
const div = (a,b) =>{
    return a/b;
}
const pow = (a,b) => {
    return Math.pow(a, b);
}

const mod = (a,b) => {
    return a % b;
}

const expression = '8%3';
let operator = evaluate(expression);
console.log(operator);