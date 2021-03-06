import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'


import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { DataService } from './data.service';
import { CreateStudentResourceComponent } from './create-student-resource/create-student-resource.component';
import { ViewResourcesComponent } from './view-resources/view-resources.component';
import { FormsModule} from '@angular/forms';
import { AddStudentComponent } from './add-student/add-student.component';
import { ViewStudentsComponent } from './view-students/view-students.component';
import { ReadResourceComponent } from './read-resource/read-resource.component';
import { ReadResourceChildComponent } from './read-resource-child/read-resource-child.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewResourcesComponent,
    CreateStudentResourceComponent,
    AddStudentComponent,
    ViewStudentsComponent
,
    ReadResourceComponent,
    ReadResourceChildComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'resources',
        component: ViewResourcesComponent
      },
      {
        path: 'resource',
        component: CreateStudentResourceComponent
      },
      {
        path: 'read',
        component: ReadResourceComponent
      },
      {
        path: 'students',
        component: ViewStudentsComponent
      },
      {
        path: 'student',
        component: AddStudentComponent
      },
      {
        path: '',
        redirectTo: '/resource',
        pathMatch: 'full'
      }
    ]),
    // TODO: make the list of resource the default route

    // TODO: add a route for adding resources
    // TODO: add a route for viewing all resources
    // TODO: add a route for viewing the content of a resource
    // TODO: add a route for creating a student
    AngularFireModule.initializeApp(environment.firebase, 'Alc_web'),
    AngularFireModule,
    AngularFireDatabaseModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
