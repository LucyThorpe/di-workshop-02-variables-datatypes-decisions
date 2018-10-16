var name = 'Lucy'
var position = 100
var isMoving = true
var direction = 10
var numberOfBounces = 0
// var is a variable 
function setup() {
  createCanvas(400, 200)
}
// the box
function draw() { 
  background(100)
  if (isMoving) {
    // the code in here only runs if `moving` is true
    position = position + direction 
  }
  if (position === 400 || position === 0) {
    direction = -direction 
    numberOfBounces++
    // numberOfBounces = numberOfBounces + 1 is the same as numberOfBounrces ++
  }
 rect(position, 0 ,10, 10)
 console.log('The position is ' + position)
 text('My name is ' + name, 10, 30)
 text(isMoving, 10, 50)
 text(numberOfBounces, 10, 70)
}
function mousePressed() {
  isMoving = !isMoving
}
