import React from "react";

class ArrowIcon extends React.Component {
    displayName: "ArrowIcon";

    render() {
        return (
            <div>
                <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    style={{transform: 'rotate('+ this.props.transform + 'deg)'}}
                >
                    <path
                        d="M0.777344 11L5.77734 6L0.777343 1"
                        stroke={this.props.color}
                    />
                </svg>
            </div>
        );
    }
}

export default ArrowIcon;