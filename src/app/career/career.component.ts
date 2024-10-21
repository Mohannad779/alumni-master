import { Component, OnInit } from '@angular/core';
import { JobService } from './job.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {
  jobs: any[] = [];
  filteredJobs: any[] = [];
  searchTerm: string = '';

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(): void {
    this.jobService.getJobs().subscribe((data: any) => {
      this.jobs = data;
      this.filteredJobs = data; // Initially, no filters
    });
  }

  filterJobs(): void {
    this.filteredJobs = this.jobs.filter(job => 
      job.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
      job.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
