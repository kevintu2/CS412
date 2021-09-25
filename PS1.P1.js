//Problem 1:
const reverse = input =>{
    let answer = "";
    var temp = [];
    for(let i = 0 ; i<input.length; i++){
        temp.push(input.substring(i,i+1));
    }
    temp.sort();
    temp.reverse();
    for(let i = 0 ; i<input.length; i++){
        answer = answer + temp[i];
    }
    return answer;

}
console.log(reverse("supercalifragilisticexpialidocious"))

