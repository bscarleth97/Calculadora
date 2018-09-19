submitButton = document.getElementById("loan-form");
document.getElementById("results").style.display = "none";
document.getElementById("loader").style.display = "none";
//console.log(submitButton);
//submitButton.addEventListener("submit", calculateResults);

submitButton.addEventListener("submit", function(e) {
  document.getElementById("loader").style.display = "block";
  document.getElementById("results").style.display = "none";
  setTimeout(calculateResults, 3000);
  e.preventDefault();
  //document.getElementById("loader").style.display = "none";
});

function calculateResults(e) {
  console.log("hallo");
  const loanAmmountUI = document.getElementById("amount");
  const interestAmmountUI = document.getElementById("interest");
  const yearsAmmountUI = document.getElementById("years");

  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");

  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(loanAmmountUI.value);
  const calculatedInterest = parseFloat(interestAmmountUI.value) / 100 / 12;
  const calculatePayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatePayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayments).toFixed(2);
    totalInterest.value = (monthly * calculatePayments - principal).toFixed(2);
    document.getElementById("results").style.display = "block";
    document.getElementById("loader").style.display = "none";
  } else {
    manageError("Error, check your numbers :-)");
    document.getElementById("results").style.display = "none";
    document.getElementById("loader").style.display = "none";
  }

  console.log("start " + e.type);
}

function manageError(errorMsg) {
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
  const errorDiv = document.createElement("div");
  errorDiv.className = "alert alert-danger";
  errorDiv.id = "customAlert";

  const errorTextNode = document.createTextNode(errorMsg);
  errorDiv.appendChild(errorTextNode);

  card.insertBefore(errorDiv, heading);
  window.setTimeout(clearError, 3000);
}

function clearError() {
  document.getElementById("customAlert").remove();
}
