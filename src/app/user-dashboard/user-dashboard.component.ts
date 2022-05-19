import { Component, OnInit } from '@angular/core';
import {
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  MonthAgendaService,
  View,
  EventSettingsModel,
} from '@syncfusion/ej2-angular-schedule';
import { L10n } from '@syncfusion/ej2-base';
L10n.load({
  'en-US': {
    schedule: {
      saveButton: 'Update',
      cancelButton: 'Close',
      deleteButton: 'Remove',
      newEvent: 'UPDATE YOUR TASK',
      editEvent: 'UPDATE YOUR TASK',
      deleteEvent: 'Delete Task',
      addtitle: 'Add Task',
      noevents: 'No tasks',
    },
  },
});
@Component({
  selector: 'app-user-dashboard',
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
  ],
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public setView: View = 'Week';
  public setDate: Date = new Date(2022, 3, 5);
  public eventObject: EventSettingsModel = {
    dataSource: [
      {
        Subject: 'Tasks',
      },
    ],
  };

  public setViews: View[] = ['Week', 'WorkWeek', 'Month', 'Agenda'];
  public dateParser(data: Date) {
    return new Date(data);
  }
}
