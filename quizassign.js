// Question 1 
const mathHead = university.departments.find(dept => dept.name === "Mathematics").head;
console.log(mathHead);  

// Question 2

const csCourses = university.departments.find(dept => dept.name === "Computer Science").courses.map(course => course.courseCode);
console.log(csCourses);  


// Question 3

university.departments
  .find(dept => dept.name === "Mathematics")
  .courses.find(course => course.courseName === "Linear Algebra")
  .enrolledStudents.find(student => student.name === "Bob Green").grade = "A+";

console.log(university.departments.find(dept => dept.name === "Mathematics").courses.find(course => course.courseName === "Linear Algebra").enrolledStudents.find(student => student.name === "Bob Green").grade);



// Question 4

university.students = [
    ...university.students,
    { studentId: 1008, name: "Hannah Yellow", major: "Mathematics", year: 2 }
  ];
  
  console.log(university.students.filter(student => student.studentId === 1008));
 
  
  
// Question 5

const instructorName = university.departments
  .flatMap(dept => dept.courses)
  .find(course => course.courseName === "Data Structures")
  .instructor.name;

console.log(instructorName);  

// Question 6

university.departments
  .find(dept => dept.name === "Mathematics")
  .courses.find(course => course.courseName === "Calculus I")
  .enrolledStudents = [
    ...university.departments
      .find(dept => dept.name === "Mathematics")
      .courses.find(course => course.courseName === "Calculus I").enrolledStudents,
    { studentId: 1008, name: "Hannah Yellow", grade: "B" }
  ];

console.log(university.departments.find(dept => dept.name === "Mathematics").courses.find(course => course.courseName === "Calculus I").enrolledStudents);


// Question 7

const mathStudents = university.students.filter(student => student.major === "Mathematics");

console.log(mathStudents);


// Question 8

const bobGreenCourses = university.departments
  .flatMap(dept => dept.courses)
  .filter(course => course.enrolledStudents.find(student => student.name === "Bob Green"))
  .map(course => ({
    courseName: course.courseName,
    grade: course.enrolledStudents.find(student => student.name === "Bob Green").grade
  }));

console.log(bobGreenCourses);


// Question 9 

const isEnrolledInCS = studentId => university.departments
  .find(dept => dept.name === "Computer Science")
  .courses.some(course => course.enrolledStudents.find(student => student.studentId === studentId));

console.log(isEnrolledInCS(1001));  


// Question 10

const officeNumber = university.departments
  .flatMap(dept => dept.courses)
  .find(course => course.courseName === "Introduction to Programming")
  .instructor.office;

console.log(officeNumber); 

