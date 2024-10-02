const textareaVal = document.querySelector(".textarea");

const charCounter = document.querySelector(".txt-charaters-count-container");

textareaVal.addEventListener("input", () => {
  let len = textareaVal.value.length;
  charCounter.innerHTML = `${len}/250 `;
  if (len === 250) {
    textareaVal.style.color = "red";
    textareaVal.style.border = "solid red";
  }
});
