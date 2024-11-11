import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactocliPage } from './contactocli.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('ContactocliPage', () => {
  let component: ContactocliPage;
  let fixture: ComponentFixture<ContactocliPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactocliPage],
      imports: [IonicModule.forRoot(),RouterModule.forRoot([])],
      providers: [SQLite]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactocliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
