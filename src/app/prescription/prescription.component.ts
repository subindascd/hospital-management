import { Component } from '@angular/core';

interface Medicine {
  name: string;
  selected: boolean;
}

interface LabTest {
  name: string;
  result?: string;
  imageUrl?: string;
}
interface Prescription {
  patientId: string;
  patientName: string;
  visitType: 'New Visit' | 'Revisit';
  lastVisitDate: string;
  lastVisitDescription: string;
  medicines: Medicine[];
  labTests: LabTest[];
  xray: string;
  scan: string;
  otherTest: string;
}

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent {
  showTestResults = false;
  prescription: Prescription = {
    patientId: '',
    patientName: '',
    visitType: 'New Visit',
    lastVisitDate: '',
    lastVisitDescription: '',
    medicines: [
      { name: '', selected: false }
    ],
    labTests: [ { name: '' } ],
    xray: '',
    scan: '',
    otherTest: ''
  };
  prescriptions: Prescription[] = [];
  successMsg = false;

  addMedicine() {
    this.prescription.medicines.push({ name: '', selected: false });
  }

  removeMedicine(index: number) {
    if (this.prescription.medicines.length > 1) {
      this.prescription.medicines.splice(index, 1);
    }
  }

  addLabTest() {
    this.prescription.labTests.push({ name: '' });
  }

  removeLabTest(index: number) {
    if (this.prescription.labTests.length > 1) {
      this.prescription.labTests.splice(index, 1);
    }
  }

  onSave() {
    if (!this.prescription.patientId || !this.prescription.patientName || !this.prescription.visitType) return;
    // Only save medicines and lab tests with a name
    const medicinesToSave = this.prescription.medicines.filter(m => m.name.trim() !== '');
    const labTestsToSave = this.prescription.labTests.filter(l => l.name.trim() !== '');
    this.prescriptions.push({ ...this.prescription, medicines: medicinesToSave, labTests: labTestsToSave });
    this.successMsg = true;
    setTimeout(() => { this.successMsg = false; }, 2000);
    this.prescription = {
      patientId: '',
      patientName: '',
      visitType: 'New Visit',
      lastVisitDate: '',
      lastVisitDescription: '',
      medicines: [
        { name: '', selected: false }
      ],
      labTests: [ { name: '' } ],
      xray: '',
      scan: '',
      otherTest: ''
    };
  }
}
