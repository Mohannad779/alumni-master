import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluDirectoryComponent } from './alu-directory.component';

describe('AluDirectoryComponent', () => {
  let component: AluDirectoryComponent;
  let fixture: ComponentFixture<AluDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AluDirectoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AluDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
