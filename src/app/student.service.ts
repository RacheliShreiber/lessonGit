import { Injectable } from "@angular/core";
import { Student } from "./student.model";
import { Absence } from "./absence.model";

@Injectable()
export class StudentService{
    STUDENTS:Student[]=[{id:1,name:"student1",address:"rabi akiva",phone:1234,active:true,avgMark:90.9},
{id:2,name:"student2",address:"tzfat",phone:4567,active:false,avgMark:88},
{id:3,name:"student3",address:"ravad",phone:7891,active:true,avgMark:99.9}];
    getStudents():Student[]{
        return this.STUDENTS;
    }

    getStudentByPromise():Promise<Student[]>{
        return new Promise((res,rej)=>{
            setTimeout(()=>
              res(this.STUDENTS)
            ,3000)
        });
    }

    deleteStudent(student:Student){
        let index=this.STUDENTS.indexOf(student)
        this.STUDENTS.splice(index,1);
    }

    addStudent(saveStudent:Student){
        if(saveStudent.id==0){
            saveStudent.id=this.STUDENTS.length+1;
            this.STUDENTS.push(saveStudent);
          }
          else{
            let studentUpdate=this.STUDENTS.filter(s=>s.id==saveStudent.id)[0];
            let index=this.STUDENTS.indexOf(studentUpdate);
            this.STUDENTS[index]=saveStudent;
          }
    }

    totalAbsenceDays(id):number{
       let num=0;
       let s= this.STUDENTS.filter(e=>e.id==id)[0];
       //let x=new Student("hjkl");
       s.absence.forEach(element => {
        num+=element.daysAbsence;
       });
       return num;
    }
}