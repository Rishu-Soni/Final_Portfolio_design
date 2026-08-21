import React from 'react';
import gridBg from '@/assets/background_img/grid_white.svg';

const BlobBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <img 
                src={gridBg} 
                alt="Background Grid" 
                className="w-full h-full object-cover opacity-50 pointer-events-none" 
            />
        </div>
    );
};

export default BlobBackground;
