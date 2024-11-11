import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariosPage } from './usuarios.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

describe('UsuariosPage', () => {
  let component: UsuariosPage;
  let fixture: ComponentFixture<UsuariosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuariosPage],
      imports: [IonicModule.forRoot(),RouterModule.forRoot([])],
      providers: [SQLite, NativeStorage]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
