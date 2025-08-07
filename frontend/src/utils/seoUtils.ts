// SEO utility functions for optimizing content

export const generateAltText = (context: string, description?: string): string => {
  const baseAltTexts: Record<string, string> = {
    'hero': 'Professional virtual assistant providing luxury transport and chauffeur service back office support',
    'team': 'Expert virtual assistants and back office specialists at Virtual Assistance Pro',
    'testimonial': 'Client testimonial about Virtual Assistance Pro premium services',
    'service': 'Virtual assistant service illustration for luxury transport operators',
    'case-study': 'Success story showcase of Virtual Assistance Pro client results',
    'logo': 'Virtual Assistance Pro company logo - Premium back office solutions',
    'client-logo': 'Trusted client logo - luxury transport and chauffeur service provider',
    'process': 'Virtual assistance process diagram for back office operations',
    'roi': 'ROI calculator showing cost savings with virtual assistant services',
    'industry': 'Industry expertise in luxury transport and premium service sectors',
    'contact': 'Contact Virtual Assistance Pro for premium back office solutions'
  };

  const baseText = baseAltTexts[context] || 'Virtual Assistance Pro - Premium back office solutions';
  return description ? `${baseText} - ${description}` : baseText;
};

export const generatePageSchema = (pageType: string, pageData: any) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageData.title,
    "description": pageData.description,
    "url": pageData.url,
    "mainEntity": {
      "@type": "Organization",
      "name": "Virtual Assistance Pro"
    }
  };

  switch (pageType) {
    case 'services':
      return {
        ...baseSchema,
        "@type": "Service",
        "serviceType": "Virtual Assistant Services",
        "provider": {
          "@type": "Organization",
          "name": "Virtual Assistance Pro"
        },
        "areaServed": ["United States", "Canada", "United Kingdom", "Australia"]
      };
    
    case 'about':
      return {
        ...baseSchema,
        "@type": "AboutPage",
        "mainEntity": {
          "@type": "Organization",
          "name": "Virtual Assistance Pro",
          "foundingDate": "2009",
          "description": "Premium virtual assistance for luxury transport operators"
        }
      };
    
    case 'contact':
      return {
        ...baseSchema,
        "@type": "ContactPage",
        "mainEntity": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "telephone": "+1-800-VA-PRO-24",
          "availableLanguage": "English"
        }
      };
    
    default:
      return baseSchema;
  }
};

export const optimizeImageLoading = (element: HTMLImageElement, priority: 'high' | 'low' = 'low') => {
  if (priority === 'high') {
    element.loading = 'eager';
    element.fetchPriority = 'high';
  } else {
    element.loading = 'lazy';
    element.fetchPriority = 'low';
  }
  
  // Add proper ARIA attributes
  if (!element.alt) {
    element.alt = generateAltText('service');
  }
};

export const addStructuredDataToPage = (schemaData: object) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schemaData);
  document.head.appendChild(script);
};

export const createBreadcrumb = (pages: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": pages.map((page, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": page.name,
      "item": page.url
    }))
  };
};

// Keywords for different page types
export const getPageKeywords = (pageType: string): string => {
  const keywords: Record<string, string> = {
    'home': 'virtual assistant, luxury transport back office, chauffeur service support, concierge back office, business process outsourcing, premium virtual assistance',
    'services': 'virtual assistant services, back office support, customer service outsourcing, booking management, administrative services, 24/7 support',
    'about': 'virtual assistance company, back office specialists, luxury service providers, transport industry experts, professional virtual assistants',
    'contact': 'contact virtual assistant, get quote back office services, luxury transport support consultation, premium virtual assistance inquiry',
    'team': 'virtual assistant team, back office professionals, luxury service specialists, transport industry experts, dedicated account managers',
    'case-studies': 'virtual assistant success stories, back office case studies, luxury transport client results, ROI virtual assistance, client testimonials',
    'roi-calculator': 'virtual assistant ROI, cost savings calculator, back office efficiency, outsourcing benefits, virtual assistance pricing'
  };

  return keywords[pageType] || keywords['home'];
};
