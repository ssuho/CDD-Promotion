const height = document.querySelector("#height")
const result = document.querySelector("#result")
const resultBtn = document.querySelector("#result-btn")
const resultErase = document.querySelector("#result-erase")

function resultMaker() {
  let addresult = Math.round(height.value * 0.23)

  if(addresult<=0){
    alert("정확한 수치를 입력해주세요 😥")
  } else {
    result.innerHTML = `<img src="./Fynn.webp" alt="꿋북이"><p>당신에게 적절한 의자 높이는? <br><p id="cm">${addresult}cm<br><p><p>`
  }
}

function resultEraser() {
  height.value = ""
  result.innerHTML = ""
}

resultBtn.addEventListener("click", resultMaker)
resultErase.addEventListener("click", resultEraser)