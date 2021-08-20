function getValues(){
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue = parseInt(fizzValue)
    buzzValue = parseInt(buzzValue)

    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        let values = generateValues(fizzValue, buzzValue)

        displayValues(values)

    } else{
        alert("Please Enter Integers")
    }

}

function generateValues(fizzVal, buzzVal){
    let returnArray = []

    for(let i = 1; i <=100 ; i++){

        let value = ((i % fizzVal == 0 ? "Fizz": "") + (i % buzzVal == 0 ? 'Buzz' : "") || i)
        returnArray.push(value)
    }
    return  returnArray
}

function displayValues(valArr){

    let tableBody = document.getElementById("results");
    let templateRow = document.getElementById("fizzBuzzTemplate");

    tableBody.innerHTML ="";

    for(let i = 0; i < valArr.length; i+= 5){

        let tableRow = document.importNode(templateRow.content, true)

        let rowCols = tableRow.querySelectorAll("td");
        
        rowCols[0].classList.add(valArr[i])
        rowCols[0].textContent = valArr[i]

        rowCols[1].classList.add(valArr[i+1])
        rowCols[1].textContent = valArr[i+1]

        rowCols[2].classList.add(valArr[i+2])
        rowCols[2].textContent = valArr[i+2]

        rowCols[3].classList.add(valArr[i+3])
        rowCols[3].textContent = valArr[i+3]

        rowCols[4].classList.add(valArr[i+4])
        rowCols[4].textContent = valArr[i+4]

        tableBody.appendChild(tableRow)
    }
}