import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservasPage } from './reservas.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('ReservasPage', () => {
  let component: ReservasPage;
  let fixture: ComponentFixture<ReservasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservasPage],
      imports: [IonicModule.forRoot(),RouterModule.forRoot([])],
      providers: [SQLite]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
