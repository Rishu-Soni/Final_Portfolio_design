import React from 'react';

const BlobBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
            <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-200" style={{ animationDelay: '0.2s' }} />
            <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] bg-accent/20 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-400" style={{ animationDelay: '0.4s' }} />
            {/* Noise Overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBoNDBNNDAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20" />
        </div>
    );
};

export default BlobBackground;
