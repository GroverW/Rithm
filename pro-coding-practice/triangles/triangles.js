/* Is size a valid integer 2-50? */

function validateEdge(size) {
  return (Number.isInteger(size) &&
      size >= 2 &&
      size <= 50);
}

/* Handle UI: get form data & update HTML */

function processForm(evt) {
  evt.preventDefault();
  let sideA = +document.getElementById("side-a").value;
  let sideB = +document.getElementById("side-b").value;
  let resultsMessages = getResultsFromSideLengths(sideA,sideB);

  document.getElementById("a-msg").innerHTML = resultsMessages.aMsg;
  document.getElementById("b-msg").innerHTML = resultsMessages.bMsg;
  document.getElementById("msg").innerHTML = resultsMessages.msg;
}

function calculateArea(sideA, sideB){
  return sideA * sideB / 2;
}

function calculateHypotenuse (sideA, sideB){
  return Math.round(Math.sqrt(sideA * sideA + sideB * sideB));
}

function printHypotenuseAndArea(hypot, area){
  let msg = `Hypotenuse is ${hypot} and area is ${area}.`;
  if(area > 50) {
    msg += " That's a really big triangle!";
  }
  return msg;
}

function getResultsFromSideLengths(sideA,sideB){
  let isValidEdgeA = validateEdge(sideA);
  let isValidEdgeB = validateEdge(sideB);

  let aIsValideMessage = isValidEdgeA ? "A is Valid" : "Invalid!";
  let bIsValidMessage = isValidEdgeB ? "B is Valid" : "Invalid!";

  let msg;
  if (isValidEdgeA && isValidEdgeB) {
    let area = calculateArea(sideA,sideB);
    let hypot = calculateHypotenuse(sideA,sideB);
    msg = printHypotenuseAndArea(hypot,area);
  } else {
    msg = "Please enter valid sides!";
  }

  let result = {
    aMsg : aIsValideMessage,
    bMsg : bIsValidMessage,
    msg : msg
  };

  return result;
}

