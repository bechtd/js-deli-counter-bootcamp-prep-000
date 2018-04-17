function takeANumber(line, person) {
  var nextNumber = line.length + 1;
  line.push([person]: `Welcom, ${person}. You are number ${nextNumber} in line.`);
  return line;
}