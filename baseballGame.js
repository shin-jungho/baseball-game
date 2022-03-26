const inputTag = document.querySelector('#input');
const formTag = document.querySelector('#form');
const logsTag = document.querySelector('#logs');

// 숫자 [1, 2, 3, 4, 5, 6, 7, 8, 9] 넣기
const numbers = []; 
for (let n = 0; n < 9; n++) {
  numbers.push(n + 1);
}

// 3자리 뽑는 코드
const answer = [];
for (let n = 0; n < 3; n += 1) { // 3자리 뽑을때까지 반복
  const index = Math.floor(Math.random() * numbers.length); 
  answer.push(numbers[index]); 
  numbers.splice(index, 1); 
}
console.log(answer); // console로 답 확인

// input number check
const chances = [];
function checkInput(input) {
  if (new Set(input).size !== 3) { // new Set으로 중복된 input값 거르기
    return alert('중복된 숫자가 있습니다.');
  } 
  if (chances.includes(input)){ // 시도한 배열에 이미 시도한 값이 들어있는것 거르기
    return alert('이미 시도한 값입니다.');
  }
  return true; 
}

