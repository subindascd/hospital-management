import { Component } from '@angular/core';
interface Patient {
  patientName: string;
  patientAge: number;
  patientGender: string;
  patientContact: string;
  id?: number;
}
@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent {
 formFields = [
    { label: 'Patient ID', type: 'number', id: 'id', required: true, min: 1 },
    { label: 'Full Name', type: 'text', id: 'patientName', required: true },
    { label: 'Age', type: 'number', id: 'patientAge', required: true, min: 0 },
    { label: 'Gender', type: 'select', id: 'patientGender', required: true, options: ['', 'Male', 'Female', 'Other'] },
    { label: 'Contact Number', type: 'tel', id: 'patientContact', required: true, pattern: '[0-9]{10,}' }
  ];

  patient: Patient = {
    id: undefined,
    patientName: '',
    patientAge: 0,
    patientGender: '',
    patientContact: ''
  };

  savedPatients: Patient[] = [];
  successMsg = false;
  onSave() {
    // Validate all required fields
    let valid = true;
    for (const field of this.formFields) {
      const value = this.patient[field.id as keyof Patient];
      if (field.required) {
        if (field.type === 'number') {
          if (value === null || value === undefined || value === '') {
            valid = false;
            break;
          }
        } else {
          if (!value) {
            valid = false;
            break;
          }
        }
      }
    }
    if (!valid) return;

    // Save to memory
    this.savedPatients.push({ ...this.patient });
    this.successMsg = true;
    setTimeout(() => { this.successMsg = false; }, 2000);
    // Reset the form
    this.patient = {
      patientName: '',
      patientAge: 0,
      patientGender: '',
      patientContact: '',
      id: undefined
    };
  }

  public getPatientFieldValue(p: Patient, field: any) {
    return p[field.id as keyof Patient];
  }
}
