import { Component } from '@angular/core';

interface Prescription {
  patientId: string;
  patientName: string;
  doctorName: string;
  medicinePrescribed: string;
}

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent {
  prescriptions: Prescription[] = [
    // Example data; in a real app, fetch from backend or service
    { patientId: 'P001', patientName: 'John Doe', doctorName: 'Dr. Smith', medicinePrescribed: 'Paracetamol 500mg' },
    { patientId: 'P002', patientName: 'Mary Jane', doctorName: 'Dr. Jane', medicinePrescribed: 'Cetirizine 10mg' }
  ];
  searchPatientId: string = '';
  foundPrescription: Prescription | null = null;
  notFound = false;

  onSearch() {
    this.foundPrescription = this.prescriptions.find(p => p.patientId === this.searchPatientId.trim()) || null;
    this.notFound = !this.foundPrescription;
  }
}
