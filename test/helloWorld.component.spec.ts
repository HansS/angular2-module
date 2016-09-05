import {
  inject,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {expect} from 'chai';
import {HelloWorld} from './../src/helloWorld.component';
import {Angular2ModuleYoModule} from './../angular2-module-yo';

describe('hello-world component', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [Angular2ModuleYoModule]});
  });

  it('should say hello world', () => {
    const fixture: ComponentFixture<HelloWorld> = TestBed.createComponent(HelloWorld);
    fixture.detectChanges();
    expect(fixture.nativeElement.innerHTML.trim()).to.equal('Hello world from the angular2 module yo module!');
  });

});
