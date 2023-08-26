var goal, rolls, item, dice;

// Describe this function...
function display_the_rolls() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list = document.getElementById('list');
  element_list.replaceChildren();
  rolls.forEach((item) => {
    let element_list2 = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = item;

    element_list2.appendChild(new_li);
  });
}

// Describe this function...
function display_info() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  display_the_rolls();
  display_total();
  display_result();
}

// Describe this function...
function display_total() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_total2 = document.getElementById('total');
  element_total2.innerText = rolls.reduce((a,b) => a+b, 0);
}

// Describe this function...
function display_result() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (rolls.reduce((a,b) => a+b, 0) == goal) {
    let element_info2 = document.getElementById('info');
    element_info2.innerText = 'You Win!';
  } else if (rolls.reduce((a,b) => a+b, 0) < goal) {
    let element_info3 = document.getElementById('info');
    element_info3.innerText = 'Keep Going..';
  } else {
    let element_info4 = document.getElementById('info');
    element_info4.innerText = 'You Lost';
  }
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


goal = 11;
rolls = [];
dice = [1, 2, 3, 4, 5, 6];
display_info();


document.getElementById('button_restart').addEventListener('click', (event) => {
  rolls = [];
  let element_list3 = document.getElementById('list');
  element_list3.replaceChildren();
  let element_total = document.getElementById('total');
  element_total.innerText = '0';
  let element_info = document.getElementById('info');
  element_info.innerText = 'Keep playing!';

});

document.getElementById('button_roll').addEventListener('click', (event) => {
  rolls.push(randomMember(dice));
  display_info();

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  rolls.pop();
  display_info();

});