import React from 'react';

export const FaceContainer = ({ children, width, height, centerX, centerY }) => {
    return (
        <svg className="face-app" width={width} height={height}>
            <g transform={`translate(${centerX}, ${centerY})`}>
                {children}
            </g>
        </svg>
    )
}


