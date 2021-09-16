import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { IActivityService } from '../iactivity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  logOfActivities: Activity[] = [];
  totalActivities!: number;
  totalDistance!: number;
  firstDate!: Date;

  constructor(private activities:IActivityService) { }

  ngOnInit(): void {
    this.logOfActivities=this.activities.getActivities();
    this.totalActivities=this.activities.getTotalActivities(this.logOfActivities);
    this.totalDistance=this.activities.getTotalDistance(this.logOfActivities);
    this.firstDate=this.activities.getFirstDate(this.logOfActivities);

  }
}
