function switchLikes(names) {

  switch (names.length) {
    case 0: return `no one likes this`; break;
    case 1: return `${names} like this `; break;
    case 2: return `${names[0]} and ${names[1]} like this`; break;
    case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`; break;
    default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this `;
  }
  
}
console.log('----With Switch----')

console.log(switchLikes(["Mark", "Jacob", "Jhon Doe"]));


function ifLikes(names) {
  console.log('----With IF condition----')
names.length == 0
  ? console.log(`no one like this`)
  : names.length == 1
  ? console.log(`${names[0]} like this`)
  : names.length == 2
  ? console.log(`${names[0]} and ${names[1]} like this`)
  : names.length == 3
  ? console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`)
  : console.log(
      `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    );
}
ifLikes(["Mark", "Jacob", "Jhon Doe"]);
