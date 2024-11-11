import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarmesaPage } from './editarmesa.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('EditarmesaPage', () => {
  let component: EditarmesaPage;
  let fixture: ComponentFixture<EditarmesaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarmesaPage],
      imports: [IonicModule.forRoot(),RouterModule.forRoot([])],
      providers: [SQLite]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarmesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
