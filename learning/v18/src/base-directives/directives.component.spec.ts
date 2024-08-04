import { TestBed } from '@angular/core/testing';
import { DirectivesComponent } from './directives.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DirectivesComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'directives' title`, () => {
    const fixture = TestBed.createComponent(DirectivesComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('directives');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DirectivesComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, base-directives');
  });
});
