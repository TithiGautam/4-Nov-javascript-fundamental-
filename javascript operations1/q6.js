// let weight = 60;
// let height = 5;
// let BMI = calBMI(weight,height);
// console.log(BMI);

function calBMI(weight,height){
    let BMI = weight/(height*height);
    return BMI;

}
let weight = 125;
let height = 5;
let BMI = calBMI(weight,height);
console.log(BMI);