// INPUTS
let dayInput = document.getElementById('dd');
let monthInput = document.getElementById('mm')
let yearInput = document.getElementById('yyyy')

//OUTPUT
const yearOutput = document.querySelector('.year-output');
const monthOutput = document.getElementById('month-output');
const dayOutput = document.querySelector('.day-output');

//ERRORS
const yearError = document.getElementById('error-year');
const monthError = document.getElementById("error-month");
const dayError = document.getElementById("error-day");

//SUBMIT
const submitBtn = document.getElementById("submitbtn");
submitBtn.style.background = "hsl(259, 100%, 65%)";

//LOGIC
let isValid = false

dayInput.addEventListener('input', () => {
    console.log('DAY')
    if (dayInput.value > 31) {
        dayError.textContent = '*enter a valid day'
        isValid = false
        return
    } else if (dayInput.value < 1) {
        dayError.textContent = "*field required";
        isValid = false
        return
    } else {
        dayError.textContent = "";
        isValid = true
    }
})

monthInput.addEventListener("input", () => {
  console.log("MONTH");
  if (monthInput.value > 12) {
      monthError.textContent = "*enter a valid month";
    isValid = false;
    return;
  } else if (monthInput.value < 1) {
    monthError.textContent = "*invalid month";
    isValid = false;
    return;
  } else if (monthInput.value === '') {
    monthError.textContent = "*field required";
    isValid = false;
    return;
  } else {
    monthError.textContent = "";
    isValid = true;
  }
});


yearInput.addEventListener("input", () => {
  console.log("YEAR");
  if (yearInput.value > 2023) {
    yearError.textContent = "*enter a valid year";
    isValid = false;
    return;
  } else if (yearInput.value < 1900) {
    yearError.textContent = "*invalid year";
    isValid = false;
    return;
  } else {
    yearError.textContent = "";
    isValid = true;
  }
});


//OUTPUT Result
submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    yearOutput.textContent = yearInput.value
})

    