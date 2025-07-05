import { Component } from '@angular/core';

interface Insurance {
  patientId: string;
  patientName: string;
  insuranceProvider: string;
  policyNumber: string;
  validFrom: string;
  validTo: string;
  coverageDetails: string;
}

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent {
  insurance: Insurance = {
    patientId: '',
    patientName: '',
    insuranceProvider: '',
    policyNumber: '',
    validFrom: '',
    validTo: '',
    coverageDetails: ''
  };
  insurances: Insurance[] = [];
  successMsg = false;

  onSave() {
    if (!this.insurance.patientId || !this.insurance.patientName || !this.insurance.insuranceProvider || !this.insurance.policyNumber) return;
    this.insurances.push({ ...this.insurance });
    this.successMsg = true;
    setTimeout(() => { this.successMsg = false; }, 2000);
    this.insurance = {
      patientId: '',
      patientName: '',
      insuranceProvider: '',
      policyNumber: '',
      validFrom: '',
      validTo: '',
      coverageDetails: ''
    };
  }
}
