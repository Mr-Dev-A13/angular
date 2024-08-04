import { TestBed } from '@angular/core/testing';
import { C_in_dComponent } from './c_in_d.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C_in_dComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(C_in_dComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'components_in_detail' title`, () => {
    const fixture = TestBed.createComponent(C_in_dComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('components_in_detail');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(C_in_dComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, components_in_detail');
  });
});
