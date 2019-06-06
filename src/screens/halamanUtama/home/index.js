import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body  } from "native-base";
import { ImageBackground, View, StatusBar, TouchableOpacity, Image  } from "react-native";
import styles from "../styles";

const logo = require("../../../../assets/tombol.png");
export default class HomeScreen extends Component {
  render() {
    //const {navigate} = this.props.navigation;
    return (
      <Content padder>
        <View
            style={{
              alignItems: "center",
              marginBottom: 150,
              backgroundColor: "transparent"
            }}
          >
        </View>
       
        <TouchableOpacity  style={styles.container}
        onPress={() => this.props.navigation.navigate("pilihLaporan")}>
          <Image style={{width: 320, height: 320, }} source={logo} >
            
          </Image>
        </TouchableOpacity>
      </Content>
    );
  }
}
