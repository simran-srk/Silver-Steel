import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { log } from 'console';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ 
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    CommonModule,
    MatCardModule,
    RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentIndex = 0;
  slides = [
    'assets/image1.jpg',
    'assets/image2.jpg',
    'assets/image3.jpg'
  ];

  prevSlide() {
    this.currentIndex = (this.currentIndex === 0) ? this.slides.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex === this.slides.length - 1) ? 0 : this.currentIndex + 1;
  }
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  animatedText: string = ''; // Initialize animated text

  ngOnInit(): void {
    this.animateText('Our Work Speaks Volumes'); // Start animation on component initialization
  }

  animateText(text: string): void {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < text.length) {
        this.animatedText += text[index];
        index++;
      } else {
        clearInterval(intervalId); // Stop the interval once animation completes
      }
    }, 100); // Adjust speed of animation here (in milliseconds)
  }

  clicked(){
    console.log("---------");
    
  }
}
