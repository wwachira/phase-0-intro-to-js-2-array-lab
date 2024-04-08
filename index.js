let cats = ["Milo", "Otis", "Garfield"];
// destructivelyAppendCat function should add "Ralph" to the end of the cats array.
function destructivelyAppendCat(name) {
  cats.push(name);
}
// destructivelyPrependCat function should add "Ralph" to the begining of the cats array.
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
// destructivelyRemoveLastCat function should remove the last cat from the cats array.
function destructivelyRemoveLastCat() {
  cats.pop();
}
// destructivelyRemoveFirstCat function should remove the first cat from the cats array.
function destructivelyRemoveFirstCat() {
  cats.shift();
}
//appendCat function shouldcreate a new array with the original cats array and the new cat "Tom" added at the end.
function appendCat(name) {
  const newArray = [...cats, name];
  return newArray;
}
//prependCat function should create a new array with the new cat added at the beginning and the original cats array.
function prependCat(name) {
  const newArray = [name, ...cats];
  return newArray;
}
//removeLastCat function should create a new array with all the cats except the last one
function removeLastCat() {
  return cats.slice(0, -1);
}
//removeFirstCat function will create a new array with all the cats except the first one
function removeFirstCat() {
  return cats.slice(1);
}

//testing my output
console.log(cats); //prints the three initial cats Milo, Otis, Garfield
destructivelyAppendCat("Ralph");
console.log(cats);// Ralph is added
destructivelyPrependCat("Bob");
console.log(cats); //Bob is added at begining
destructivelyRemoveLastCat();
console.log(cats); //Ralph is removed.
destructivelyRemoveFirstCat();
console.log(cats); // Bob is removed.
const newCatsArray = appendCat("Tom");
console.log(newCatsArray); //Tom is added
prependCat("Jerry");
console.log(cats); //nothing happens not sure why. You have to open and closebracket like my next output.
{
  const newCatsArray = removeLastCat();
  console.log(newCatsArray); // ["Milo", "Otis"]
  console.log(cats);
}
