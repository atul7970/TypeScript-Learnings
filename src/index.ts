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

// class Player {
//   public readonly id: String;
//   constructor(
//     private height: number,
//     public weight: number,
//     protected power?: number
//   ) {
//     this.id = String(Math.random() * 100);
//   }
//   get getMyHeight() {
//     // get function
//     return this.height;
//   }

//   set changeHeight(val: number) {
//     //set function : doesn't need the return type
//     this.height = val;
//   }
// }
// const abhi = new Player(100, 150, 23);
// abhi.getMyHeight;

// class Player2 extends Player {
//   special: boolean;
//   constructor(height: number, weight: number, power: number, special: boolean) {
//     super(height, weight, power);
//     this.special = special;
//   }
//   getMyPower = () => this.power;
// }

// console.log("Weight", abhi.weight);
// console.log("Height", abhi.getMyHeight());
// console.log("Power", abhi.getMyPower());

// interface ProductType {
//   name: string;
//   price: number;
//   stock: number;
//   getId: () => string;
//   offer?: boolean;
// }
// class Product implements ProductType {
//   //   public name: string;
//   //   public price: number;
//   //   public stock: number;
//   private id: string = String(Math.random() * 1000);

//   constructor(
//     public name: string,
//     public price: number,
//     public stock: number
//   ) {}
//   getId = () => this.id;
// }

// const p1 = new Product("Mackbook", 2000, 20);

// ------------------------------------------------
// DOM Manipulation
// Type Assertion
// const a = document.getElementById("btn")!;
// const a = document.getElementById("btn") as HTMLElement;
//

// const img = <HTMLImageElement>document.getElementById("g");

// const img = document.querySelector("img")!;
// img.src;

// const form = document.getElementById("form") as HTMLFormElement;
// const myinput = document.querySelector("form> input") as HTMLInputElement;
// form.onsubmit = (e: SubmitEvent) => {
//   e.preventDefault();

//   // To add something in the input value
//   const value = Number(myinput.value);

//   const h2 = document.createElement("h2");
//   const body = document.querySelector("body")!;

//   h2.textContent = String(value + 20);
//   body.append(h2);
// };

// Solution 1 : Index Signature
// interface Person {
//   [key: string]: string;
// }

// const myobj: Person = {
//   name: "Atul",
//   email: "atul2113062@akgec.ac.in",
// };

// const getName = (): string => {
//   return myobj["name"];
// };

// const getEmail = (): string => {
//   return myobj["email"];
// };

// const getData = (key: string): string => {
//   return myobj[key];
// };

// Solution 2: Keyof Operator
// interface Person {
//   //   [key: string]: string;
//   name: string;
//   email: string;
// }

// const myobj: Person = {
//   name: "Atul",
//   email: "atul2113062@akgec.ac.in",
// };

// const getName = (): string => {
//   return myobj["name"];
// };

// const getEmail = (): string => {
//   return myobj["email"];
// };

// const getData = (key: keyof Person): string => {
//   return myobj[key];
// };

// console.log(getData("name"));

// Solution 3:
// interface Person {
//   //   [key: string]: string;
//   name: string;
//   email: string;
// }

// const myobj: Person = {
//   name: "Atul",
//   email: "atul2113062@akgec.ac.in",
// };

// let key = "name";
// myobj[key as keyof Person]; //If interface Person is present.

// myobj[key as keyof typeof myobj]; //If interface Person is not known.

// Utility Type
// Partial<Type>
// Required<Type>
// Readonly<Keys,Type>
// Record<Keys,Type>
// Pick<Type,Keys>
// Omit<Type,Keys>
// Exclude<Type, ExcludedUnion>
// Extract<Type, Union>
// NonNullable<Type>
// Parameters<Type>
// ConstructorParameters<Type>
// ReturnType<Type>
// InstanceType<Type>

// Partial<Type>

// type User = {
//   name: string;
//   email: string;
// };
// type user2 = Partial<User>;

// Required<Type>
// type User = {
//   name: string;
//   email: string;
// };
// type User2 = Required<User>;

// ReadOnly<Keys,Type> - makes every property read-only
// type User = {
//   name: string;
//   email: string;
// };
// const user: Readonly<User> = {
//   name: "abc",
//   email: "abc@gmail.com",
// };

// Record<Keys,Type>
// interface UserInfo {
//   age: number;
// }
// type UserName = "john" | "levi" | "elon" | "jack";

// const users: Record<UserName, UserInfo> = {
//   john: { age: 34 },
//   levi: { age: 34 },
//   elon: { age: 34 },
//   jack: { age: 34 },
// };

// Pick<Type,Keys>
// interface OrderInfo {
//   readonly id: string;
//   user: string;
//   city: string;
//   state: string;
// }
// type ShippingInfo = Pick<OrderInfo, "city" | "state">;

// Omit<Type,Keys>

// interface ShippingInfo {
//   city: string;
//   state: string;
//   country: string;
// }

// type Random = Omit<ShippingInfo, "country">;

// Exclude<Type, ExcludedUnion>
// type MyUnion = string | number | boolean;
// type Random = Exclude<MyUnion, number>;

// Extract<Type, Union>
// type MyUnion = string | number | boolean;
// type Random = Extract<MyUnion, number>;

// NonNullable<Type>
// type MyUnion = string | number | boolean | null | undefined;
// type Random = NonNullable<MyUnion>;
