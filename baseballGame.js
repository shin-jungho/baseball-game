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

// 입력값의 대한 코드
let nothing = 0;
formTag.addEventListener('submit', (e) => {
  e.preventDefault(); // 기본 동작 막기위해서 사용
  const value = inputTag.value;
  inputTag.value = '';
  const valid = checkInput(value);
  if (!valid) { // 입력값 문제 없을때
    return;
  } 

  // 정답일때
  if(answer.join('') === value) { // join 배열 -> 문자열로 바꿈 , split 문자열 -> 배열
    logsTag.textContent = '정답입니다!';
    restartGame();
    return;
  }
  
  // 스트라이크, 볼 갯수 검사하는 코드
  let strike = 0;
  let ball = 0;
  for(let i = 0; i < answer.length; i++) {
    const index = value.indexOf(answer[i]);
    if(index >  -1) { // 일치하는 숫자 발견
      if (index === i) { // 자릿수도 같음
        strike += 1;
      } else { // 숫자만 같음
        ball += 1;
      }
    } 
  }
    if (strike === 0 && ball === 0){ // 스트라이크, 볼 둘 다 아닐때 낫싱
      nothing++;
      logsTag.append(`${value} >> 낫싱`, document.createElement('br'));
    } else {
      logsTag.append(`${value} >> 스트라이크: ${strike} 볼: ${ball} `, document.createElement('br'));
    }
});