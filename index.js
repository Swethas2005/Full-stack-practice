//

// const phone = {
//     brand: "samsung",
//     model: 2019,
//     price : 10000,
//     isAvailable: true
// }

// phone.color = "blue";
// phone.price = 5000;
// delete phone.isAvailable
// console.log(phone);

// const student = {
//     name:"junnu",
//     age:26,
//     address:{
//         city:"Dubai",
//         pinCode: 56879,
//     },
//     marks: [1,2,3],
// }

// console.log(student["name"]);
// console.log(student.address["city"]);
// console.log(student.address["pinCode"]);
// console.log(student.marks[1]);
// console.log(Object.keys(student));

// const company = {
//     name:"Skanda",
//     founded: "Swetha",
//     ceo:{
//         firstName:"Swetha ",
//         lastName:"S",
//         age:20,
//     },
//     employees:["mark","loosy","junnuh"],
//     isPublic:true,
// }

// console.log(company.ceo.firstName + " " + company.ceo.lastName);
// console.log(company.employees[2]);
// company.country="new York";
// company.ceo.age=40;
// delete company.isPublic;
// console.log(Object.entries(company));

// const bankAccount={
//     accountHolder : "Jun",
//     balance: 100000,
//     isActive:true,
//     transaction:[1,-2,3,-4]
// }

// console.log("balance" in bankAccount)
// console.log(bankAccount.hasOwnProperty("isActive"))
// console.log(bankAccount.transaction[bankAccount.transaction.length - 1]);
// bankAccount.branch="kvb";
// console.log(bankAccount.transaction.length)
// console.log(Object.keys(bankAccount));
// console.log(Object.values(bankAccount))

// const school = {
//   name: "SBMJC",
//   location: {
//     city: "KGF",
//     state: "koalr",
//     country: "India",
//   },
//   students: [
//     {
//       name: "john",
//       grade: "B",
//     },
//     {
//       name: "jo",
//       grade: "c",
//     },

//     {
//       name: "jhn",
//       grade: "B",
//     },
//   ],
//   totalStudents: 100,
// };

// console.log(school.location.city);
// console.log(school.students[0].name);
// console.log(school.students[1].grade);
// school.totalStudents=200;
// school.isPrivate = true;
// console.log(Object.entries(school))

// const ecommerce = {
//      storeName : "Swetha",
//      owner:{
//         name:"ko",
//         email:"ko@gmail.com",
//         phone:98765789079679
//      },
//      products:[
//         {
//             productName:"jacky",
//             price:200,
//             inStock:true
//         },
//         {
//             productName:"colgate",
//             price:400,
//             inStock:false
//         },
//         {
//             productName:"jam",
//             price:900,
//             inStock:true
//         }
//      ],
//      totalRevenue:50000
// }

// console.log(ecommerce.owner.email);
// console.log(ecommerce.products[1].productName);
// console.log(ecommerce.products[2].price);
// console.log("totalRevenue" in ecommerce);
// ecommerce.products[0].inStock=false;
// ecommerce.products[1].discount = "20%";
// console.log(ecommerce.products.length);
// console.log(Object.keys(ecommerce));

// const hospital = {
//   hospitalName: "mmm",
//   location: {
//     city: "kolar",
//     state: "kerala",
//   },
//   doctors: [
//     {
//       name: "j",
//       speciality: "heart",
//       experiance: 5,
//     },
//     {
//       name: "k",
//       speciality: "kidney",
//       experiance: 9,
//     },
//     {
//       name: "l",
//       speciality: "ldfid",
//       experiance: 6,
//     },
//   ],
//   totalBeds:10,
// };

// console.log(hospital.doctors[1].speciality);
// console.log(hospital.doctors[1].experiance);
// console.log(hospital.hasOwnProperty("totalBeds"));
// hospital.rating=5;
// hospital.doctors[0].available=true;
// console.log(hospital.doctors.length);
// console.log(Object.entries(hospital.doctors[0]));
// delete hospital.location;

// const user = {
//   userName: "swetha",
//   email: "swe@gmail.com",
//   address: {
//     city: "mumbai",
//     country: "india",
//   },
//   cart: [
//     {
//       item: "cake",
//       price: 500,
//     },
//     {
//       item: "sandwitch",
//       price: 600,
//     },
//     {
//       item: "bun",
//       price: 800,
//     },
//   ],
// };

// console.log(user.cart.length);
// console.log(user.cart[1].price);
// console.log(user.cart[1].item);
// console.log(user.cart[0].price + user.cart[1].price + user.cart[2].price);
// user.cart[0].discount = "20%";
// user.cart[1].discount = "20%";
// user.cart[2].discount = "20%";
// console.log("email" in user);
// console.log(Object.values(user));

