'use strict';
let sum = 0;
let n = prompt('please Enter your name ?')
alert('welcome ' + n + ' in my webpage');
alert('please answer the following qustions with yes/no  OR  y/n');

function Q1() {

  let qus1 = prompt('Am I elein ?').toLowerCase();
  if (qus1 == 'yes' || qus1 == 'y') {
    console.log('the correct answer is yes ');
    alert('the correct answer is yes');
    sum = sum + 1;
  } else {
    alert('your answer is incorrect')
  }
};



function Q2() {


  let qus2 = prompt('Do I like Mansaf ?').toLowerCase();
  if (qus2 == 'yes' || qus2 == 'y') {
    console.log('the correct answer is yes');
    alert('the correct answer is yes');
    sum = sum + 1;
  } else {
    alert('your answer is incorrect')
  }
}

function Q3() {

  let qus3 = prompt('is my hight 160?').toLowerCase();
  if (qus3 == 'no' || qus3 == 'n') {
    console.log('the correct answer is no');
    alert('the correct answer is no');
    sum = sum + 1;
  } else {
    alert('your answer is incorrect')
  }
}

function Q4() {

  let qus4 = prompt('Do I drink coffe ?').toLowerCase();
  if (qus4 == 'yes' || qus4 == 'y') {
    console.log('the correct answer is yes');
    alert('the correct answer is yes');
    sum = sum + 1;
  } else {
    alert('your answer is incorrect')
  }
};

function Q5() {

  let qus5 = prompt('Do I like sweets ?').toLowerCase();
  if (qus5 == 'no' || qus5 == 'n') {
    console.log('the correct answer is no');
    alert('the correct answer is no');
    sum = sum + 1;
  } else {
    alert('your answer is incorrect')
  }
};

function Q6() {

  let qus6 = prompt('guess the day was I born in from 0-30?');
  for (let i = 3; i > 0; i--) {
    if (qus6 == 27) {
      alert('Great ')
      sum = sum + 1;
      i = 0;
    } else if (qus6 > 27) {
      alert("You are too hight");
      qus6 = prompt('guess the day was I born in from 0-30 ? you have just  ' + i + ' time');
    } else if (qus6 < 27) {
      alert("You are too low");
      qus6 = prompt('guess the day was I born in from 0-30 ? you have just' + i + ' time');

    }
  }
  alert('correct answer is 27 ');
}

function Q7() {

  let arr = [27, 7, 98];
  let qus7 = prompt('guess 3 number that realted for me you will allow 6 time');
  for (let w = 5; w > 0; w--) {
    if (qus7 == arr[0] || qus7 == arr[1] || qus7 == arr[2]) {
      alert('Great')
      sum = sum + 1;
      w = 0;
    } else {
      qus7 = prompt('guess 3 number that realted for me you still have ' + w + ' time');

    }
  }

  alert('You have got  ' + sum + ' out of 7');

}


Q1();
Q2();
Q3();
Q4();
Q5();
Q6();
Q7();