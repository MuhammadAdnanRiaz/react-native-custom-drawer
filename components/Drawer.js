import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-ionicons';

export default class Drawer extends React.Component{
    render(){
        return(
            <Icon
                name="add"
                color='#000000'
                size={32}
                style={styles.menuIcon}
                onPress={()=> this.props.navigation.toggleDrawer()}
            />
        )
    }
}
const styles = StyleSheet.create({
    menuIcon:{
        zIndex:9,
        position:'absolute',
        top:40,
        left:20
    }
})