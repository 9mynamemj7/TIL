import React, { Fragment } from "react";
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
            <Fragment>
                <h1>{element}</h1>
                <h1>it is {realTime()}</h1>
            </Fragment>
        );
    }
}
// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);

setInterval(() => {
    root.render(<Main />);
}, 1000);