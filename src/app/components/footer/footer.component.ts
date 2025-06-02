import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  footerLinks = [
    { label: 'Privacy Policy', link: '/privacy' },
    { label: 'Terms of Service', link: '/terms' },
    { label: 'Contact', link: '/contact' }
  ];

  socialLinks = [
    { icon: 'github', link: 'https://github.com' },
    { icon: 'twitter', link: 'https://twitter.com' },
    { icon: 'linkedin', link: 'https://linkedin.com' }
  ];
} 