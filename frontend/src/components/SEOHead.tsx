import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Virtual Assistance Pro | Premium Back Office Solutions for Luxury Transport & Chauffeur Services",
  description = "Professional virtual assistance and back office solutions for luxury transport operators, chauffeur services, and high-touch service providers. 15+ years experience, 24/7 support, proven reliability.",
  keywords = "virtual assistant, luxury transport back office, chauffeur service support, concierge back office, business process outsourcing, premium virtual assistance, transportation administration, luxury service support",
  image = "https://virtual-assistance-pro.netlify.app/hero-luxury-transport.jpg",
  url = "https://virtual-assistance-pro.netlify.app/",
  type = "website",
  noindex = false,
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update Open Graph meta tags
    const updateMetaProperty = (property: string, content: string) => {
      const meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      }
    };

    updateMetaProperty('og:title', title);
    updateMetaProperty('og:description', description);
    updateMetaProperty('og:image', image);
    updateMetaProperty('og:url', url);
    updateMetaProperty('og:type', type);

    // Update Twitter Card meta tags
    const updateTwitterMeta = (name: string, content: string) => {
      const meta = document.querySelector(`meta[name="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      }
    };

    updateTwitterMeta('twitter:title', title);
    updateTwitterMeta('twitter:description', description);
    updateTwitterMeta('twitter:image', image);

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    }

    // Handle noindex
    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      const currentContent = robotsMeta.getAttribute('content') || '';
      const newContent = noindex 
        ? currentContent.replace('index', 'noindex')
        : currentContent.replace('noindex', 'index');
      robotsMeta.setAttribute('content', newContent);
    }
  }, [title, description, keywords, image, url, type, noindex]);

  return null;
};

export default SEOHead;
