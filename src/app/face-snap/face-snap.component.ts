import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
title!: string;
description!:string;
createdDate!:Date;
snaps!:number;

ngOnInit(): void {
    this.title = 'Marwa FRAWES';
    this.description = "La vie est belle Marwa FRAWES et oui elle appartient qu'à toi!!!";
    this.createdDate= new Date ();
    this.snaps = 6;  

}
}
