import React from "react";
import ReactDOM from 'react-dom/client';

const realTime = () => {
    return new Date().toLocaleTimeString()
};

const user = {
    firstName : 'Rose',
    lastName : 'Taylor'
};

const element = <h1>Hello, {user.firstName} {user.lastName}</h1>;

class Main extends React.Component {
    render() {
        return (
            <div>
                <h1>{element}</h1>
                <h1>it is {realTime()}</h1>
            </div>
        );
    }
}
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);

setInterval(() => {
    root.render(<Main />);
}, 1000);