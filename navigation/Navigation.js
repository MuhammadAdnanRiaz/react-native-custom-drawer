import React from "react";
import { Dimensions } from "react-native";
import { createDrawerNavigator, createAppContainer } from "react-navigation";

//importing Screens

import Home from "../screens/Home";
import About from "../screens/About";
import Link from "../screens/Link";

//importing drawer menu

import DrawerMenu from "../components/DrawerMenu";

//getting windows width

const WIDTH = Dimensions.get("window").width;

//creating config for drawerNavigation

const DrawerConfig = {
  drawerWidth: WIDTH * 0.83,
  contentComponent: ({ navigation }) => {
    return <DrawerMenu navigation={navigation} />;
  }
};

//registering Screen

const DrawerNavigation = createDrawerNavigator({
  Home: {
    screen: Home
  },
  About: {
    screen: About
  },
  Link: {
    screen: Link
  }
},
DrawerConfig);

//exporting
export default createAppContainer(DrawerNavigation);