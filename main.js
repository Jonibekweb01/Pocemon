let list = document.querySelector(".list");
let elSelect = document.querySelector('.js-select');

let nameArray = [];

for (i of pokemons) {
  let toArray = i.type;
  nameArray.push(...toArray);
}


const set = new Set(nameArray);

set.forEach(function (value) {
  let optiton = document.createElement("option");
  optiton.textContent = value;
  elSelect.appendChild(optiton);
});



let aylangan = pokemons.forEach(function (element) {

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
});

elSelect.addEventListener("change", function (e) {
  e.preventDefault();

  var selectVal = elSelect.value;
  var newArray = [];

  list.innerHTML = "";

  pokemons.forEach((el) => {
    if (el.type.includes(selectVal)) {
      newArray.push(el);
    }
  });



  newArray.forEach(function (element, index) {

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
  });

})