// for(let i = 1;i<=10;i++){
//   console.log(i);
// }

// for(let i=1;i<=20;i++){
//   if(i%2===0){
//     console.log(i)
//   }
// }

// const fruits = ["Apple", "Bananna", "mango", "grapes", "orange"];
// for(const fruit of fruits){
//   console.log(fruit)
// }

// const person = {
//   name: "Junnu",
//   age: 20,
//   city: "Bangalore",
//   isStudent: true,
// };

// for(const key in person){
//   console.log(key,person)
// }

// let i = 1;
// while(i<=10){
//   if(i%7===0){

//     break
//   }
//   console.log(i);
//   i++;
// }

// const words = ["cat", "elephant", "dog", "butterfly", "ant", "hippopotamus"];

// for(let i =0;i<words.length;i++){
//   if(words[i].length>5){
//     console.log(words[i])
//   }
// }

// for(let i=1;i<=5;i++){
//   row = "";
//   for(let j=1;j<=i;j++){
//     row+= j+ " ";

//   }
//   console.log(row)
// }

// const peoples=[{
//   name : "junnu",
//   age:20,
// },
// {
//     name: "joo",
//     age :30,
//   }
// ]

// for(const people of peoples){
//   console.log(people.name,people.age)
// }

// for(let i = 1; i <= 20; i++) {
//   if(i%3===0&& i%5===0) {
//     console.log("FizzBuzz")  // check this FIRST — divisible by both!
//   } else if(i%3===0) {
//     console.log("Fizz")
//   } else if(i%5===0) {
//     console.log("Buzz")
//   } else {
//     console.log(i)
//   }
// }

// const students = [
//   {
//     name: "arjun",
//     marks: 10,
//   },
//   {
//     name: "kushi",
//     marks: 30,
//   },
//   {
//     name: "hfvcknl",
//     marks: 40,
//   },
// ];

// for (const student of students) {
//   if (student.marks >= 50) {
//     console.log(student.name, student.marks);
//   }
// }

// const numbers = [1, 2, 3, 4, 5];

// let  result = numbers.map(num=>num*2);
// console.log(result);

// const numbers = [5, 12, 3, 18, 7, 25, 9, 15];

// const result = numbers.filter(num=>num>10)
// console.log(result)

// const prices = [100, 200, 350, 50, 400];

// const result = prices.reduce((sum,prices)=>(sum+prices),0);
// console.log(result);

// const students = [
//   { name: "Arjun", marks: 65 },
//   { name: "Priya", marks: 85 },
//   { name: "Rahul", marks: 91 },
//   { name: "Junnu", marks: 72 },
// ];

// const result = students.find(students=> students.marks>80);
// console.log(result)

// const products = [
//   { name: "Phone", price: 20000 },
//   { name: "Laptop", price: 50000 },
//   { name: "Headphones", price: 2000 },
// ];

//  products.forEach((product) => console.log(`${product.name} ${product.price}`));

// const students = [
//   { name: "Arjun", age: 20 },
//   { name: "Priya", age: 22 },
//   { name: "Rahul", age: 25 },
//   { name: "Junnu", age: 19 },
// ];

// let result = students.map(students=>students.name);
// console.log(result)

// const products = [
//   { name: "Phone", price: 20000, inStock: true },
//   { name: "Laptop", price: 50000, inStock: false },
//   { name: "Headphones", price: 2000, inStock: true },
//   { name: "Charger", price: 500, inStock: true },
//   { name: "Tablet", price: 30000, inStock: false },
// ];

// const result= products
//    .filter((products) => products.inStock)
//    .map((products) => products.name);

//    console.log(result)

// const products = [
//   { name: "Phone", price: 20000, inStock: true },
//   { name: "Laptop", price: 50000, inStock: false },
//   { name: "Headphones", price: 2000, inStock: true },
//   { name: "Charger", price: 500, inStock: true },
//   { name: "Tablet", price: 30000, inStock: false },
// ];

// let result = products.filter((products=>(products.inStock))).reduce((sum,products)=>(sum+products.price),0)
// console.log(result)

// const students = [
//   { name: "Arjun", marks: 85, passed: true },
//   { name: "Priya", marks: 42, passed: false },
//   { name: "Rahul", marks: 91, passed: true },
//   { name: "Junnu", marks: 38, passed: false },
//   { name: "Kavya", marks: 67, passed: true },
// ];

// const allPassed = students.every(student => student.passed);
// console.log(allPassed)

// const someAbove90 = students.some(student => student.marks > 90);
// console.log(someAbove90)

// const allAbove50 = students.every(student => student.marks > 50);
// console.log(allAbove50)

// const firstFailed = students.find(student => student.passed === false);
// console.log(firstFailed)

