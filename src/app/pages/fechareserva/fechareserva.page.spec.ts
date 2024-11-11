import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FechareservaPage } from './fechareserva.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

describe('FechareservaPage', () => {
  let component: FechareservaPage;
  let fixture: ComponentFixture<FechareservaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FechareservaPage],
      imports: [IonicModule.forRoot(),RouterModule.forRoot([])],
      providers: [SQLite,NativeStorage]
    }).compileComponents();

    fixture = TestBed.createComponent(FechareservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
