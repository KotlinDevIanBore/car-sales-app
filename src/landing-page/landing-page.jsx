import React, { useState, lazy, Suspense } from 'react';
import HomePage from "../home-page/home-component";
import Footer from "../footer-app/footer";

const LazyCarGrid = lazy(() => import('../car-grid-component/Car-grid-component'));

function LandingPage({}) {
    const [isCarGridVisible, setCarGridVisibility] = useState(false);

    const toggleCarGrid = () => setCarGridVisibility(prev => !prev);

    return (
        <div>
            <HomePage />

            <div className="flex justify-center mt-8 mb-12">
                <button 
                    onClick={toggleCarGrid}
                    aria-label={isCarGridVisible ? "Hide car grid" : "Show car grid"}
                    className="px-6 py-3 text-lg font-semibold text-[#078E8E] bg-transparent border-2 border-[#078E8E] rounded-full shadow-md hover:bg-[#078E8E] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#078E8E] focus:ring-offset-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                >
                    {isCarGridVisible ? " Home" : "See Our Cars"}
                </button>
            </div>

            {isCarGridVisible && (
                <Suspense fallback={<div>Loading...</div>}>
                    <LazyCarGrid />
                </Suspense>
            )}

            <Footer />
        </div>
    );
}

export default LandingPage;