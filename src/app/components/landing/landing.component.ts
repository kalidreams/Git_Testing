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
  heroSubheading = '';

  // Features section data
  features = [
    { 
      title: 'Real-Time Tracking', 
      description: 'Track your shipments in real-time with GPS-enabled fleet monitoring and instant status updates.'
    },
    { 
      title: 'Route Optimization', 
      description: 'AI-powered route planning that saves fuel and time while ensuring on-time deliveries.'
    },
    { 
      title: 'Digital Documentation', 
      description: 'Paperless freight management with electronic BOLs, PODs, and automated customs documentation.'
    },
    { 
      title: 'Fleet Analytics', 
      description: 'Comprehensive analytics dashboard for fleet performance, fuel efficiency, and maintenance scheduling.'
    }
  ];

  // Stats data
  stats = [
    { number: '99.9', label: 'Delivery Accuracy' },
    { number: '95', label: 'Fuel Savings' },
    { number: '98', label: 'Customer Satisfaction' },
    { number: '92', label: 'On-Time Delivery' }
  ];

  // How it works steps
  steps = [
    { 
      title: 'Book Your Shipment', 
      description: 'Enter your pickup and delivery details through our easy-to-use platform. Get instant quotes and choose the service level that fits your needs.'
    },
    { 
      title: 'Smart Dispatch', 
      description: 'Our AI-powered system assigns the optimal vehicle and plots the most efficient route. Real-time traffic and weather conditions are factored in.'
    },
    { 
      title: 'Track & Deliver', 
      description: 'Monitor your shipment\'s journey in real-time. Receive automated updates, and get digital proof of delivery upon successful completion.'
    }
  ];

  // Why choose us items
  whyChooseUs = [
    { 
      title: 'Global Network Coverage', 
      description: 'With operations in over 150 countries and partnerships with major carriers, we ensure your shipments reach anywhere in the world.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>`
    },
    { 
      title: 'Advanced Fleet Technology', 
      description: 'Our smart fleet is equipped with state-of-the-art GPS tracking, temperature monitoring, and predictive maintenance systems.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      </svg>`
    },
    { 
      title: '24/7 Customer Support', 
      description: 'Our dedicated team of logistics experts is available around the clock to assist you with any queries or concerns.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/>
      </svg>`
    },
    { 
      title: 'Eco-Friendly Solutions', 
      description: 'We are committed to sustainability with our fleet of electric vehicles and carbon offset programs for environmentally conscious shipping.',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c3.31 0 6-2.69 6-6c0-3.32-2.69-6-6-6c-3.31 0-6 2.69-6 6c0 3.31 2.69 6 6 6zm5-9.31l-2.45 2.45l1.41 1.41l1.04-1.04c0 .55-.45 1-1 1h-2v2h2c1.66 0 3-1.34 3-3v-2.82zm-7 0L7.55 15.14l1.41 1.41l1.04-1.04c0 .55-.45 1-1 1h-2v2h2c1.66 0 3-1.34 3-3v-2.82z"/>
      </svg>`
    }
  ];

  // Integration logos
  integrationLogos = [
    { 
      name: 'Apple',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
    },
    {
      name: 'Google',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'
    },
    {
      name: 'Salesforce',
      image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg'
    },
    {
      name: 'Amazon',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'
    },
    {
      name: 'Meta',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png'
    }
  ];

  // Reviews
  reviews = [
    { 
      name: 'John Martinez', 
      rating: 5, 
      text: 'Their real-time tracking feature has transformed how we manage our supply chain. We can now give our customers precise ETAs and instant updates. Absolutely fantastic service!'
    },
    { 
      name: 'Sarah Chen', 
      rating: 5, 
      text: 'The customer support team is incredible. Had an urgent shipment during a holiday weekend, and they went above and beyond to ensure it arrived on time. Best logistics partner we\'ve worked with.'
    },
    { 
      name: 'Michael Thompson', 
      rating: 5, 
      text: 'We switched to their eco-friendly shipping options and not only reduced our carbon footprint but also saved on fuel costs. Their electric vehicle fleet is impressive and reliable.'
    },
    { 
      name: 'Emily Rodriguez', 
      rating: 5, 
      text: 'The route optimization has cut our delivery times by 30%. Our customers are happier, and we\'re saving significantly on operational costs. Couldn\'t ask for better results.'
    },
    { 
      name: 'David Kumar', 
      rating: 5, 
      text: 'Their global network is unmatched. We\'ve shipped to some pretty remote locations without any issues. The tracking and documentation system makes international shipping a breeze.'
    },
    { 
      name: 'Lisa Anderson', 
      rating: 5, 
      text: 'The temperature-controlled shipping service is perfect for our sensitive medical supplies. Haven\'t had a single temperature deviation in over a year of daily shipments. Extremely reliable!'
    }
  ];

  // Pricing plans
  pricingPlans = [
    {
      name: 'Free Trial For 7 Days',
      price: '0',
      features: [
        'Up to 50 shipments/month',
        'Basic route optimization',
        'Real-time GPS tracking',
        'Email support',
        'Mobile app access',
        'Basic delivery reports'
      ],
      buttonText: 'Start Free Trial'
    },
    {
      name: 'Pro',
      price: '99',
      period: '/month',
      features: [
        'Up to 500 shipments/month',
        'Advanced route optimization',
        'Real-time GPS tracking',
        'Temperature monitoring',
        'Priority email & phone support',
        'Advanced analytics dashboard',
        'API access',
        'Custom delivery windows',
        'Proof of delivery app'
      ],
      buttonText: 'Subscribe Now',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: '499',
      period: '/month',
      features: [
        'Unlimited shipments',
        'AI-powered route optimization',
        'Real-time GPS tracking',
        'Temperature monitoring',
        '24/7 dedicated support',
        'Custom analytics & reporting',
        'Full API integration',
        'White-label delivery app',
        'Multi-vehicle fleet management',
        'Cross-border shipping support',
        'Custom integration options'
      ],
      buttonText: 'Contact Sales'
    }
  ];

  // FAQ items
  faqItems = [
    { 
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For enterprise customers, we also offer invoice-based payments with net-30 terms.'
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. If you cancel, you\'ll continue to have access to the service until the end of your current billing period.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 7-day free trial on all our plans. You can try all features with no restrictions and no credit card required. At the end of the trial, you can choose to upgrade to any of our paid plans.'
    },
    {
      question: 'Do you offer discounts for non-profit organizations?',
      answer: 'Yes, we offer special pricing for registered non-profit organizations and educational institutions. Please contact our sales team with your organization\'s details to learn more about our discount programs.'
    },
    {
      question: 'What kind of customer support do you provide?',
      answer: 'We provide 24/7 customer support through email and live chat. Premium plan subscribers also get access to priority phone support and dedicated account managers. Our average response time is under 2 hours.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we take security very seriously. All data is encrypted in transit and at rest using industry-standard encryption protocols. We maintain SOC 2 Type II compliance and perform regular security audits. Your data is backed up daily across multiple secure locations.'
    }
  ];
} 