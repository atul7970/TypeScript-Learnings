// let a =25;

// a="sad" // Valid Typescript error as it not able to convert the data type like JavaScript .

// let a: string = "{23}";

// let dumbo = <string>"Abhi";

// let surname : string| number; //union type

// surname = 565;

// Type Ellisces
// type UserName = (n: number, m: number) => number;

// const func: UserName = (n, m) => {
//   console.log(n, m);
//   return n * m;
// };

//Array In TypeScript
// const arr = [12, 13, 14, 15];
// const arr1: number[] = [12, 24, 36];
// const arr2: string[] = ["sad"];

// const arr3: Array<string> = ["Sad", "Happy", "Anger"];

// arr3.forEach(i=>{
//     i.
// })

//Objects in TypeScript
// type Obj = {
//   // type or interface syntax diff '=' nai hoga.
//   height: number;
//   weight: number;
//   gender?: boolean; // ? bcz if we want not include gender sometime.
// };

// const obj = {
//   height: 3435,
//   weight: 345,
// };
// interface Obj1 {
//   height: number;
//   weight: number;
//   gender?: boolean;
// }
// interface NewObj1 extends Obj1 {
//   scolar: boolean;
//   func?: FuncType;
// }
// type FuncType = (n: number, m: number) => void;

// const help: NewObj1 = {
//   height: 343,
//   weight: 44,
//   scolar: true,
//   func: (n, m) => {
//     console.log(n, m);
//   },
// };
