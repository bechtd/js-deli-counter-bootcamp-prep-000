function takeANumber(katzDeliLine, person) {
  var nextNumber = katzDeliLine.length + 1;
  katzDeliLine.push([person]: `Welcom, ${person}. You are number ${nextNumber} in line.`);
  return katzDeliLine;
}