// const orders = [
//   { id: 1, product: "Phone", price: 20000, status: "delivered" },
//   { id: 2, product: "Laptop", price: 50000, status: "pending" },
//   { id: 3, product: "Headphones", price: 2000, status: "delivered" },
//   { id: 4, product: "Charger", price: 500, status: "cancelled" },
//   { id: 5, product: "Tablet", price: 30000, status: "delivered" },
// ];

// const allDeliverd = orders.filter(orders=>orders.status==="delivered");
// console.log(allDeliverd);

// const names = orders.map(orders=>orders.product);
// console.log(names);

// const deliveredOrders = orders.filter(orders=>orders.status==="delivered").reduce((sum,orders)=>(sum+orders.price),0);
// console.log(deliveredOrders);

// const cancel = orders.some(orders=>orders.status==="cancelled");
// console.log(cancel);

// const delivered = orders.every(orders=>orders.status==="delivered");
// console.log(delivered);

// const pending = orders.find((orders) => orders.status === "pending");
// console.log(pending)

// const calculator={
//   // a:20,
//   // b:15,

//   add:function(a,b){
//     console.log(a+b)
//   },

//   sub:function(a,b){
//    console.log(a-b)
//   },

//   multiply:function(a,b){
//    console.log(a*b)
//   },

//   divide:function(a,b){
//    console.log(a/b)
//   }
// }

// calculator.add(20,10);
// calculator.sub(20,10);
// calculator.multiply(20,10);
// calculator.divide(20,10);

// const person={
//   name:"junnu",
//   age:30,
//   city:"bangalore",
//   introduce:function(){
//     console.log("Hi," + "Iam" + " "+ this.name + " " +  this.age+ " " +  "years old from" + " " +  this.city )
//   }
// }

// person.introduce();

// const student = {
//   name: "jujj",
//   marks: [90, 65, 80, 45, 39],

//   getAverage() {
//     const sum = this.marks.reduce((total, mark) => total + mark, 0);
//     return sum / this.marks.length;
//   },

//   getHighest() {
//     return Math.max(...this.marks);
//   },

//   getLowest() {
//     return Math.min(...this.marks);
//   },

//   getGrade() {
//     const avg = this.getAverage(); // call own method!
//     if (avg >= 90) return "A";
//     else if (avg >= 80) return "B";
//     else if (avg >= 70) return "C";
//     else return "F";
//   },
// };

// console.log(student.getAverage());
// console.log(student.getHighest());
// console.log(student.getLowest());
// console.log(student.getGrade());

// const cart = {
//   items: [],  // store all items here

//   // Add one item
//   addItem(name, price) {
//     this.items.push({ name, price });
//   },

//   // Remove item by name
//   removeItem(name) {
//     this.items = this.items.filter(item => item.name !== name);
//   },

//   // Get total price
//   getTotal() {
//     return this.items.reduce((sum, item) => sum + item.price, 0);
//   },

//   // Get total number of items
//   getItemCount() {
//     return this.items.length;
//   }
// };

// // -------------------- USAGE --------------------

// // Add items
// cart.addItem("Phone", 20000);
// cart.addItem("Laptop", 50000);
// cart.addItem("Charger", 500);

// // Show all items
// console.log("Items:", cart.items);

// // Total before removing
// console.log("Total:", cart.getTotal());
// // 70500

// // Remove one item
// cart.removeItem("Laptop");

// // Show items after removal
// console.log("Items after removal:", cart.items);

// // Total after removing
// console.log("Total after removal:", cart.getTotal());
// // 20500

// // Item count
// console.log("Item count:", cart.getItemCount());
// // 2

// const todoList = {
//   todos: [],

//   // addTodo — push one object:
//   addTodo(task) {
//     this.todos.push({ task, completed: false });
//   },

//   // completeTodo — find task and mark completed:
//   completeTodo(task) {
//     const todo = this.todos.find((t) => t.task === task);
//     if (todo) todo.completed = true;
//   },

//   // getPending — filter incomplete:
//   getPending() {
//     return this.todos.filter((t) => t.completed === false);
//   },

//   // getCompleted — filter complete:
//   getCompleted() {
//     return this.todos.filter((t) => t.completed === true);
//   },
// };

// // -------------------- USAGE --------------------

// // Calling methods:
// todoList.addTodo("walking");
// todoList.addTodo("eating");
// todoList.addTodo("cooking");

// todoList.completeTodo("walking");

// console.log("Pending:", todoList.getPending());
// console.log("Completed:", todoList.getCompleted());

// function greet(name){
//     return `Hello, ${name}! Welcome!`;
// }

// console.log(greet("junnu"))

// function calculateArea(width,height){
//     return `area ${width * height}`;
// }

// console.log(calculateArea(30,100));
// console.log(calculateArea(40,90));
// console.log(calculateArea(50,70));

