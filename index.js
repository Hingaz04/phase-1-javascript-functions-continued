
// code your solution here
function saturdayFun(funActivity= "roller-skate") {
  return `This Saturday, I want to ${funActivity}!`;
}

function mondayWork(task = 'go to the office'){
 return `This Monday, I will ${task}.`
}

function wrapAdjective(visualFlair = "*") {
  return function(adjective = "special") {
      return `You are ${visualFlair}${adjective}${visualFlair}`;
  };
}
