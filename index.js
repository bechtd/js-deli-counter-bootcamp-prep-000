function takeANumber(line, person) {
  var nextNumber = line.length + 1;
  line.push(person);
  return `Welcome, ${person}. You are number ${nextNumber} in line.`;
}

function nowServing(line) {
  if(line.length === 0) {
    return "There is nobody waiting to be served!";
  }
  //var name = line.shift(1);
  return `Currently serving ${line.shift(1)}.`
}