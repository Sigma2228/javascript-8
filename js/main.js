let array = ["Poly", "Mango", "Ajax", "Chelsey", "Kiwi"];
let result = ""
for (let i = 0; i < array.length; i++) {
  result += array[i];
  if (i < array.length) {
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
for(let i = 0;i < cards.length ; i++) {
 if (cards[i] === 'Карточка-3') {
  cards.splice(2, 1)
 }
 if (cards[i] === 'Карточка-5') {
  cards.splice(4, 0, 'Карточка-6')
 }
 if (cards[i] === 'Карточка-4') {
  cards.splice(3, 1, 'оновлена Карточка-4')
 }
}
console.log(cards)