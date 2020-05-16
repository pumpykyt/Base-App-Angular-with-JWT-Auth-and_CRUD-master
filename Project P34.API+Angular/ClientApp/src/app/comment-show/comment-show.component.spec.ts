/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommentShowComponent } from './comment-show.component';

describe('CommentShowComponent', () => {
  let component: CommentShowComponent;
  let fixture: ComponentFixture<CommentShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
