import React from 'react';
import CircularRing from '../stories-app/ring';
import './ui-shell-header.scss'; // Import the SCSS file

const UIShellHeader = () => {
    return (
        <div className="ui-shell-header">
            {/* Your header content here */}
            <h1>Dream Cars,Real Prices </h1>
            
            <div className="stories-ring" >
      < CircularRing />

      </div>
        </div>
    );
};

export default UIShellHeader;
