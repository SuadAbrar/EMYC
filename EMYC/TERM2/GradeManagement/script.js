console.log("...");
let Student = {
  name: "Abebe",
  id: 1,
  grades: [],
  attendance: 80,

//   addGrade(subject, score)
};

function addGrade(object, subject, score) {
    let newGrade = { subject: subject, score: score };

    let index = object.grades.length;
    object.grades[index] = newGrade;

    document.getElementById
}

function calculateAverage(object) {
    let sum = 0;
    for (let i = 0; i < object.grades.length; i++) {
        sum = sum + object.grades[i].score;
    }

    return sum / object.grades.length;
}

function getStatus(object){
    let average = calculateAverage(object)

    if(average>=60 && object.attendance >=75){
        return "pass"
    }else return "fail"
}

function getInfo(object){
    let info = "";
    info+= "Name:" + object.name + "\n";
    info+= "Id:" + object.id + "\n";
    info+= "Attendance:" + object.attendance + "\n";
    info+= "Average:" + calculateAverage(object) + "\n";
    info+= "Status:" + getStatus(object) + "\n";

    return info;
}

addGrade(Student, "Math", 70);
addGrade(Student, "Math", 40);
addGrade(Student, "Math", 50);
addGrade(Student, "Math", 80);

console.log(getInfo(Student));