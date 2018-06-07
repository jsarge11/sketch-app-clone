function dragEquation(e) {
 // convert from percent
 let x = e / 100;
 // x^2 + 0.1x - .1
 let y = Math.pow(x, 2);
 y += y * .1;
 y -= .1;
 return y;
}

module.exports = dragEquation;