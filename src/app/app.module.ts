import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component";
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentDetailsFormMDComponent } from './student-details-form-md/student-details-form-md.component';
import {ReactiveFormsModule } from "@angular/forms";
import { StudentService } from "./student.service";

@NgModule({
    declarations: [AppComponent, StudentListComponent, StudentDetailsComponent, StudentDetailsFormMDComponent],
    imports: [BrowserModule,ReactiveFormsModule],
    providers:[StudentService],
    bootstrap: [AppComponent]
})
export class AppModule{

}