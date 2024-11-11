import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactoPage } from './contacto.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

describe('ContactoPage', () => {
  let component: ContactoPage;
  let fixture: ComponentFixture<ContactoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactoPage],
      imports: [IonicModule.forRoot(),FormsModule],
      providers: [SQLite,NativeStorage]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
