import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SplashScreen } from '@capacitor/splash-screen';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {


  constructor() {
    this.MostrarSplash();
  }

  ngOnInit() {
  }

  async MostrarSplash(){
    await SplashScreen.show({
      autoHide: true,
      showDuration: 3000
    });
    
  }
}