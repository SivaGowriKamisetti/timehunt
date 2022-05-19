import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  faUsers,
  faCaretDown,
  faUserTie,
  faUsersCog,
  faTasks,
  faArrowRight,
  faUserCircle,
  faComment,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { map } from 'rxjs/operators';
import { projectsData } from 'src/app/models/projectsData.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private http: HttpClient) {}
  usersIcon = faUsers;
  clientsIcon = faUserTie;
  deptIcon = faUsersCog;
  projectIcon = faTasks;
  arrowRightIcon = faArrowRight;
  userCircle = faUserCircle;
  commentIcon = faComment;
  phoneIcon = faPhone;
  loadprojectsData: projectsData[] = [];

  adminData = {
    countsData: {
      employeeCount: '40',

      clientCount: '34',

      departmentCount: '4',

      projectsCount: '7',
    },
  };
  ngOnInit(): void {
    this.fetchPosts().subscribe((project) => {
      // console.log('retrieved or not', project);
      this.loadprojectsData = project;
      //console.log('project data :', this.loadprojectsData);
    });
    // console.log('hiii', this.fetchPosts());
    // this.fetchPosts();
  }
  // onGetProjects() {
  //   return this.http.get<any>(
  //     'https://authapp-ba96e-default-rtdb.firebaseio.com/projectsData.json'
  //   );
  // }
  // fetchPosts() {
  //   return this.http
  //     .get<any>(
  //       'https://authapp-ba96e-default-rtdb.firebaseio.com/projectsData'
  //     )
  //     .pipe(
  //       map((responseData) => {
  //         console.log('hi', responseData);
  //         const postsArray: projectsData[] = [];
  //         for (const key in responseData) {
  //           if (responseData.hasOwnProperty(key)) {
  //             postsArray.push({ ...responseData[key], id: key });
  //           }
  //         }
  //         return postsArray;
  //       })
  //     );
  // }

  //for posts fetching
  fetchPosts() {
    return this.http
      .get<any>(
        'https://authapp-ba96e-default-rtdb.firebaseio.com/projectsData.json'
      )
      .pipe(
        map((responseData) => {
          // console.log('response data of dashboard', responseData);

          const postsArray: projectsData[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push(responseData[key]);
            }
            // postsArray.push(responseData[key]);

            // console.log('updating array ', postsArray);
          }
          return postsArray;
        })
      );
  }
}
