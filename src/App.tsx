import React from 'react';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import CategorySection from './components/CategorySection';
import FeaturedProperties from './components/FeaturedProperties';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <SearchSection />
        <CategorySection />
        <FeaturedProperties />
      </main>
      <Footer />
    </div>
  );
}

export default App;