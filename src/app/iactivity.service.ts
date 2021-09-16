
import {Injectable, OnInit } from '@angular/core';
import { Activity } from './activity';

@Injectable({
  providedIn: 'root'
})
export class IActivityService implements OnInit{


  SavedActivities: Activity [] = [{
    "id" : 1,
  "name" : "Main Bike Trails",
  "date" : new Date('06/01/2017'),
  "distance" : 16.2,
  "comments" : "Nice day, cool temps",
  "gpxData": '../../assets/gpx/1.gpx'
},
{
   "id": 2,
   "name": 'Industrial Park',
   "date": new Date('06/04/2017'),
   "gpxData": '../../assets/gpx/1.gpx',
   "distance": 1.2,
   "comments": 'Cool and windy.'
 },
 {
   "id": 3,
   "name": 'Forest Route',
   "date": new Date('06/05/2017'),
   "gpxData": '../../assets/gpx/2.gpx',
   "distance": 3.2,
   "comments": 'Evening run.'
 },
 {
   "id": 4,
   "name": 'Lake Shore',
   "date": new Date('06/08/2017'),
   "gpxData": '../../assets/gpx/4.gpx',
   "distance": 8.4,
   "comments": 'Cool and windy by the lake.'
 }
];
  slice: any;

  constructor() {

  }
  ngOnInit(): void {
  }

  getActivities(){
    return this.SavedActivities.slice(0);
  }

  getTotalActivities(allActivities:Activity[]){
    return allActivities.length;

  }

  getTotalDistance(allActivities:Activity[]){
    var totalDistance = 0;
    for (let i = 0; i < allActivities.length; i++) {
      totalDistance+=allActivities[i].distance;

    }
    return totalDistance;
  }

  getFirstDate(allActivities:Activity[]){
    var earliestDate = new Date("01/01/9999")
    for (let i = 0; i < allActivities.length; i++) {
      var currentDate =allActivities[i].date;
      if(currentDate<earliestDate){
        earliestDate=currentDate;
      }
    }
    return earliestDate;
  }


}
