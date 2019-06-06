import React, { Component } from "react";
import { View, Text, ImageBackground, StyleSheet, Image, AsyncStorage } from "react-native";
import { NavigationActions, StackActions  } from 'react-navigation';

const splashscreen = require("../../../assets/background.jpg");
const logo = require("../../../assets/damkar.png");

export default class SplashPage extends Component {
  componentDidMount() {
    AsyncStorage.getItem('id', (error, result) => {
          if (result) {
           this.props.navigation.navigate('Navigator');
          }else{
            setTimeout( () => {
              const resetAction = StackActions.reset({
                  index: 0,
                  actions: [NavigationActions.navigate({ routeName: 'LoginView' })],
              });
              this.props.navigation.dispatch(resetAction);
            },1500);
          }
    });
   }
  
  render() {
    return (
    <ImageBackground
        style={{ flex: 1 }}
        source={ splashscreen }
        >
        <View style={styles.MainContainer}>
          <Image
            source={ logo }
            style={{ width: 120, height: 120, marginTop: 90 }}
          />
          <Text style={styles.TextStyle}>Damkar Soreang</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      alignItems: 'center',
    },
    TextStyle: {
      color: '#0250a3',
      textAlign: 'center',
      fontSize: 30,
      marginTop: 10,
    },
  });
