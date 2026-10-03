import React from 'react';

interface SpacebarLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
}

export const SpacebarLogo: React.FC<SpacebarLogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-8 w-auto',
    md: 'h-10 w-auto',
    lg: 'h-14 w-auto',
    xl: 'h-20 w-auto',
    custom: '',
  };

  return (
    <svg
      viewBox="0 0 1000 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${sizeClasses[size]} ${className} drop-shadow-md select-none`}
      aria-label="SPACEBAR Official Arcade Logo"
    >
      {/* ================= LEFT WING STRIPES ================= */}
      {/* 1. Left Red Top Stripe (Trapezoid) */}
      <polygon
        points="70,100 244,100 244,195 98,195"
        fill="#ff1f26"
      />

      {/* 2. Left Mint Teal Middle Stripe (Trapezoid) */}
      <polygon
        points="104,213 244,213 244,308 132,308"
        fill="#00cc99"
      />

      {/* 3. Left Amber Yellow Bottom Stripe (Trapezoid) */}
      <polygon
        points="138,326 244,326 244,420 166,420"
        fill="#ffb703"
      />

      {/* ================= RIGHT WING STRIPES ================= */}
      {/* 1. Right Red Top Stripe (Trapezoid) */}
      <polygon
        points="756,100 930,100 902,195 756,195"
        fill="#ff1f26"
      />

      {/* 2. Right Mint Teal Middle Stripe (Trapezoid) */}
      <polygon
        points="756,213 896,213 868,308 756,308"
        fill="#00cc99"
      />

      {/* 3. Right Amber Yellow Bottom Stripe (Trapezoid) */}
      <polygon
        points="756,326 862,326 834,420 756,420"
        fill="#ffb703"
      />

      {/* ================= CENTRAL BLACK SCREEN / MONITOR ================= */}
      <rect
        x="274"
        y="65"
        width="452"
        height="452"
        rx="36"
        ry="36"
        fill="#000000"
      />

      {/* ================= WHITE GEOMETRIC "S" / SPACEBAR EMBLEM ================= */}
      {/* Outer White Rectangular Frame */}
      {/* Top Border */}
      <rect x="352" y="142" width="296" height="42" fill="#ffffff" />
      
      {/* Left Vertical Border */}
      <rect x="352" y="142" width="42" height="298" fill="#ffffff" />

      {/* Right Vertical Border */}
      <rect x="606" y="142" width="42" height="298" fill="#ffffff" />

      {/* Bottom Border */}
      <rect x="352" y="398" width="296" height="42" fill="#ffffff" />

      {/* Upper Horizontal Inner Bar (Connected to Right Wall) */}
      <rect x="444" y="228" width="204" height="42" fill="#ffffff" />

      {/* Lower Horizontal Inner Bar (Connected to Left Wall) */}
      <rect x="352" y="312" width="204" height="42" fill="#ffffff" />
    </svg>
  );
};
