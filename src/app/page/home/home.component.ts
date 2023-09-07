import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { MapTypeStyle, getMapOptionsMap } from 'src/app/core/models/style-maps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('GMap', { static: false }) Gmap: GoogleMap;
  options = getMapOptionsMap(new google.maps.LatLng({
    lat: 22.043330,
    lng: -98.336354,
  }));
  styleMap: MapTypeStyle = new MapTypeStyle();
  constructor() {
   }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.Gmap.mapClick.subscribe(event => {
      alert();
      console.log(event);
    });
  }



  changeStyleTypeMap(type: string) {
    this.Gmap.googleMap.setOptions({
      styles: this.styleMap.style[type]
    });
  }

}