// // Declaration
// function sum1(a,b){
//     return a+b
// }
// console.log(sum1(10,20));

// const sum2=function(a,b){
//     return a+b;
// }

// console.log(sum2(90,20));

// const sum3 =(a,b)=>{
//     return a+b;
// }

// console.log(sum3(60,40))

// function getGrade(marks = 0) {
//   if(marks >= 90) {
//     return "A";
//   } else if(marks >= 80) {
//     return "B";
//   } else if(marks>=70) {
//     return "C";
//   } else if(marks>=60) {
//     return "D";
//   } else {
//     return "F";
//   }
// }

// console.log(getGrade())
// console.log(getGrade(90));
// console.log(getGrade(60));
// console.log(getGrade(50));
// console.log(getGrade(80));
// console.log(getGrade(30));

// function sum(...num){
//     return num.reduce((sum,num)=>((sum+num)),0)
// }

// console.log(sum(1,2,3))
// console.log(sum(3,90,100))

// function filterAndDouble(num){
//     return num.filter(num=>num>=10).map(num=>num*2)
// }

// console.log(filterAndDouble([5,10,90,18,4,7]))

// function details(name,age,city="unKnown"){
// return {name,age,city}
// }

// console.log(details("junnu",20,"kgf"))

// console.log(details("junnu", 20));

// function processStudents(students) {
//   // ← takes array as parameter

//   // 1. passed — filter marks >= 50
//   const passed = students.filter((student) => student.marks >= 50);

//   // 2. failed — filter marks < 50
//   const failed = students.filter((student) => student.marks < 50);

//   // 3. average — reduce then divide
//   const total = students.reduce((sum, student) => sum + student.marks, 0);
//   const average = total / students.length;

//   // 4. topStudent — reduce to find highest
//   const topStudent = students.reduce((top, student) =>
//     student.marks > top.marks ? student : top,
//   );

//   // return everything as object
//   return { passed, failed, average, topStudent };
// }

// const students = [
//   { name: "Arjun", marks: 85, age: 20 },
//   { name: "Priya", marks: 42, age: 22 },
//   { name: "Rahul", marks: 91, age: 25 },
//   { name: "Junnu", marks: 38, age: 19 },
// ];

// console.log(processStudents(students));

// function calculate(num1,num2,callBack){
//     return callBack(num1,num2)
// }

// console.log(calculate(10,5,(a,b)=>a+b))
// console.log(calculate(20,30, (a,b)=>a-b))
// console.log(calculate(20,50,(a,b)=>a*b))

// const firstName="junnu";
// const lastName="j";
// const age= 20;
// const isLoggedIn= false;
// let lastLogin= null;

// console.log(`${firstName} ${lastName}`);
// console.log(typeof(firstName));
// console.log(typeof(lastName));
// console.log(typeof(age));
// console.log(typeof(isLoggedIn));
// console.log(typeof(lastLogin));

// console.log(isLoggedIn?"true":"false");

// lastLogin = "29-04-2026";
// console.log(lastLogin);
// const profile = { firstName, lastName, age, isLoggedIn, lastLogin };
// console.log(profile);

// function checkEligibility(age,hasID){
// if(age>=18 && hasID===true){
// console.log("Eligible")
// }else if(age<18){
//     console.log("Too young")
// }else if(age>=18&&hasID=== false){
//     console.log("No ID")
// }else{
//     console.log("Sorry for the inconvience")
// }
// }

// checkEligibility(24,true)

//     const names = ["alice", "bob", "charlie", "david", "eve"];
//     names.push("frank")  // ← add this first!
// names.shift()        // then remove first
//     console.log(names[names.length - 1]);
//     names.shift();
//     names.map((name) => name.toUpperCase());
//     names.filter((name) => name.length > 4);
//     console.log(names.filter((name) => name.length > 4));

// const gradebook = {
//   students: [],
//   addStudent(name, marks) {
//     this.students.push({ name, marks });
//   },
//   getTopStudent() {
//     return this.students.reduce((top, student) =>
//       student.marks > top.marks ? student : top,
//     );
//   },
//   getClassAverage() {
//     const total = this.students.reduce(
//       (sum, student) => sum + student.marks,
//       0,
//     );
//     return total / this.students.length;
//   },
//   getPassedStudents() {
//     return this.students.filter((student) => student.marks >= 50);
//   },
// };
// gradebook.addStudent("Alice", 85);
// gradebook.addStudent("Bob", 45);
// gradebook.addStudent("Charlie", 92);
// gradebook.addStudent("David", 60);
// console.log("Top Student:", gradebook.getTopStudent());
// console.log("Class Average:", gradebook.getClassAverage());
// console.log("Passed Students:", gradebook.getPassedStudents());
