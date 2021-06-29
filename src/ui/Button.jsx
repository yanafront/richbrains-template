import React from "react";
import "./Button.scss";

class Button extends React.Component {
    displayName: "Button";

    render() {
        return (
            <button className={`button ${this.props.uppercase ? 'uppercase' : ''} ${this.props.style}`}>
                {this.props.name}
            </button>
        );
    }
}

export default Button;