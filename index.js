// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
}
function destructivelyPrependCat(Bob){
    cats.unshift(Bob);
}
function destructivelyRemoveLastCat(Garfield){
    cats.pop()
}
function destructivelyRemoveFirstCat(milo){
    cats.shift()
}
function appendCat(Broom){
    const newCatsArray = [...cats, Broom]
    return newCatsArray;
}
function prependCat(Arnold){
    const newCatsArray = [Arnold, ...cats]
    return newCatsArray;
}
function removeLastCat() {
    const newCatsArray = cats.slice(0, -1);
    return newCatsArray;
  }
  function removeFirstCat() {
    const newCatsArray = cats.slice(1);
    return newCatsArray;
  }