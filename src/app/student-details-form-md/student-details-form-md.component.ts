import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LearnYear, MASLUL, maslul, Student } from '../student.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Absence } from '../absence.model';

@Component({
  selector: 'app-student-details-form-md',
  templateUrl: './student-details-form-md.component.html',
  styleUrls: ['./student-details-form-md.component.scss']
})
export class StudentDetailsFormMDComponent implements OnInit{
  studentForm:FormGroup=new FormGroup({});
  maslul:maslul[]=MASLUL;
  yearType:LearnYear;
  dayAbsence:number;
  dateAbsence:Date;
 

  private _student:Student;

  public get student():Student{
    return this._student ;
  }
   
  @Input()
  public set student(value:Student|undefined){
    this._student=value;
    this.studentForm=new FormGroup({
      "id":new FormControl(this.student?.id),
      "name":new FormControl(this.student?.name,[Validators.required,Validators.maxLength(20)]),
      "address":new FormControl(this.student?.address,[Validators.required,Validators.minLength(4)]),
      "maslul":new FormControl(this.student?.maslul,Validators.required),
      "yearl":new FormControl(this.student?.yearl)
    });
  }
  @Output()
  onSaveStudent:EventEmitter<Student>=new EventEmitter();
  updateDate(event:any){
    this.dateAbsence=event.target.value;
  }
  updateA(event:any){
    this.dayAbsence=event.target.value;
  }
  saveNewStudent(){
    this.student=this.studentForm.value;
    
    if(this.dateAbsence!=null&&this.dayAbsence!=null){
    if(this.student.absence==null)
       this.student.absence=[];
    // this.student.absence.push(new Absence(this.dateAbsence,this.dayAbsence));
    this.student.absence.push({startAbsence:this.dateAbsence,daysAbsence:this.dayAbsence});
    }
    // this.student.name=this.studentForm?.controls["name"].value;
    // this.student.address=this.studentForm?.controls["address"].value;
    this.onSaveStudent.emit(this.student);
     
  }
  constructor(){}

  ngOnInit(): void {
    
  }
}
