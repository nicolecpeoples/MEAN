function fib() {
  // Some variables here
  var prev = 0;
  var next = 1;
  var sum = 1;
  function nacci() {
    // do something to those variables here
    console.log(sum);
    
    sum = prev + next;
    prev = next;
    next = sum;
    
  }
  return nacci
}
var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"