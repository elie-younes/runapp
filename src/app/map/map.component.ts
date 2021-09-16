import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  activity:any;
  activityName!: string;
  activityComments!: string;
  activityDate!: Date;
  activityDistance!: number;
  gpx: any;

  constructor(public mapService: MapService, private route:ActivatedRoute) { }


  ngOnInit() {

    this.activity = this.mapService.getActivity(
      +this.route.snapshot.params['id']);

      this.mapService.plotActivity(+this.route.snapshot.params['id']);
      this.activityName = this.activity.name;
      this.activityComments = this.activity.comments;
      this.activityDistance = this.activity.distance;
      this.activityDate = this.activity.date;
      this.gpx = this.activity.gpxData;
  }


}
