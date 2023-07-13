// INPUTS
let dayInput = document.getElementById('dd').value;
let monthInput = document.getElementById('mm').value;
let yearInput = document.getElementById('yyyy').value;

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


//Get Current Dates
const date = new Date()
let currYear = date.getFullYear()
let currMonth = date.getMonth()
let currDay = date.getDate()

//OUTPUT Result
const yyyy = yearInput.value;



submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
//    yearOutput.textContent = 
    console.log(yyyy)
})

    
// 
  function age() {
    

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
      d2 = d2 + month[m2 - 1];
      m2 = m2 - 1;
    }
    if (m1 > m2) {
      m2 = m2 + 12;
      y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    document.getElementById("age").innerHTML =
      "Your Age is " + y + " Years " + m + " Months " + d + " Days";
  }
