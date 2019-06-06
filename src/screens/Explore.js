import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Platform,
    StatusBar,
    ScrollView,
    Dimensions,
    Animated
} from "react-native";

import Header from "../screens/Explore/Header";
import Category from "../screens/Explore/Category";
import IntroContent from "../screens/Explore/IntroContent";
import HomeContent from "../screens/Explore/HomeContent";

const { width } = Dimensions.get("window");

class ExplorePage extends Component {
    componentWillMount() {
        this.scrollY = new Animated.Value(0);

        this.startHeaderBar = 85;
        this.endHeaderBar = 50;
        if (Platform.OS == "android") {
            this.startHeaderBar = 100 + StatusBar.currentHeight;
            this.endHeaderBar = 65 + StatusBar.currentHeight;
        }

        this.animatedHeaderHeight = this.scrollY.interpolate({
            inputRange: [0, 50],
            outputRange: [this.startHeaderBar, this.endHeaderBar],
            extrapolate: "clamp"
        });
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {/* Header */}
                    <Header startHeaderBar={this.animatedHeaderHeight} />

                    {/* Scroll */}
                    <ScrollView
                        scrollEventThrottle={16}
                        showsVerticalScrollIndicator={false}
                        onScroll={Animated.event([
                            {
                                nativeEvent: {
                                    contentOffset: { y: this.scrollY }
                                }
                            }
                        ])}
                    >
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: "white",
                                paddingTop: 20,
                                paddingBottom: 10
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 24,
                                    fontWeight: "700",
                                    paddingHorizontal: 20
                                }}
                            >
                                What can we help you find, HNL?
                            </Text>
                            {/* Category */}
                            <Category />

                            {/* Intro Content */}
                            <IntroContent wScreen={width} />

                            {/* Content */}
                            <HomeContent wScreen={width} />
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}

export default ExplorePage;

const styles = StyleSheet.create({
    androidHeader: {
        ...Platform.select({
            android: {
                paddingTop: StatusBar.currentHeight
            }
        })
    },
    header: {
        backgroundColor: "white",
        borderBottomColor: "#dddddd",
        borderBottomWidth: 1
    },
    inputHeader: {
        backgroundColor: "white",
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
        marginHorizontal: 20,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: "black",
        shadowOpacity: 0.2,
        elevation: 1,
        marginTop: Platform.OS == "android" ? 30 : null
    }
});
