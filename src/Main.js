import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import Explore from "./screens/Explore";
import Saved from "./screens/Saved";
import Trips from "./screens/Trips";
import Profile from "./screens/Profile";

export default createBottomTabNavigator(
    {
        Explore: {
            screen: Explore,
            navigationOptions: {
                tabBarLabel: "Explore",
                tabBarIcon: ({ tiniColor }) => (
                    <Icon
                        name="ios-search-outline"
                        color={tiniColor}
                        size={24}
                    />
                )
            }
        },
        Saved: {
            screen: Saved,
            navigationOptions: {
                tabBarLabel: "Saved",
                tabBarIcon: ({ tiniColor }) => (
                    <Icon
                        name="ios-heart-outline"
                        color={tiniColor}
                        size={24}
                    />
                )
            }
        },
        Trips: {
            screen: Trips,
            navigationOptions: {
                tabBarLabel: "Trips",
                tabBarIcon: ({ tiniColor }) => (
                    <Icon
                        name="ios-heart-outline"
                        color={tiniColor}
                        size={24}
                    />
                )
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: "Profile",
                tabBarIcon: ({ tiniColor }) => (
                    <Icon
                        name="ios-person-outline"
                        color={tiniColor}
                        size={24}
                    />
                )
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: "red",
            inactiveTintColor: "grey",
            style: {
                backgroundColor: "white",
                borderTopWidth: 0,
                shadowOffset: { width: 5, height: 3 },
                shadowColor: "black",
                shadowOpacity: 0.5,
                elevation: 5
            }
        }
    }
);
