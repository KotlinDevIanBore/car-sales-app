import React, { useState, lazy, Suspense,useContext } from 'react';
import HomePage from "../home-page/home-component";
import Footer from "../footer-app/footer";
import { carGridContext } from '../car-grid-component/car-grid-context';
import UIShellHeader from '../ui-shell-app/ui-shell-header';

const LazyCarGrid = lazy(() => import('../car-grid-component/Car-grid-component'));


function LandingPage({}) {
    const {isCarGridVisible, setCarGridVisibility} = useContext (carGridContext);

    // const toggleCarGrid = () => setCarGridVisibility(prev => !prev);

    return (
        <div>
            <UIShellHeader />
            <HomePage />

           

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