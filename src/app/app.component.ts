import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Dinamic Title';
  img = 'https://c7.hotpng.com/preview/933/638/374/react-components-javascript-redux-mobile-app-react-js.jpg';

  constructor() {
    setTimeout(() => {
      console.log('Over');
      this.img = 'https://im0-tub-by.yandex.net/i?id=ccad49d882765a82d302577e20e613c9&n=13';
    }, 5000);
  }
}
