import React, { Component } from "react";
import { Content, Text  } from "native-base";
import { View, StatusBar, TouchableOpacity, Image  } from "react-native";
import styles from "../styles";
const logo = require("../../../../assets/telpon.png");
export default class Telpon extends Component {
  render() {
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
        onPress={() => this.props.navigation.navigate("MenuUtama")}>
          <Image style={{width: 320, height: 320, }} source={logo} >
          </Image>
        </TouchableOpacity>
      </Content>
    );
  }
}
