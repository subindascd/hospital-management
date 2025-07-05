import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PatientRegistrationComponent } from './patients/patient-registration/patient-registration.component';
import { DoctorsRegistrationComponent } from './doctors/doctors-registration/doctors-registration.component';
import { AppoinmentComponent } from './appointments/appoinment/appoinment.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { TestsComponent } from './tests/tests.component';
import { PrintResultComponent } from './tests/print-result.component';
const routes: Routes = [
  { path: '', redirectTo: '/patients', pathMatch: 'full' },
  { path: 'patients', component: PatientRegistrationComponent },
  { path: 'doctors', component: DoctorsRegistrationComponent },
  { path: 'appointments', component: AppoinmentComponent },
  { path: 'users', component: UserCreationComponent },
  { path: 'prescriptions', component: PrescriptionComponent },
  { path: 'pharmacy', component: PharmacyComponent },
  { path: 'insurance', component: InsuranceComponent },
  { path: 'tests', component: TestsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PatientRegistrationComponent,
    DoctorsRegistrationComponent,
    AppoinmentComponent,
    UserCreationComponent,
    PrescriptionComponent,
    PharmacyComponent,
    InsuranceComponent,
    TestsComponent,
    PrintResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }