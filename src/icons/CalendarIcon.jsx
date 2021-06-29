import React from "react";

class CalendarIcon extends React.Component {
    displayName: "CalendarIcon";
a
    render() {
        return (
            <div>
                <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                >
                    <path
                        d="M15.5 4.87891H17.5V17.8789H2.5V4.87891H4.5M12.5 4.87891H7.5M2.5 8.87891H17.5M15.5 2.87891H12.5V6.87891H15.5V2.87891ZM7.5 2.87891H4.5V6.87891H7.5V2.87891Z"
                        fill={this.props.color}
                    />
                </svg>
            </div>
        );
    }
}

export default CalendarIcon;