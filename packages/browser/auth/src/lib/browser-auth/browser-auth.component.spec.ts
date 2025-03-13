import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAuthComponent } from './browser-auth.component';

describe('BrowserAuthComponent', () => {
  let component: BrowserAuthComponent;
  let fixture: ComponentFixture<BrowserAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrowserAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
