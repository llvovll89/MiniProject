const numbersDiv = document.querySelector(".numbers");
const drawBtn = document.querySelector(".draw");
const resetBtn = document.querySelector(".reset");

// 로또 번호가 들어갈 곳 빈 배열 생성
const lottoNumbers = [];
// 로또 번호의 색상 지정 (6가지)
const colors = ["teal", "salmon", "purple", "blue", "whitesmoke"];

// 로또번호 (컬러 -> div 이벤트)
function paintNumber(number){
    const eachNumDiv = document.createElement("div");
    let colorIndex = Math.floor(number / 10)
    eachNumDiv.classList.add("eachnum");
    eachNumDiv.style.backgroundColor = colors[colorIndex];
    eachNumDiv.textContent = number
    numbersDiv.appendChild(eachNumDiv);
}

// 로또 번호 생성 이벤트
drawBtn.addEventListener("click", function () {
  while (lottoNumbers.length < 6) {
    //   random -> 0 ~ 1 까지 (소수점 포함) -> Math.floor로 소수점 제거 후 +1, 45곱한거는 0 ~ 45까지
    let ran = Math.floor(Math.random() * 45) + 1;
    if (lottoNumbers.indexOf(ran) === -1) {
      lottoNumbers.push(ran);
      paintNumber(ran)  
    }
  }
});

// reset btn
resetBtn.addEventListener("click", ()=>{
    // 6가지 번호 0 ~ 5 까지 삭제(인덱스는 0,1,2,3,4,5 순)
    lottoNumbers.splice(0, 6);
    // 다시 버튼 클릭시 화면에 보이는 것 삭제 위 번호 splice 안해주면 실행 안됨
    numbersDiv.innerHTML = "";
})