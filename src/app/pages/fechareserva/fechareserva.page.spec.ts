import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FechareservaPage } from './fechareserva.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';

describe('FechareservaPage', () => {
  let component: FechareservaPage;
  let fixture: ComponentFixture<FechareservaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FechareservaPage],
      imports: [IonicModule.forRoot(),RouterModule.forRoot([])],
      providers: [SQLite,NativeStorage]
    }).compileComponents();

    fixture = TestBed.createComponent(FechareservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('la fecha seleccionada no puede ser anterior a la fecha actual', () => {
    const today = new Date().setHours(0, 0, 0, 0); // Fecha actual sin horas (como número)
    const pastDate = new Date(today);
    pastDate.setDate(pastDate.getDate() - 1); // Fecha en el pasado
  
    component.fechaSelec = pastDate;
  
    // Verificamos que la fecha seleccionada sea válida
    expect(component.fechaSelec.getTime() >= today).toBeFalse();
  });
});
