import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';

import Style from "./PhoneDetailComponent.style"

export default class PhoneDetailComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { images, brand, description, price } = this.props.navigation.state.params
        return (
            <View style={Style.containerWrapper}>
                <View style={Style.ImageWrapper}>
                    <Image source={{ uri: images && images.length ? images[0] : "https://picsum.photos/200/300" }} style={Style.imageView} />
                </View >
                <View style={Style.bodyWrapper}>
                    <Text style={Style.bold}>{brand}</Text>
                    <Text style={Style.descWrapper}>{description}</Text>
                    <Text style={Style.priceWrapper}>Price ${price}</Text>
                    <Text style={Style.textWrapper}>Get it by <Text style={Style.bold}>Monday, Jun 33</Text> </Text>
                    <Text style={Style.textWrapper}>Free delivery By NeoSOFT</Text>
                </View >
            </View >
        )
    }
}

