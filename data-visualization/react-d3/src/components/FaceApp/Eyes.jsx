import React from 'react';

export const Eyes = ({ eyeOffsetX, eyeOffsetY, eyeRadious }) => (
    <React.Fragment>
        <circle
            r={eyeRadious}
            // cy={centerY - eyeOffsetY}
            // cx={centerX + eyeOffsetX}
            cy={- eyeOffsetY}
            cx={-eyeOffsetX}
        />
        <circle
            r={eyeRadious}
            // cy={centerY - eyeOffsetY}
            // cx={centerX + eyeOffsetX}
            cy={- eyeOffsetY}
            cx={eyeOffsetX}
        />

    </React.Fragment>
);


