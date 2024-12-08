let array = ["Poly", "Mango", "Ajax", "Chelsey", "Kiwi"];
let result = ""
for(let i = 0;i < array.length;i++) {
    result += array[i];
    if(i < array.length) {
      result += ","
    }
}
console.log(result)
let arr = array.join(",")
console.log(arr)
const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
]
let cardToRemove = cards.splice(2, 1)
console.log(cards)
let cardToAdd = cards.splice(4, 0, "Карточка-6")
console.log(cards)
let cardToUpdate = cards.splice(2, 1, "Карточка-777")
console.log(cards)