//counter 1
// function counter(num) {
//     let count = 0;
//     const actuallyCount = function(num){
//       count++;
//       return count;
//     }
//     return actuallyCount;
//     console.log(count);
//   }
  
//   count1 = counter();
//   count2 = counter();
//   count1();
//   count1();
//   count1();
//   console.log(count1());
//   console.log(count1());
//   console.log(count1());
//   count2();
//   count2();
//   count2();
//   console.log(count2());
//   console.log(count2());
//   console.log(count2());
//   console.log(count1());
//counter 2******
// function counter(count) {
//     let actuallyCount = function(){
//         count++;
//         return count;
//     }
//     return actuallyCount;
//     console.log(count(num));
// }
// count1 = counter(1);
// count1();
// console.log(count1());
// the above function allows the passthrough starting point
//counter 3*********
/* using the first function from before, it can return more than one function.
the returned item has increment and decrement properties where the values are
the functions. if more than one function is being returned, they have to be wrapped 
into an object. if you want to be able to pass through numbers, follow the same example for
counter2, but apply it to the decrement function as well.*/
function counter() {
    let currentValue = 0;
    let increment = function() {
        currentValue ++;
        console.log('currentValue = '+ currentValue);
    };
    let decrement = function() {
        currentValue --;
        console.log('currentValue = ' + currentValue);
    }
    return {increment: increment,
            decrement: decrement};
}
let count1 = counter();
count1.increment(); //1
count1.increment(); //2
count1.decrement(); //1
count1.increment(); //2
count1.increment(); //3
