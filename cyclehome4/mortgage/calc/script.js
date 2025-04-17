function calculateBalance() {
  const PP = parseFloat(document.getElementById("principal").value);
  const rr = parseFloat(document.getElementById("interestRate").value) / 100;
  const tt = parseFloat(document.getElementById("years").value);
  const mm = parseFloat(document.getElementById("monthlyPayment").value);
  const nn = 12;

  const power = nn * tt;
  const ratePerPeriod = rr / nn;

  const BB = PP * Math.pow(1 + ratePerPeriod, power) - 
             (mm * (Math.pow(1 + ratePerPeriod, power) - 1)) / ratePerPeriod;

  const roundedBB = BB.toFixed(2);

  document.getElementById("output").innerHTML = `Remaining Balance: $${roundedBB}`;
}

function reset() {
  document.getElementById("principal").value = "";
  document.getElementById("interestRate").value = "";
  document.getElementById("years").value = "";
  document.getElementById("monthlyPayment").value = "";
  document.getElementById("output").innerHTML = "";
}
