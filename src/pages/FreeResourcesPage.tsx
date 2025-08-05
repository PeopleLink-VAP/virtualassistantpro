import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import Seo from '@/components/Seo';

const FreeResourcesPage = () => {
  return (
    <>
      <Seo
        title="Free Resources - Virtual Assistant Pro"
        description="Explore free resources and affiliate links for virtual assistants."

      />
      <Navbar />
      <ScrollToTop />
      <div className="relative bg-warmWhite py-20 pt-40">
        <div className="container mx-auto px-4">
          <nav className="mb-8 text-sm text-gray-500" aria-label="breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link to="/" className="text-navy hover:underline">Homepage</Link>
                <ChevronRight className="h-4 w-4 mx-2" />
              </li>
              <li className="flex items-center">
                <span className="text-sunflower">Free Resources</span>
              </li>
            </ol>
          </nav>
          <h1 className="text-5xl font-bold text-navy mb-6 font-condensed">
            Free Resources
          </h1>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl">
            Welcome to our Free Resources page! Here you'll find a curated collection of valuable tools, guides, and affiliate links that can help you on your virtual assistant journey. We only recommend products and services we trust and believe will genuinely benefit you.
          </p>

          {/* Photo Grid Card Layout - Placeholder */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img src="/images/placeholder.svg" alt="Resource 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl text-navy mb-2">Resource Title 1</h3>
                <p className="text-gray-700 text-base mb-4">Short description of the resource or affiliate product. Explain its benefits.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sunflower hover:underline font-semibold">Learn More &rarr;</a>
              </div>
            </div>

            {/* Example Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img src="/images/placeholder.svg" alt="Resource 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl text-navy mb-2">Resource Title 2</h3>
                <p className="text-gray-700 text-base mb-4">Short description of the resource or affiliate product. Explain its benefits.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sunflower hover:underline font-semibold">Learn More &rarr;</a>
              </div>
            </div>

            {/* Example Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <img src="/images/placeholder.svg" alt="Resource 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-xl text-navy mb-2">Resource Title 3</h3>
                <p className="text-gray-700 text-base mb-4">Short description of the resource or affiliate product. Explain its benefits.</p>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-sunflower hover:underline font-semibold">Learn More &rarr;</a>
              </div>
            </div>

            {/* Add more cards as needed */}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FreeResourcesPage;