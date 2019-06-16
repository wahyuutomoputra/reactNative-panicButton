import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  Textarea
} from "native-base";
import styles from "./styles";
import ServerName from "../../ServerName";
import { NavigationActions, StackActions  } from 'react-navigation';

class DaftarView extends Component {
    constructor(props) {
        super(props);
        state = {
          email: '',
          password: '',
          nama: '',
          nomor: '',
          alamat: '',
        }
      }

      daftar() {
        const data = new FormData();
        data.append('email', this.state.email);
        data.append('password', this.state.password);
        data.append('nama', this.state.nama);
        data.append('nomor', this.state.nomor);
        data.append('alamat', this.state.alamat);
        //const url= "http://192.168.43.229/ciDamkar/React/cek_login";
        const url = ServerName.name+"React/create_account";
        fetch(url, {
            method: 'post',
            body: data
        })
        .then((response) => response.json())
        .then((responseJson) =>
        {
          console.log(responseJson);
          if (responseJson.status==true) {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'LoginView' })],
            });
            this.props.navigation.dispatch(resetAction);
          }else{
            alert(responseJson.pesan);
          }
      });
    }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Daftar</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nama</Label>
              <Input onChangeText={(nama) => this.setState({nama})} />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={(email) => this.setState({email})} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry onChangeText={(password) => this.setState({password})} />
            </Item>
            <Item floatingLabel>
              <Label>Nomor Telepon</Label>
              <Input onChangeText={(nomor) => this.setState({nomor})} />
            </Item>
            <Textarea rowSpan={5} bordered placeholder="Alamat" onChangeText={(alamat) => this.setState({alamat})} />
          </Form>
          <Button block style={{ margin: 15, marginTop: 50 }} onPress={() => this.daftar()}>
            <Text>Daftar</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default DaftarView;
