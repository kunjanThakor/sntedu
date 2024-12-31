import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  domains = [
    { id: 4, name: 'Microsoft Expert', skills: ['Azure', 'Office 365', 'SharePoint'] },
    { id: 10, name: 'MICROSOFT DYNAMICS', skills: ['Dynamics 365', 'CRM', 'ERP'] },
    { id: 11, name: 'CAD/CAM/CAE', skills: ['SolidWorks', 'AutoCAD', 'ANSYS'] },
    { id: 12, name: 'Big Data', skills: ['Hadoop', 'Spark', 'Kafka'] },
    { id: 13, name: 'Business Analytics', skills: ['Tableau', 'Power BI', 'SQL'] },
    { id: 20, name: 'DevOps', skills: ['Jenkins', 'Docker', 'Kubernetes', 'CI/CD'] },
    { id: 21, name: 'Cyber Security', skills: ['Penetration Testing', 'Ethical Hacking', 'Network Security'] },
    { id: 22, name: 'Robotics', skills: ['Robot Operating System', 'Embedded Systems', 'Automation'] },
    { id: 30, name: 'Banking & Trading', skills: ['Financial Modeling', 'Stock Trading', 'Risk Management'] },
    { id: 56, name: 'Data Science', skills: ['Python', 'R', 'Machine Learning', 'Deep Learning'] }
  ];

  skills: string[] = [];

  constructor() { }

  ngOnInit(): void { }

  onDomainChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const domainId = Number(target.value); // Convert value to a number
    const selectedDomain = this.domains.find(domain => domain.id === domainId);
    console.log('Selected Value:', target);
    console.log(selectedDomain);

    // Update skills with a check
    if (selectedDomain) {
      this.skills = [...selectedDomain.skills]; // Create a new array to trigger change detection
    } else {
      this.skills = [];
    }
  }
}
