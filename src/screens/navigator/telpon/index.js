import React, { Component } from "react";
import { Content, Text, Container, Header, Title, Right, Body  } from "native-base";
import { View, StatusBar, TouchableOpacity, Image, Linking  } from "react-native";
import styles from "./styles";
const logo = require("../../../../assets/phone.png");
export default class Telpon extends Component {
  call() {
    Linking.openURL(`tel:081347055461`);
  }
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#66D8FF' }} androidStatusBarColor="#66D8FF">
          <Body>
            <Title>Telpon</Title>
          </Body>
          <Right />
        </Header>
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
          onPress={() => this.call() }>
            <Image style={{width: 320, height: 320, }} source={logo} >
            </Image>
            <Text style={styles.container}>Tekan tombol untuk menelpon damkar</Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}
