function unique(arr) {
  return arr.filter( (element, index, self) => self.indexOf(element) === index);
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O