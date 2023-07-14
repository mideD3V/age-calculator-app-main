// INPUTS
let d1 = document.getElementById("dd");
let m1 = document.getElementById("mm");
let y1 = document.getElementById("yyyy");

//OUTPUT
const yearOutput = document.querySelector(".year-output");
const monthOutput = document.querySelector(".month-output");
const dayOutput = document.querySelector(".day-output");

//ERRORS
const yearError = document.getElementById("error-year");
const monthError = document.getElementById("error-month");
const dayError = document.getElementById("error-day");

//SUBMIT btn
const submitBtn = document.getElementById("submitbtn");

//LOGIC
let isValid = false;

d1.addEventListener("input", () => {
  if (d1.value > 31) {
    dayError.textContent = "*enter a valid day";
  d1.style.outlineColor = "red";
    isValid = false;
    return;
  } else if (d1.value < 1) {
    dayError.textContent = "*field required";
      d1.style.outlineColor = "red";
    isValid = false;
    return;
  } else {
    d1.style.outlineColor = "hsl(259, 100%, 65%)";
    dayError.textContent = "";
    isValid = true;
  }
});

m1.addEventListener("input", () => {
  if (m1.value > 12) {
    monthError.textContent = "*enter a valid month";
    m1.style.outlineColor = 'red'
    isValid = false;
    return;
  } else if (m1.value < 1) {
    monthError.textContent = "*invalid month";
      m1.style.outlineColor = "red";
    isValid = false;
    return;
  } else if (m1.value === "") {
    monthError.textContent = "*field required";
      m1.style.outlineColor = "red";
    isValid = false;
    return;
  } else {
    m1.style.outlineColor = "hsl(259, 100%, 65%)";
    monthError.textContent = "";
    isValid = true;
  }
});

y1.addEventListener("input", () => {
  if (y1.value > 2023) {
    yearError.textContent = "*enter a valid year";
      y1.style.outlineColor = "red";
    isValid = false;
    return;
  } else if (y1.value < 1900) {
    yearError.textContent = "*invalid year";
      y1.style.outlineColor = "red";
    isValid = false;
    return;
  } else {
          y1.style.outlineColor = "hsl(259, 100%, 65%)";
    yearError.textContent = "";
    isValid = true;
  }
});

//Get Current Dates
var date = new Date();
var d2 = date.getDate();
var m2 = 1 + date.getMonth();
var y2 = date.getFullYear();
var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (d1.value > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }

  if (m1.value > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  var d = d2 - d1.value;
  var m = m2 - m1.value;
  var y = y2 - y1.value;

  console.log(y);
  yearOutput.innerHTML = y;
  monthOutput.textContent = m;
  dayOutput.textContent = d;
});
