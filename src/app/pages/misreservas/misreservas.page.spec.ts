import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MisreservasPage } from './misreservas.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

describe('MisreservasPage', () => {
  let component: MisreservasPage;
  let fixture: ComponentFixture<MisreservasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MisreservasPage],
      imports: [IonicModule.forRoot(),RouterModule.forRoot([])],
      providers: [SQLite,NativeStorage]
    }).compileComponents();

    fixture = TestBed.createComponent(MisreservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
