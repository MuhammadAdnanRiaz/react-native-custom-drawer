import React from 'react';
import {View,Text} from 'react-native';
import Icon from 'react-native-ionicons';


import Drawer from '../components/Drawer.js'

export default class Home extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'white',alignItems:"center",justifyContent:"center"}}> 
                <Drawer navigation={this.props.navigation} />
                <Icon name="add" />
                <Text>Home Screen</Text>
            </View>
        )
    }
}