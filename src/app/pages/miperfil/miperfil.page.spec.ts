import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiperfilPage } from './miperfil.page';
import { IonicModule } from '@ionic/angular';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { RouterModule } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('MiperfilPage', () => {
  let component: MiperfilPage;
  let fixture: ComponentFixture<MiperfilPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiperfilPage],
      imports: [IonicModule.forRoot(),RouterModule.forRoot([])],
      providers: [SQLite,NativeStorage]
    }).compileComponents();

    fixture = TestBed.createComponent(MiperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
