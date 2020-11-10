import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalisPage } from './detalis.page';

describe('DetalisPage', () => {
  let component: DetalisPage;
  let fixture: ComponentFixture<DetalisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
