import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ImagenOfDay } from 'src/app/Interfaces/ImageOfDay';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  ImagenOfDay!: ImagenOfDay;
  ImagenOfDayCopy!: ImagenOfDay;

  constructor(public httpClient: HttpClient) {
    this.getData();
  }
  async getData() {
    await this.httpClient
      .get(
        environment.API_URL + 'planetary/apod?api_key=' + environment.KEY_PUBLIC
      )
      .subscribe((res: any) => {
        console.table(res);
        this.ImagenOfDay = res.map(
          ({
            date,
            explanation,
            hdurl,
            media_type,
            servie_version,
            title,
            url,
          }: any) => {
            return {
              data: date,
              explanation: explanation,
              hdurl: hdurl,
              media_type: media_type,
              servie_version: servie_version,
              title: title,
              url: url,
            };
          }
        );
        this.ImagenOfDayCopy = this.ImagenOfDay;
      });
  }
}
