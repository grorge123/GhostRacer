import React from 'react';

class Arrow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.a == this.props.b) return '=';
        if (this.props.a > this.props.b) return <i className="fas fa-arrow-up"></i>;
        if (this.props.a < this.props.b) return <i className="fas fa-arrow-down"></i>;
    }
}

export default Arrow;
