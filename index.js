var theBeatlesPlay = function(musicians, instruments){
  var arr = [];
  for (var i = 0; i < musicians.length; i++){
      arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

var johnLennonFacts = function(array){
  var newFacts = [];
  var i = 0;
  while(i < array.length){
    newFacts.push(array[i] + "!!!");
    i++;
  }
  return newFacts;
}

var iLoveTheBeatles = function(number){
  var love = [];
  do {
    love.push(`I love the Beatles!`);
    number++;
  } while ( number < 15);
  return love;
}
