const BackgroundCircle = props => (
    <circle
        r={props.radius}
        // cy={centerY}
        // cx={centerX}
        fill="yellow"
        stroke="black"
        strokeWidth={props.strokeWidth}
    />
);


export default BackgroundCircle;