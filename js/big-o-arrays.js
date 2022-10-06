let names = ["john", "adam", "sara"];

names[1] //Access O(1)
names.push('Raj') //Add At End O(1)
names.unshift('Raj') //Add At begin O(n)

names.pop() //delete from End O(1)
names.shift() //delete from begin O(n)

names.find('john') // O(n)

names.sort() //O(N* log N)

// .forEach .map .fillter .reduce/etc O(N)
// Array .slice .splice .concat O(N)
