import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';

import Style from './PhoneListContainer.style'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Navigation from "./../../Services/NavigationService"
export default class PhoneListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        let { images, brand, description, price } = this.props.data
        return (
            <TouchableOpacity
                onPress={() => Navigation.navigate("PhoneDetailComponent", this.props.data)}
                style={{ flex: 1, padding: "3%", height: 200, flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#dadada" }}>
                <View style={{ flex: 0.35, marginVertical: "4%" }}>
                    <Image source={{ uri: images && images.length ? images[0] : "https://picsum.photos/200/300" }} style={Style.imageContainer} />
                </View >
                <View style={{ flex: 0.65, paddingLeft: "4%", justifyContent: "center" }}>
                    <Text style={{ fontWeight: "bold" }}>{brand}</Text>
                    <Text style={{ marginTop: "2%" }}>{description}</Text>
                    <Text style={{ marginTop: "2%", color: "maroon" }}>Price ${price}</Text>
                    <Text style={{ fontWeight: "100", marginTop: "2%" }}>Get it by <Text style={{ fontWeight: "bold" }}>Monday, Jun 33</Text> </Text>
                    <Text style={{ fontWeight: "100", marginTop: "2%" }}>Free delivery By NeoSOFT</Text>

                </View >
            </TouchableOpacity >
        )
    }

}

