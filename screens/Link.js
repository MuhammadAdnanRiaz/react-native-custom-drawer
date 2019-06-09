import React from 'react';
import {View,Text} from 'react-native';

import Drawer from '../components/Drawer.js'

export default class Link extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#ff12ff',alignItems:"center",justifyContent:"center"}}> 
                <Drawer navigation={this.props.navigation} />
                <Text>Link Screen</Text>
            </View>
        )
    }
}