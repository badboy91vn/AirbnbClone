import React, { Component } from "react";
import { View, Text } from "react-native";

class ImageTest extends Component {
    render() {
        return (
            <View>
                <View style={{ flex: 2 }}>
                    <Image
                        source={this.props.imageURL}
                        style={{
                            flex: 1,
                            width: null,
                            height: null,
                            resizeMode: "cover"
                        }}
                    />
                </View>
                <View
                    style={{
                        flex: 1,
                        paddingLeft: 10,
                        paddingTop: 10
                    }}
                >
                    <Text>{this.props.tileName}</Text>
                </View>
            </View>
        );
    }
}

export default ImageTest;
