//  SINF YOZILGAN KODLAR[
//   // var fruits = ["olma", "nok", "olcha", 2];


//   // var arrInc = fruits.includes("banan", 25); => Boolean

//   // includes array metodi va 2 ta param qabul qiladi 1- stringda qidirilyotgan element nomi  , 2 - fromIndex qaysi indexdan boshlab qidirish lozim

//   // for (var meva of fruits) {
//   // console.log(meva);
//   // }


//   // callbackfn
//   // function sayHello(){

//   // }

//   // sayHello(sayGoodbye());


//   // fruits.forEach(function(meva){
//   //  console.log(meva);
//   // })

//   // fruits.forEach(function(item, i, arr){
//   //  console.log(item, i, arr);
//   // })

//   // Arrow function

//   // var func = (a, b) => {
//   //   console.log(a, b);
//   //   return a + b;
//   // }

//   // var func = (a, b) => a + b;


//   // console.log(func(5, 6));

//   // callbackfunction
//   // fruits.forEach(function(item){
//   //   console.log(item);
//   // })

//   // fruits.forEach(item => console.log(item));


//   // var fruits = ["olma", "nok", "olcha", 2];

//   // fruits.forEach((item, index) => console.log(item , index));

//   // fruits.forEach(function(item, index){

//   //   var newItem = document.createElement("li");
//   //   var newSpan = document.createElement("span");

//   //   newItem.textContent = item;
//   //   newSpan.textContent = index + 1;

//   //   newItem.prepend(newSpan);
//   //   list.appendChild(newItem);
//   // })

//   // console.log(typeof []);

//   // var

//   // var age = 26; // Declaration
//   // age = 30; // Re-assigment
//   // var age = 60; // Re-declaration

//   // ES-6

//   // let

//   // let userAge = 26; // Declaration
//   // userAge = 30; // Re-assigment
//   // let userAge = 60; // Re-declaration NOT allowed

//   // const
//   // const userAge = 26; // Declaration
//   // userAge = 30; // Re-assigment Not allowed
//   // const userAge = 60; // Re-declaration NOT allowed


//   // Hoisting

//   // var userName // undifened;

//   // console.log(userName);

//   // const userName = "Jonibek";


//   // consol();

//   // function consol() {
//   // console.log("Hoisting uchradim yedim");
//   // }


//   // userName();

//   // var userName = function(){
//   //   console.log("Uzr");
//   // }

//   // Scope => Qavs (Glabol{}, Block{}, functional{});

//   // let age = 25;



//   // function user(){
//   //   console.log(age + "voya");
//   // }

//   // user();

//   // if(age > 18){
//   //   console.log(age + "Voyaga yetgan");
//   // }

//   // let age = 25;

//   // if(age > 15){
//   //  var userSurname = "Birnimayev";

//   // //  console.log(age, userSurname);
//   // }

//   // for (const iterator of object) {

//   // }

//   // function nemo(){
//   //   var userList = 25;
//   // }
//   // let arrow = () =>{

//   // }
//   // var func = function(){

//   //   return a + b;
//   // }

//   // console.log(userSurname);
//   // console.log(userList);

//   // func();

//   // const func = function(){
//   //   console.log("Hoisting");
//   // }

//   // pokemons.forEach(function(poke){
//   //   let newItem = document.createElement("li");

//   //   newItem.textContent = poke.name;

//   //   console.log(newItem.textContent = poke.name);
//   // })
// ]

let list = document.querySelector(".list");


pokemons.forEach(function (element, index) {

  // CREATING

  let newItem = document.createElement("li");
  let id = document.createElement('span');
  let title = document.createElement('h1');
  let image = document.createElement('img');
  let time = document.createElement("span");
  let name = document.createElement('h2');

  // ADDING CLASS 

  id.classList.add("id");
  time.classList.add("time")

  // EQUALIZING

  id.textContent = element.id;
  title.textContent = element.name;
  image.src = element.img;
  time.textContent = element.spawn_time;
  name.textContent = element.type;

  // APPENDING

  newItem.appendChild(id);
  newItem.appendChild(title)
  newItem.appendChild(image)
  newItem.appendChild(time);
  newItem.appendChild(name)
  list.appendChild(newItem);

})