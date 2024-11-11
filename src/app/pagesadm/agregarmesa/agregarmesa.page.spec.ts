import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarmesaPage } from './agregarmesa.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('AgregarmesaPage', () => {
  let component: AgregarmesaPage;
  let fixture: ComponentFixture<AgregarmesaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarmesaPage],
      imports: [IonicModule.forRoot(),RouterModule.forRoot([])],
      providers: [SQLite]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarmesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
