import { Component } from '@angular/core';

interface Doctor {
  doctorName: string;
  doctorSpecialization: string;
  doctorEmail: string;
  doctorPhone: string;
  doctorGender: string;
}
@Component({
  selector: 'app-doctors-registration',
  templateUrl: './doctors-registration.component.html',
  styleUrls: ['./doctors-registration.component.css']
})
export class DoctorsRegistrationComponent {
formFields = [
    { label: 'Full Name', type: 'text', id: 'doctorName', required: true },
    { label: 'Specialization', type: 'text', id: 'doctorSpecialization', required: true },
    { label: 'Email', type: 'email', id: 'doctorEmail', required: true, pattern: '[^@\\s]+@[^@\\s]+\\.[^@\\s]+' },
    { label: 'Phone Number', type: 'tel', id: 'doctorPhone', required: true, pattern: '[0-9]{10,}' },
    { label: 'Gender', type: 'select', id: 'doctorGender', required: true, options: ['', 'Male', 'Female', 'Other'] }
  ];

  doctor: Doctor = {
    doctorName: '',
    doctorSpecialization: '',
    doctorEmail: '',
    doctorPhone: '',
    doctorGender: ''
  };

  savedDoctors: Doctor[] = [];
  successMsg = false;
  onSave() {
    // Validate all required fields
    let valid = true;
    for (const field of this.formFields) {
      if (field.required && !this.doctor[field.id as keyof Doctor]) {
        valid = false;
        break;
      }
    }
    if (!valid) return;

    // Save to memory
    this.savedDoctors.push({ ...this.doctor });
    this.successMsg = true;
    setTimeout(() => { this.successMsg = false; }, 2000);
    // Reset the form
    this.doctor = {
      doctorName: '',
      doctorSpecialization: '',
      doctorEmail: '',
      doctorPhone: '',
      doctorGender: ''
    };
  }

  public getDoctorFieldValue(d: any, field: any) {
    return d[field.id];
  }
}
