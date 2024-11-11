import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarperfilPage } from './editarperfil.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';


describe('EditarperfilPage', () => {
  let component: EditarperfilPage;
  let fixture: ComponentFixture<EditarperfilPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarperfilPage],
      imports: [IonicModule.forRoot(),RouterModule.forRoot([])],
      providers: [SQLite,NativeStorage]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
