var randomStudent = {
    name: 'Who Knows',
    age:500,
    mark: 'Unknown',
    phone:"01704223163"
}
// set object property value
randomStudent.mark="Black hair"
var newMark=randomStudent.mark;
console.log(newMark);

var newPhone="01798393077";
randomStudent["phone"]=newPhone;
console.log(randomStudent);

var newAge="age";
randomStudent[newAge]=11;
console.log(randomStudent)