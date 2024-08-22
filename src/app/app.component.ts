import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  private pagina = '/home';

  constructor(private router:Router, private menu:MenuController) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.urlAfterRedirects === this.pagina) {
          this.menu.enable(true);
        } else {
          this.menu.enable(false);
        }
      }
    });
  }

  cerrarMenu() {
    this.menu.close();
  }
}