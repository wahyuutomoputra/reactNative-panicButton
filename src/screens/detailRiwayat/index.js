import React, { Component } from "react";
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
  Body,
  Left,
  Right,
  Thumbnail,
} from "native-base";
import styles from "./styles";
import { FlatList, ActivityIndicator, View, TouchableWithoutFeedback, AsyncStorage, Image, Dimensions  } from 'react-native';
const logo = require("../../../assets/damkar.png");
const deviceWidth = Dimensions.get("window").width;

class DetailRiwayat extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true,
                   id: '',
                   kategori: '',
                   foto: '',
                   tanggal:'',
                   alamat: '',
                   pesan:''}
  }
  componentDidMount(){
    const kat = this.props.navigation.getParam('id');
      
    return fetch('http://172.16.1.140/ciDamkar/React/detail/'+kat)
    .then((response) => response.json())
    .then((responseJson) => {
        //alert(responseJson.d)

    this.setState({
        isLoading: false,
        kategori: responseJson.d.kategori,
        foto: responseJson.d.foto,
        tanggal: responseJson.d.tanggal,
        alamat: responseJson.d.alamat,
        pesan: responseJson.d.pesan,
    }, function(){

    });

    })
    .catch((error) =>{
    alert('error');
    console.error(error);
    });
    
  }
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
            <Title>Detail Riwayat</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
        <Card style={styles.mb}>
            <CardItem bordered>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>Kebakaran</Text>
                  <Text note>2019-05-14</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Image
                  style={{
                    alignSelf: "center",
                    height: 150,
                    resizeMode: "cover",
                    width: deviceWidth / 1.18,
                    marginVertical: 5
                  }}
                  source={{uri:"http://172.16.1.140/ciDamkar/uploads/laporan/download.jpg"}}
                />
                <Text>
                Laporan anda mengenai kebakaran, pada tanggal 2019-05-14
                telah kami terima dan telah kami proses.
                </Text>
              </Body>
            </CardItem>
            <CardItem style={{ paddingVertical: 0 }}>
              <Left>
                <Button transparent>
                  <Icon name="logo-github" />
                  <Text>Dinas Pemadam Kebakaran</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
      
        </Content>
      </Container>
    );
  }
}

export default DetailRiwayat;
