import { Component, Input, OnInit } from '@angular/core';
import { ImagenOfDay } from 'src/app/Interfaces/ImageOfDay';

@Component({
  selector: 'app-image-of-day',
  templateUrl: './image-of-day.component.html',
  styleUrls: ['./image-of-day.component.css'],
})
export class ImageOfDayComponent implements OnInit {
  @Input() ImagenOfDay!: ImagenOfDay;

  constructor() {}

  ngOnInit(): void {}
}
