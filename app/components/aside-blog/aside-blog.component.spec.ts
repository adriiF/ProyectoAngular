import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideBlogComponent } from './aside-blog.component';

describe('AsideBlogComponent', () => {
  let component: AsideBlogComponent;
  let fixture: ComponentFixture<AsideBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsideBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
