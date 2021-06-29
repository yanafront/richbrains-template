import React from "react";
import "./Sidebar.scss";
import ScienceIcon from "../../../icons/ScienceIcon";
import ArrowIcon from "../../../icons/ArrowIcon";
import Button from "../../../ui/Button";

class Sidebar extends React.Component {
    displayName: "Sidebar";

    constructor(props) {
        super(props);
        this.state = {
            sectionOpen: [],
            isMobile: false,
            showMenu: true
        };
        this.handleClick = this.handleClick.bind(this);
        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    componentDidMount() {
        if (window.innerWidth < 767) {
            this.setState(() => {
                return {
                    isMobile: true,
                    showMenu: false
                }
            });

        }
    }

    handleClick(element) {

        const openMenu = [...this.state.sectionOpen];
        const isHandleAction = openMenu.findIndex(el => el == element.id);
        isHandleAction == -1 ? openMenu.push(element.id) : openMenu.splice(isHandleAction, 1);
        this.setState({sectionOpen: openMenu});
    }

    toggleSidebar() {
        if (!this.state.isMobile) {
            return;
        }

        const show = this.state.showMenu;
        return this.setState({showMenu: !show});

    }

    isOpenSection(element) {
        return this.state.sectionOpen.find(el => el == element.id)
    }

    render() {
        const menu = [
            {
                id: 1,
                name: 'Business & Management',
                elements: [
                    {
                        name: 'Market Research Executive',
                        to: '/'
                    },
                    {
                        name: 'Child Psychologist',
                        to: '/'
                    },
                    {
                        name: 'Guidance Counsellor',
                        to: '/'
                    },
                    {
                        name: 'Behaviour Analyst',
                        to: '/'
                    },
                    {
                        name: ' Recreational Therapist',
                        to: '/'
                    }
                ]
            },
            {
                id: 2,
                name: 'Computing & IT',
                elements: [
                    {
                        name: 'Market Research Executive',
                        to: '/'
                    },
                    {
                        name: 'Child Psychologist',
                        to: '/'
                    },
                    {
                        name: 'Guidance Counsellor',
                        to: '/'
                    },
                    {
                        name: 'Behaviour Analyst',
                        to: '/'
                    },
                    {
                        name: ' Recreational Therapist',
                        to: '/'
                    }
                ]
            },
            {
                id: 3,
                name: 'Fashion & Media',
                elements: [
                    {
                        name: 'Market Research Executive',
                        to: '/'
                    },
                    {
                        name: 'Child Psychologist',
                        to: '/'
                    },
                    {
                        name: 'Guidance Counsellor',
                        to: '/'
                    },
                    {
                        name: 'Behaviour Analyst',
                        to: '/'
                    },
                    {
                        name: ' Recreational Therapist',
                        to: '/'
                    }
                ]
            },
            {
                id: 4,
                name: 'Finance & Accounting',
                elements: [
                    {
                        name: 'Market Research Executive',
                        to: '/'
                    },
                    {
                        name: 'Child Psychologist',
                        to: '/'
                    },
                    {
                        name: 'Guidance Counsellor',
                        to: '/'
                    },
                    {
                        name: 'Behaviour Analyst',
                        to: '/'
                    },
                    {
                        name: ' Recreational Therapist',
                        to: '/'
                    }
                ]
            },
            {
                id: 5,
                name: 'Law & Criminology',
                elements: [
                    {
                        name: 'Market Research Executive',
                        to: '/'
                    },
                    {
                        name: 'Child Psychologist',
                        to: '/'
                    },
                    {
                        name: 'Guidance Counsellor',
                        to: '/'
                    },
                    {
                        name: 'Behaviour Analyst',
                        to: '/'
                    },
                    {
                        name: ' Recreational Therapist',
                        to: '/'
                    }
                ]
            },
            {
                id: 6,
                name: 'Marketing & Communications',
                elements: [
                    {
                        name: 'Market Research Executive',
                        to: '/'
                    },
                    {
                        name: 'Child Psychologist',
                        to: '/'
                    },
                    {
                        name: 'Guidance Counsellor',
                        to: '/'
                    },
                    {
                        name: 'Behaviour Analyst',
                        to: '/'
                    },
                    {
                        name: ' Recreational Therapist',
                        to: '/'
                    }
                ]
            },
            {
                id: 7,
                name: 'Psychology & Social Sciences',
                elements: [
                    {
                        name: 'Market Research Executive',
                        to: '/'
                    },
                    {
                        name: 'Child Psychologist',
                        to: '/'
                    },
                    {
                        name: 'Guidance Counsellor',
                        to: '/'
                    },
                    {
                        name: 'Behaviour Analyst',
                        to: '/'
                    },
                    {
                        name: ' Recreational Therapist',
                        to: '/'
                    }
                ]
            }
        ];
        return (
            <div className="sidebar">
                <div
                    className="sidebar-header pointer w-100 justify-space-between"
                    onClick={this.toggleSidebar}
                >
                    <div className="d-flex row align-center pointer">
                        <ScienceIcon color="#259609" />
                        <div className="uppercase text-primary ml-15 f-normal f-size-13">
                            Careers
                        </div>
                    </div>
                    { this.state.isMobile &&
                        <div className="pointer">
                            <ArrowIcon color="#000000" transform={this.state.showMenu ? 90 : 0}/>
                        </div>
                    }
                </div>
                {this.state.showMenu &&
                    <div>
                        <div className="divider mt-20" />
                        <div className="sidebar-items mt-20">
                            {(menu || []).map((menu, index) => (
                                <div key={index}>
                                    <div
                                        className={`sidebar-item ${this.isOpenSection(menu) ? 'sidebar-item__active' : ''}`}
                                        onClick={this.handleClick.bind(this, menu)}
                                    >
                                        <div>
                                            { menu.name }
                                        </div>
                                        <ArrowIcon
                                            color={this.isOpenSection(menu) ? '#259609' : '#000000'}
                                            transform={this.isOpenSection(menu) ? 90 : 0}
                                        />
                                    </div>
                                    <div className="sidebar-submenu">
                                        {this.isOpenSection(menu) && menu.elements.map((el, i) => (
                                            <a
                                                href={el.to}
                                                key={i}
                                                className="d-block sidebar-submenu-item"
                                            >
                                                {el.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="divider mt-20 mb-20" />
                        <Button
                            name="Show all programmes"
                            style="bordered"
                            uppercase
                        />
                    </div>
                }
            </div>
        );
    }
}

export default Sidebar;