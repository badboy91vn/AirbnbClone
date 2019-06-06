import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Platform,
    Animated
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class Tag extends Component {
    render() {
        return (
            <View
                style={{
                    minWidth: 20,
                    minHeight: 20,
                    padding: 5,
                    backgroundColor: "white",
                    borderColor: "#dddddd",
                    borderWidth: 1,
                    borderRadius: 0.2,
                    marginRight: 5
                }}
            >
                <Text style={{ fontSize: 10, fontWeight: "700" }}>
                    {this.props.name}
                </Text>
            </View>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <Animated.View
                style={[{ height: this.props.startHeaderBar }, styles.header]}
            >
                {/* Input Header */}
                <View style={styles.inputHeader}>
                    <Icon
                        name="ios-search"
                        size={20}
                        style={{ marginRight: 10 }}
                    />
                    <TextInput
                        placeholder="Search"
                        placeholderTextColor="grey"
                        underlineColorAndroid="transparent"
                        style={{
                            flex: 1,
                            fontWeight: "500",
                            backgroundColor: "white"
                        }}
                    />
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        marginHorizontal: 20,
                        top: 10,
                        position: "relative"
                    }}
                >
                    <Tag name="Guest" />
                    <Tag name="HNL" />
                </View>
            </Animated.View>
        );
    }
}

export default Header;

const styles = StyleSheet.create({
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
