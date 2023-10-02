const vouitton = document.querySelector(".louis");
const tBody = document.querySelector(".body");
const res = document.querySelector(".results");
const students = new Array();

class Student {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
};

vouitton.addEventListener('click', () => {

    if(document.getElementById("name").value !== "" && document.getElementById("weight").value !== "") {
        
        const newStudent = new Student(document.getElementById("name").value, parseFloat(document.getElementById("weight").value));

        if(newStudent.weight > 0 && newStudent.weight < 120) {

            const newRow = tBody.insertRow();
            for(value of Object.values(newStudent)) {
                const newCell = newRow.insertCell();
                const newText = document.createTextNode(value);
                newCell.appendChild(newText);
            }
            students.push(newStudent);

            res.innerHTML = `<p>Alumnos de menos de 40Kg: ${(students.map((student) => student.weight)
                .filter((weight) => weight < 40).length/students.length)*100}%</p>
            <p>Alumnos entre 40 y 50Kg: ${(students.map((student) => student.weight)
                .filter((weight) => (weight >= 40 && weight <= 50)).length/students.length)*100}%</p>
            <p>Alumnos de mas de 50 y menos de 60Kg: ${(students.map((student) => student.weight)
                .filter((weight) => (weight > 50 && weight < 60)).length/students.length)*100}%</p>
            <p>Alumnos mayores o iguales a 60Kg: ${(students.map((student) => student.weight)
                .filter((weight) => weight >= 60).length/students.length)*100}%</p>`
        } else {
            alert("Solo se permiten pesos razonables.");
        }
    } else {
        alert("No se permiten campos vacios.");
    }
})