function hello(name) {
  if (name === undefined || name === '') {
    return 'Hello, World!'
  }
  let firstCapLetter = name[0].toUpperCase();
  for (let i = 1; i < name.length; i++) {
    firstCapLetter += name[i].toLowerCase();
  }
  return `Hello, ${firstCapLetter}!`
}