import React from 'react';

class SidebarItem extends React.Component {
    render() {
        const { element } = this.props;
        return (
                <>
                    <span>{element.text}</span>
                    <p>{element.date}</p>
                </>
        )
    }
}

export default SidebarItem;