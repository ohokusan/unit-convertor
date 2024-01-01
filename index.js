/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertorBody = document.getElementById("convertor-body")
const convertBtn = document.querySelector("#convert-btn")
const inputNumberEl = document.querySelector("#input-number")



const unitsData = [
    {
        headName: "Length (Meter/Feet)",
        factor: 3.281,
        unitName: ["meters", "feet"]
    },
    {
        headName: "Volume (Liters/Gallons)",
        factor: 0.264,
        unitName: ["liters", "gallons"]
    },
    {
        headName: "Mass (Kilograms/Pounds)",
        factor: 2.204,
        unitName: ["kilos", "pounds"]
    }
]

convertBtn.addEventListener("click", function () {
    // convert and render
        let inputNumber = inputNumberEl.value
        render(unitsData, inputNumber)
        convertorBody.style.padding = "30px" 
})


function render(units, inputNumber) {
    let convertorItem = ""
    if (isNaN(inputNumber) || inputNumber === "") {
        convertorItem = `
        <div class="convertor-error">
            You haven't put any number into the field.
        </div>`
    } else {
        for (let i= 0; i<units.length; i++) {
            convertorItem +=  `
            <div class="convertor-item">
                <h2 class="unit-name">
                    ${units[i].headName}
                </h2>
                <p class="unit-conversion">
                ${inputNumber} ${units[i].unitName[0]} = ${(inputNumber * units[i].factor).toFixed(3)} ${units[i].unitName[1]}
                |
                ${inputNumber} ${units[i].unitName[1]} = ${(inputNumber / units[i].factor).toFixed(3)} ${units[i].unitName[0]}
                </p>
            </div>
            `
        }
    }

    convertorBody.innerHTML = convertorItem

}
