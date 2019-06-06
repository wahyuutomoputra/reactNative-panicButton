import React, { Component } from "react";
import { Content, Text, Body, Container, Header, Title, Right  } from "native-base";
import { View, TouchableOpacity, Image   } from "react-native";
import styles from "./styles";
import * as Animatable from 'react-native-animatable';

const logo = require("../../../../assets/tombol.png");
export default class Beranda extends Component {
  
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: '#66D8FF' }} androidStatusBarColor="#66D8FF">
          <Body>
            <Title>Beranda</Title>
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
          <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite" >
            <TouchableOpacity  style={styles.container}
            onPress={() => this.props.navigation.navigate("pilihLaporan")}>
              <Image style={{width: 320, height: 320, }} source={logo} >
              </Image>
            </TouchableOpacity>
          </Animatable.View>
          <Text style={{ textAlign: 'center' }}>Tekan tombol diatas untuk melapor !</Text>
        </Content>
    </Container>
    );
  }
}
