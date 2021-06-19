import React from 'react';

class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = [
            'https://i.imgur.com/mB96cNt.png',
            'https://i.imgur.com/8dUZcgo.png',
            'https://i.imgur.com/RWyuTnn.png',
            'https://i.imgur.com/AbcNuKY.gif',
            'https://i.imgur.com/jBLJVyJ.png',
            'https://i.imgur.com/egdXY3r.jpg',
            'https://lh3.googleusercontent.com/proxy/uLtjiqiVouErCouyYwO1y0VtZtf8j51uvSpe30Omr_5qZ0QQz90-D4TwmqhizWb5mIMXCtjWu15D9VsBJvKHxexMH6jyQlYZVcnJvA'
        ]
    }

    render() {
        return (
            <img 
                style={{width: this.props.width}}
                src={this.state[this.props.id]}>
            </img>
        )
    }
}

export default Avatar;
