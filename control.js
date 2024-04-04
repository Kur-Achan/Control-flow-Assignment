//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values
function transformArray2(arr){
    const firstFour = arr.slice(0,4).map(item => item * item);
    const lastTwo = arr.slice(-2).map(item => item +10);
    const newArr = firstFour
    return arr;
}







//Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
//Write a function that accepts an array of strings and console.logs each element using a for loop.
let Nums = [1,2,3,4,5,6,7,8,9];
let i = 0;
while  (i< Nums.length){
    
    if (i==4){
        break;
    }
    console.log(Nums [i]);
    i++;
}




//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']

function fruits(arr){
    for (let i = 0; i< arr.length;
        i++){
            if (i===2){

            }
        }
}
console.log(arr[i]);

fruits(['apple','plum'],'banana','strawberries','kiwi')

//Write a function that accepts an array of strings and console.logs each element using a for loop.
function arrayOfStrings(arr){
    for (let i = 0; i< arr.length;
        i++){

        console.log(arr[i]);
}
}




//Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 
function reverseStrings(str){
    let reverseStrings = '';
    let  i =str.length -1;
    while(i>= 0){
        reverseStrings +=str[i];
        i--;
    }
    return reverseStrings;
}
console.log(reverseStrings("Welcome to AkiraChhix"));