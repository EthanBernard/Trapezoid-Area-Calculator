// Java Script

document.getElementById('btn').addEventListener('click', calcTotal)

// Event listener

function calcTotal() {
    // Input
let b1 = Number(document.getElementById('b1').value);
let b2 = Number(document.getElementById('b2').value);
let h = Number(document.getElementById('h').value);
    // Calculations

   let total = 1/2 * (b1 + b2) * h 

    // Output
document.getElementById('output').innerHTML = total
}