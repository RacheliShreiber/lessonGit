import { Component, OnInit } from '@angular/core';
import { Student } from "../student.model";
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  
})
export class StudentListComponent implements OnInit{
  
  students: Student[];
  //students: Student[]=this._studentService.getStudents();

  
  deleteStudent(student:Student) {
    this._studentService.deleteStudent(student);
  }
  selectedStudent:Student;
  showDetails(studentDetails:Student){
    // alert(studentDetails.id);
    this.selectedStudent=studentDetails;
    // alert(this.selectedStudent.id);
  }
  num:number;
  totalAbsence(s:number):number{
   this.num=this._studentService.totalAbsenceDays(s);
   return this.num;
  }
  addNewStudent(){
    this.selectedStudent=new Student("new student");
  }
  saveStudentToList(saveStudent:Student){
    this._studentService.addStudent(saveStudent);
    this.selectedStudent=null;
  }
  constructor(private _studentService:StudentService){}

  ngOnInit(): void {
    this._studentService.getStudentByPromise().then(res=>
      this.students=res
      )
  }

}
