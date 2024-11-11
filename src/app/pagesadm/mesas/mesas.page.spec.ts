import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MesasPage } from './mesas.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('MesasPage', () => {
  let component: MesasPage;
  let fixture: ComponentFixture<MesasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MesasPage],
      imports: [IonicModule.forRoot(),RouterModule.forRoot([])],
      providers: [SQLite]
    }).compileComponents();

    fixture = TestBed.createComponent(MesasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
