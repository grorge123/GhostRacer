import React from 'react';

class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = [
            'https://upload.wikimedia.org/wikipedia/en/8/88/Bugcat_Capoo.jpg',
            'https://64.media.tumblr.com/8210fd413c5ce209678ef82d65731443/tumblr_mjphnqLpNy1s5jjtzo1_400.gifv',
            'https://lh3.googleusercontent.com/proxy/4H1cCDxr1R-nTjrUO5JvAvwl9gYYizI2ivFOZ1-L5oKJWBDL0UixHASb5Ad2jZz9rCPHuG9C69KUexm5UVq9RQljHtDtP7-5S9kOppuQHagtzeHL1FGi',
            'https://e7.pngegg.com/pngimages/998/380/png-clipart-shiba-inu-dogecoin-gif-internet-meme-egypt-dog-dog-like-mammal-dog-breed.png',
            'https://memes.tw/user-gif-thumbnail/2b2f442a7b58d7a1b686fc8fdee3dfd6.gif',
            'https://www.pngjoy.com/pngm/561/8437107_happy-meme-girl-running-meme-transparent-png.png',
            'https://i.imgur.com/HkjcSkj.png',

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
