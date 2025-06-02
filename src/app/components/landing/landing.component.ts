import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  // Hero section data
  heroHeading = 'High Converting Heading';
  heroSubheading = 'Comes Here';

  // Features section data
  features = [
    { title: 'Feature 1', description: 'Feature description goes here' },
    { title: 'Feature 2', description: 'Feature description goes here' },
    { title: 'Feature 3', description: 'Feature description goes here' },
    { title: 'Feature 4', description: 'Feature description goes here' }
  ];

  // How it works steps
  steps = [
    { title: 'Step 1', description: 'Step description goes here' },
    { title: 'Step 2', description: 'Step description goes here' },
    { title: 'Step 3', description: 'Step description goes here' }
  ];

  // Why choose us items
  whyChooseUs = [
    { title: 'Title', description: 'Description goes here' },
    { title: 'Title', description: 'Description goes here' },
    { title: 'Title', description: 'Description goes here' },
    { title: 'Title', description: 'Description goes here' }
  ];

  // Integration logos
  integrationLogos = [
    { name: 'Logo 1', image: 'path-to-image' },
    { name: 'Logo 2', image: 'path-to-image' },
    { name: 'Logo 3', image: 'path-to-image' },
    { name: 'Logo 4', image: 'path-to-image' },
    { name: 'Logo 5', image: 'path-to-image' }
  ];

  // Reviews
  reviews = [
    { name: 'Name', rating: 5, text: 'Review text goes here' },
    { name: 'Name', rating: 5, text: 'Review text goes here' },
    { name: 'Name', rating: 5, text: 'Review text goes here' },
    { name: 'Name', rating: 5, text: 'Review text goes here' }
  ];

  // Pricing plans
  pricingPlans = [
    {
      name: 'Free Trial For 7 Days',
      price: '0',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      buttonText: 'Subscribe Now'
    },
    {
      name: 'Pro',
      price: '99',
      period: '/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
      buttonText: 'Subscribe Now',
      highlighted: true
    },
    {
      name: 'Pro+',
      price: '199',
      period: '/month',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'],
      buttonText: 'Subscribe Now'
    }
  ];

  // FAQ items
  faqItems = [
    { question: 'Question 1', answer: 'Answer goes here' },
    { question: 'Question 2', answer: 'Answer goes here' },
    { question: 'Question 3', answer: 'Answer goes here' },
    { question: 'Question 4', answer: 'Answer goes here' }
  ];
} 