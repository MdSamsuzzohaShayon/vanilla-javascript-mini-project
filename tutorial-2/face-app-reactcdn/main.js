// console.log(React);
// console.log(ReactDOM);


const width = 960, height = 500;
const centerX = width / 2, centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90, eyeOffsetY = 100;
const eyeRadious = 50;

const App = () => (
    <div className="ui container">
        <h1 className="ui header blue">Face App with react</h1>
        <br />
        <svg className="face-app" width={width} height={height}>
            <circle
                r={centerY - strokeWidth / 2}
                cy={centerY}
                cx={centerX}
                fill="yellow"
                stroke="black"
                stroke-width={strokeWidth}
            />
            <circle
                r={eyeRadious}
                cy={centerY - eyeOffsetY}
                cx={centerX - eyeOffsetX}
            />
            <circle
                r={eyeRadious}
                cy={centerY - eyeOffsetY}
                cx={centerX + eyeOffsetX}
            />
        </svg>
    </div>
);


ReactDOM.render(<App />, document.getElementById('root'));