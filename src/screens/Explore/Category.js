import React, { Component } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { CircleSnail } from "react-native-progress";
import * as actions from "../../redux/actions";
import { connect } from "react-redux";

class Content extends Component {
    render() {
        return (
            <View
                style={{
                    width: 130,
                    height: 130,
                    marginLeft: 20,
                    borderWidth: 0.4,
                    borderColor: "#dddddd"
                }}
            >
                <View style={{ flex: 2 }}>
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
                        paddingLeft: 10,
                        paddingTop: 10
                    }}
                >
                    <Text>{this.props.title}</Text>
                </View>
            </View>
        );
    }
}

class Category extends Component {
    componentWillMount() {
        // this.props.categoryFetch();
        this.props.ping();
    }

    loadContent = () => {
        let dataObj = this.props.categoryData.data;
        let listContent = [];
        let count = 0;
        for (const obj of dataObj) {
            console.log(obj);
            listContent.push(
                <Content
                    key={count}
                    imageURI={obj.imageURI}
                    title={obj.title}
                />
            );
            count++;
        }

        return listContent;
    };

    render() {
        console.log("Ping: ", this.props.pingData);
        return (
            <View style={{ height: 130, marginTop: 20 }}>
                {this.props.categoryData.isLoad == null ||
                this.props.categoryData.isLoad == true ? (
                    <View
                        style={{
                            flex: 1,
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        <CircleSnail
                            size={50}
                            spinDuration={1000}
                            color={["#00bcd4"]}
                        />
                    </View>
                ) : (
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {/* {this.loadContent()} */}
                        {this.props.categoryData.data.map((obj, i) => {
                            return (
                                <Content
                                    key={i}
                                    imageURI={obj.imageURI}
                                    title={obj.title}
                                />
                            );
                        })}
                    </ScrollView>
                )}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    // categoryData: state.categoryData
    pingData: state.pingData
});

export default connect(
    mapStateToProps,
    actions
)(Category);
