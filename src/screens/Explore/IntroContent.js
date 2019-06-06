import React, { Component } from "react";
import { View, Text, Image } from "react-native";

class IntroContent extends Component {
    render() {
        return (
            <View style={{ marginTop: 40, marginHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: "700" }}>
                    Intro Airbnb Plus
                </Text>
                <Text style={{ fontWeight: "100", marginTop: 10 }}>
                    A new selection of homes verified for quality & comfort
                </Text>
                <View
                    style={{
                        width: this.props.wScreen - 40,
                        height: 200,
                        marginTop: 20
                    }}
                >
                    <Image
                        source={require("../../images/5.jpg")}
                        style={{
                            flex: 1,
                            width: null,
                            height: null,
                            resizeMode: "cover",
                            borderRadius: 5,
                            borderWidth: 1,
                            borderColor: "#dddddd"
                        }}
                    />
                </View>
            </View>
        );
    }
}

export default IntroContent;
