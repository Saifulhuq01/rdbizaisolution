import { useEffect } from 'react';
import Header from '@/components/Header';
import TabNavigation from '@/components/TabNavigation';
import Footer from '@/components/Footer';
import FloatingLogo from '@/components/FloatingLogo';

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = 'RDBiz AI Solution - Enterprise AI & Intelligent Automation';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'RDBiz AI Solution specializes in enterprise-grade Artificial Intelligence, Machine Learning, Deep Learning, and Intelligent Automation. Transforming businesses through cutting-edge AI technology.'
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* SEO Headers */}
      <header className="sr-only">
        <h1>RDBiz AI Solution - Enterprise AI & Intelligent Automation by Dr. Ravi Dakshinamoorthy</h1>
      </header>
      
      <main>
        <Header />
        <div className="container mx-auto px-4">
          <TabNavigation />
        </div>
      </main>
      
      <Footer />
      
      {/* Floating Interactive Logo */}
      <FloatingLogo />
    </div>
  );
};

export default Index;
