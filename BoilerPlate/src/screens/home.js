import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../styles/styles.js';
import signout from '../firebase/functions'
import auth from '@react-native-firebase/auth';

class HomeScreen extends Component {

    render(){
        return(
            <View>
                <Button title="Sign Out" onPress={() => auth().signOut() }></Button>
            </View>
        );
    }

}

export default HomeScreen;