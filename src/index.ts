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

// Functions in TypeScript

// type FuncType = (n: number, m: number, l?: number) => number;

// const func: FuncType = (n, m, l) => {
//   if (typeof l === "undefined") return n * m;
//   return n * m * l;
// };

// func(25, 23);

// type FuncType = (n: number, m: number, l?: number) => number;

// // Default params.
// const func: FuncType = (n, m, l = 20) => {
//   return n * m * l;
// };
// func(25, 23);

// Rest params.
// type FuncType = (...n: number[]) => number[];

// const func: FuncType = (...n) => {
//   return n;
// };
// func(25, 23, 34, 56, 67);

// function lol(n: number): number {
//   return 45;
// }

// Function with objects

// interface Product {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
//   readonly id: number;
// }

// type GetDataType = (product: Product) => void;

// const getData: GetDataType = (product) => {
//   console.log(product);
// };

// const productOne: Product = {
//   name: "Macbook",
//   stock: 46,
//   price: 999,
//   photo: "sampleURL",
//   id: 1,
// };
// getData(productOne);

// Never Type
// const errorHandler = () => {
//   throw new Error();
// };


// --------------------------------------


// Classes