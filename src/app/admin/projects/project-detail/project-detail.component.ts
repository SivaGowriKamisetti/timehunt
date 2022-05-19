import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  y: number;
  projectInfo: any;
  constructor(
    private route: ActivatedRoute,
    private projectDetails: ProjectsService
  ) {
    const id: string = route.snapshot.params.id;
    this.y = +id;
  }
  ngOnInit(): void {
    console.log('projects page ');
    this.projectInfo = this.projectDetails.projects[this.y - 1];
  }
}
