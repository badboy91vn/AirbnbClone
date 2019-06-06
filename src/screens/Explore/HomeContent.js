import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import StarRating from "react-native-star-rating";

class Content extends Component {
    render() {
        return (
            <View
                style={{
                    width: this.props.wScreen / 2 - 30,
                    height: this.props.wScreen / 2 - 30,
                    borderWidth: 0.5,
                    borderColor: "#dddddd"
                }}
            >
                <View style={{ flex: 1 }}>
                    <Image
                        source={this.props.imageURI}
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
                        alignItems: "flex-start",
                        justifyContent: "space-around",
                        paddingLeft: 10
                    }}
                >
                    <Text
                        style={{
                            fontSize: 10,
                            color: "#b63838"
                        }}
                    >
                        PRIVATE ROOM - 1 BED
                    </Text>
                    <Text
                        style={{
                            fontSize: 12,
                            fontWeight: "bold"
                        }}
                    >
                        The Home Stay
                    </Text>
                    <Text style={{ fontSize: 10 }}>40.000 VNĐ</Text>
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={this.props.rating}
                        starSize={10}
                    />
                </View>
            </View>
        );
    }
}

class HomeContent extends Component {
    render() {
        return (
            <View style={{ marginTop: 40 }}>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "700",
                        paddingHorizontal: 20
                    }}
                >
                    Home around the world
                </Text>

                <View
                    style={{
                        paddingHorizontal: 20,
                        marginTop: 20,
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "space-around"
                    }}
                >
                    <Content
                        wScreen={this.props.wScreen}
                        imageURI={require("../../images/6.jpg")}
                        title1="PRIVATE ROOM - 1 BED"
                        title2="The Home Stay"
                        price="40.000 VNĐ"
                        rating={3}
                    />
                    <Content
                        wScreen={this.props.wScreen}
                        imageURI={require("../../images/3.jpg")}
                        title1="PRIVATE ROOM - 2 BED"
                        title2="The Home Stay"
                        price="50.000 VNĐ"
                        rating={4}
                    />
                    <Content
                        wScreen={this.props.wScreen}
                        imageURI={require("../../images/2.jpg")}
                        title1="PRIVATE ROOM - 3 BED"
                        title2="Square"
                        price="100.000 VNĐ"
                        rating={4.5}
                    />
                    <Content
                        wScreen={this.props.wScreen}
                        imageURI={require("../../images/1.jpg")}
                        title1="PRIVATE ROOM - 4 BED"
                        title2="HNL"
                        price="50.000 VNĐ"
                        rating={5}
                    />
                </View>
            </View>
        );
    }
}

export default HomeContent;
