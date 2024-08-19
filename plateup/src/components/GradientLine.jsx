import React from 'react';

const gradientLineStyle = {
    position: 'absolute',
    top: '603px',
    left: '0px',
    width: '100vw',
    height: '40px',
    background: 'linear-gradient(50deg, #F0C971, #E5688C)',
    transform: 'skewY(-3deg)',
    zIndex: 1,
};

const mobileGradientLineStyle = {
    ...gradientLineStyle,
    top: '480px',
    zIndex: -1,
};

const useResponsiveStyles = () => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? mobileGradientLineStyle : gradientLineStyle;
};

const GradientLine = () => {
    const style = useResponsiveStyles();

    return <div style={style}></div>;
};

export default GradientLine;