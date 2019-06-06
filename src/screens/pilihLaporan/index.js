import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";
import styles from "./styles";

const logo = require("../../../assets/logo.png");

class pilihLaporan extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: '#66D8FF' }} androidStatusBarColor="#66D8FF">
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Pilih Laporan</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card style={styles.mb} >
            <CardItem button
              onPress={() => this.props.navigation.navigate("Laporan",
              {keterangan:'Kebakaran'})}>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>Kebakaran</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card style={styles.mb} >
            <CardItem button
              onPress={() => this.props.navigation.navigate("Laporan",
              {keterangan:'Penyelamatan'})}>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>Penyelamatan</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card style={styles.mb} >
            <CardItem button
              onPress={() => this.props.navigation.navigate("Laporan",
              {keterangan:'Bencana Alam'})}>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>Bencana Alam</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default pilihLaporan;
