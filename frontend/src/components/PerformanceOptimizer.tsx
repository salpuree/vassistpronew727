import { useEffect } from 'react';

// Preload critical resources
const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical images
    const preloadImage = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = href;
      document.head.appendChild(link);
    };

    // Preload hero image for LCP optimization
    preloadImage('/hero-luxury-transport.jpg');
    preloadImage('/vaboard.svg');

    // Add resource hints for external domains
    const addResourceHint = (href: string, rel: string) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      document.head.appendChild(link);
    };

    // DNS prefetch for external resources
    addResourceHint('https://fonts.googleapis.com', 'dns-prefetch');
    addResourceHint('https://fonts.gstatic.com', 'dns-prefetch');

    // Optimize images with lazy loading (for non-critical images)
    const images = document.querySelectorAll('img[data-lazy]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.lazy || '';
          img.removeAttribute('data-lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    // Add structured data for better SEO
    const addStructuredData = () => {
      const breadcrumbData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://virtual-assistance-pro.netlify.app/"
          }
        ]
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(breadcrumbData);
      document.head.appendChild(script);
    };

    addStructuredData();

    // Cleanup function
    return () => {
      imageObserver.disconnect();
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
