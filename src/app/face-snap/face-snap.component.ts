import { Component, OnInit, Input } from '@angular/core';
import { faceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
@Input() faceSnap!:faceSnap; 


title!: string;
description!:string;
createdDate!:Date;
snaps!:number;
imageUrl! : string;
buttonText! : string;

ngOnInit(): void {
    this.title = 'Marwa FRAWES';
    this.description = "La vie est belle Marwa FRAWES et oui elle appartient qu'à toi!!!";
    this.createdDate= new Date ();
    this.snaps = 6;  
    this.imageUrl='https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    this.buttonText='oh snap !'
   
}

onSnap() {
  if (this.buttonText === 'Oh Snap!') {
    this.snaps++;
    this.buttonText = 'Oops, unSnap!';
  } else {
    this.snaps--;
    this.buttonText = 'Oh Snap!';
  }
}

}
