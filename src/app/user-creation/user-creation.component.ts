import { Component } from '@angular/core';

interface User {
  username: string;
  password: string;
  name: string;
  age: number | null;
  email: string;
  phone: string;
  address: string;
  jobType: 'Billing' | 'Nurse' | 'Doctor' | 'Cleaning Staff' | 'Receptionist' | 'Others';
  description: string;
  role: 'Admin' | 'Pharmasist' | 'Doctor' | 'Billing';
}

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent {
  roles = ['Admin', 'Pharmasist', 'Doctor', 'Billing'];
  jobTypes = ['Billing', 'Nurse', 'Doctor', 'Cleaning Staff', 'Receptionist', 'Others'];
  user: User = {
    username: '',
    password: '',
    name: '',
    age: null,
    email: '',
    phone: '',
    address: '',
    jobType: 'Billing',
    description: '',
    role: 'Admin'
  };
  users: User[] = [];
  successMsg = false;

  onSave() {
    if (!this.user.username || !this.user.password || !this.user.role || !this.user.name || !this.user.email || !this.user.phone || !this.user.address || !this.user.jobType) return;
    this.users.push({ ...this.user });
    this.successMsg = true;
    setTimeout(() => { this.successMsg = false; }, 2000);
    this.user = {
      username: '',
      password: '',
      name: '',
      age: null,
      email: '',
      phone: '',
      address: '',
      jobType: 'Billing',
      description: '',
      role: 'Admin'
    };
  }
}
