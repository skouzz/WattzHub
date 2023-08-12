import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('brands') brands!: ElementRef;
  @ViewChild('about') about!: ElementRef;
  @ViewChild('contact') contact!: ElementRef;

  constructor(private router: Router) {}

  scrollToComponent(component: string) {
    let targetComponent;
    switch (component) {
      case 'brands':
        targetComponent = this.brands;
        break;
      case 'about':
        targetComponent = this.about;
        break;
      case 'contact':
        targetComponent = this.contact;
        break;
      default:
        return;
    }
    targetComponent.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  
}
