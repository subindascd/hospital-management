import { Component } from '@angular/core';

interface Patient {
  patientName: string;
  patientAge: number;
  patientGender: string;
  patientContact: string;
}

interface Doctor {
  doctorName: string;
  doctorSpecialization: string;
  doctorEmail: string;
  doctorPhone: string;
  doctorGender: string;
}

interface Appointment {
  doctor: string;
  patient: string;
  date: string;
  time: string;
  reason: string;
}

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.css']
})
export class AppoinmentComponent {
  registeredDoctors: Doctor[] = [
    { doctorName: 'Dr. Smith', doctorSpecialization: 'Cardiology', doctorEmail: 'smith@hospital.com', doctorPhone: '9876543210', doctorGender: 'Male' },
    { doctorName: 'Dr. Jane', doctorSpecialization: 'Dermatology', doctorEmail: 'jane@hospital.com', doctorPhone: '9898989898', doctorGender: 'Female' }
  ];
  registeredPatients: Patient[] = [
    { patientName: 'John Doe', patientAge: 40, patientGender: 'Male', patientContact: '9999999999' },
    { patientName: 'Mary Jane', patientAge: 28, patientGender: 'Female', patientContact: '8888888888' },
    { patientName: 'Alex Kumar', patientAge: 33, patientGender: 'Male', patientContact: '7777777777' }
  ];

  appointment: Appointment = {
    doctor: '',
    patient: '',
    date: '',
    time: '',
    reason: ''
  };

  appointments: Appointment[] = [];
  successMsg = false;

  // Popup state for patient search
  patientSearchTerm: string = '';
  patientSearchResults: Patient[] = [];
  showPatientSearchPopup = false;

  openPatientSearchPopup() {
    this.patientSearchTerm = '';
    this.patientSearchResults = [];
    this.showPatientSearchPopup = true;
  }

  closePatientSearchPopup() {
    this.showPatientSearchPopup = false;
  }

  onPatientSearch() {
    const term = this.patientSearchTerm.trim().toLowerCase();
    if (!term) {
      this.patientSearchResults = [];
      return;
    }
    this.patientSearchResults = this.registeredPatients.filter(
      p =>
        p.patientName.toLowerCase().includes(term) ||
        p.patientContact.includes(term)
    );
  }

  selectPatient(p: Patient) {
    this.appointment.patient = p.patientName;
    this.showPatientSearchPopup = false;
    this.patientSearchTerm = p.patientName;
    this.patientSearchResults = [];
  }

  onSave() {
    if (!this.appointment.doctor || !this.appointment.patient || !this.appointment.date || !this.appointment.time) return;
    this.appointments.push({ ...this.appointment });
    this.successMsg = true;
    setTimeout(() => { this.successMsg = false; }, 2000);
    this.appointment = {
      doctor: '',
      patient: '',
      date: '',
      time: '',
      reason: ''
    };
    this.patientSearchTerm = '';
  }
}