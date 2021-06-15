import React from 'react';

class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = [
            'https://truth.bahamut.com.tw/s01/201612/6a027039066fea21351e7ec153928138.JPG',
            'https://sdl-stickershop.line.naver.jp/stickershop/v1/sticker/58661698/android/sticker.png',
            'https://sdl-stickershop.line.naver.jp/stickershop/v1/sticker/58661698/android/sticker.png',
            'https://truth.bahamut.com.tw/s01/201612/6a027039066fea21351e7ec153928138.JPG',
            'https://sdl-stickershop.line.naver.jp/stickershop/v1/sticker/58661698/android/sticker.png',
            'https://truth.bahamut.com.tw/s01/201612/6a027039066fea21351e7ec153928138.JPG'
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
