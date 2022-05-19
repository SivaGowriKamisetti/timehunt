import { Component, OnInit } from '@angular/core';
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent implements OnInit {
  constructor() {}
  navToggle = faBars;
  dropdownToggle = faCaretDown;
  ngOnInit(): void {}
}
