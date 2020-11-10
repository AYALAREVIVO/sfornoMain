import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatePage } from './date.page';

describe('DatePage', () => {
  let component: DatePage;
  let fixture: ComponentFixture<DatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
