let piket = prompt("Shkruaj piket:");

if (piket >= 0 && piket <= 50){
    document.getElementById(`result`).textContent = "U FAILED!"
}else if (piket >= 51 && piket <= 60){
    document.getElementById(`result`).textContent = "Your grade is 6!"
}else if (piket >= 61 && piket <= 70){
    document.getElementById(`result`).textContent = "Your grade is 7!"
}else if (piket >= 71 && piket <= 80){
    document.getElementById(`result`).textContent = "Your grade is 8!"
}else if (piket >= 81 && piket <= 90){
    document.getElementById(`result`).textContent = "Your grade is 9!"
}else if (piket >= 91 && piket <= 100){
    document.getElementById(`result`).textContent = "Your grade is 10!"
}