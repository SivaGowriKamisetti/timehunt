import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {
  faUsers,
  faEdit,
  faInfoCircle,
  faTasks,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from 'src/app/services/projects.service';
import { projectSearch } from 'src/app/admin/projects/project-detail/projectSearch.pipe';
@Component({
  selector: 'app-projects-component',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  userIcon = faUsers;
  editIcon = faEdit;
  viewIcon = faInfoCircle;
  taskIcon = faTasks;
  searchIcon = faSearch;
  searchText: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private projectsService: ProjectsService
  ) {}
  projects = this.projectsService.projects;
  projectsAll: any;
  // projects = [
  //   {
  //     id:1,
  //     status: 'Active',
  //     projectName: 'Loqbox',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg',
  //     clientName: 'venkat2',
  //     employeeCount: '44',
  //   },
  //   {
  //     id:2,
  //     status: 'Inactive',
  //     projectName: 'Equifax',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg',
  //     clientName: 'venkat2',
  //     employeeCount: '44',
  //   },
  //   {
  //     id:3,
  //     status: 'Active',
  //     projectName: 'I9 Forms',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg',
  //     clientName: 'venkat2',
  //     employeeCount: '44',
  //   },
  //   {
  //     id:4,
  //     status: 'Active',
  //     projectName: 'MMS',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg',
  //     clientName: 'venkat2',
  //     employeeCount: '44',
  //   },
  //   {
  //     id:5,
  //     status: 'Active',
  //     projectName: 'loqbox',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg',
  //     clientName: 'venkat2',
  //     employeeCount: '44',
  //   },
  //   {
  //     id:6,
  //     status: 'Active',
  //     projectName: 'Equifax',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg',
  //     clientName: 'venkat2',
  //     employeeCount: '44',
  //   },
  //   {
  //     id:7,
  //     status: 'Active',
  //     projectName: 'Equifax',
  //     image:
  //       'https://upload.wikimedia.org/wikipedia/commons/4/48/Outdoors-man-portrait_%28cropped%29.jpg',
  //     clientName: 'venkat2',
  //     employeeCount: '44',
  //   },
  // ];
  ngOnInit(): void {
    this.http.get<any>('http://localhost:8080/api/v1/admin/projects').subscribe(
      (data) => {
        console.log('working in users');
        this.projectsAll = data;
        console.log('projectsdata', data);
      },
      (error) => {
        console.log('errorinprojects', error);
      }
    );
  }
  onSelect(i: any) {
    this.router.navigate(['/projectsPage', i.id]);
  }
}
