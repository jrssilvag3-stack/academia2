"use client";

import React from "react";

export function SVGFilters() {
  return (
    <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
      <defs>
        <filter id="chromakey-filter" colorInterpolationFilters="sRGB">
          {/* 
            Definitive Chromakey: Create alpha channel from RGB luminance.
            Alpha = (R + G + B) * 1 - 0.1
            Pure black (0,0,0) becomes -0.1 alpha (fully transparent).
          */}
          <feColorMatrix 
            type="matrix" 
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    1.5 1.5 1.5 0 -0.2" 
          />
          
          {/* Sharpen the alpha transition */}
          <feComponentTransfer>
            <feFuncA type="linear" slope="2" intercept="0" />
          </feComponentTransfer>

          {/* Optional: Add a smooth glow back in */}
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}
