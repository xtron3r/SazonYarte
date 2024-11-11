import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactoLoginPage } from './contacto-login.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { FormsModule } from '@angular/forms';

describe('ContactoLoginPage', () => {
  let component: ContactoLoginPage;
  let fixture: ComponentFixture<ContactoLoginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactoLoginPage],
      imports: [IonicModule.forRoot(),RouterModule.forRoot([]),FormsModule],
      providers: [SQLite,NativeStorage]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactoLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
