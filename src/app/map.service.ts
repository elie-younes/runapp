import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IActivityService } from './iactivity.service';


var apiToken = environment.MAPBOX_API_KEY;
declare var omnivore: any;
declare let L:any;
const defaultCoords: number[] = [40, -80]
const defaultZoom: number = 8

@Injectable({
  providedIn:'root'
})
export class MapService {

  constructor(private activityser: IActivityService) { }

  getActivity(id:number){

    return  this.activityser.SavedActivities.slice(0).find((run: { id: number; })=>run.id==id);
 }

 plotActivity(id: number){
  var myStyle = {
    "color": "#3949AB",
    "weight": 5,
    "opacity": 0.95
  };

  var map = L.map('map').setView(defaultCoords, defaultZoom);

  map.maxZoom = 100;

  L.tileLayer('https://api.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.satellite',
    accessToken: apiToken
  }).addTo(map);

  var customLayer = L.geoJson(null, {
    style: myStyle
  });

  var gpxLayer = omnivore.gpx(this.activityser.SavedActivities.slice(0).find((run: { id: number; }) => run.id == id)!.gpxData, null, customLayer)
  .on('ready', function() {
    map.fitBounds(gpxLayer.getBounds());
  }).addTo(map);
}

}
