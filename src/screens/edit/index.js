import React, { Component } from "react";
import { AsyncStorage } from "react-native";
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
  Textarea,
  TextInput
} from "native-base";
import styles from "./styles";
import ServerName from "../../ServerName";
import { NavigationActions, StackActions  } from 'react-navigation';

class EditView extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: '',
          password: '',
          nama: '',
          nomor: '',
          alamat: '',
        }
      }

      componentDidMount(){
        AsyncStorage.getItem('id', (error, result) => {
          if (result) {
            this.setState({ id: result });
          }
          
          return fetch(ServerName.name+'React/edit/'+result)
          .then((response) => response.json())
          .then((responseJson) => {
            console.log(responseJson)
    
            this.setState({
              email: responseJson.email,
              password: responseJson.password,
              nama: responseJson.nama,
              nomor: responseJson.nomor,
              alamat: responseJson.alamat,
            }, function(){
    
            });
            console.log(this.state.nama)
    
          })
          .catch((error) =>{
            alert('error');
            console.error(error);
          });
        });
       
      }

      edit() {
        const data = new FormData();
        data.append('id', this.state.id);
        data.append('email', this.state.email);
        data.append('password', this.state.password);
        data.append('nama', this.state.nama);
        data.append('nomor', this.state.nomor);
        data.append('alamat', this.state.alamat);
        //const url= "http://192.168.43.229/ciDamkar/React/cek_login";
        const url = ServerName.name+"React/update";
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
                actions: [NavigationActions.navigate({ routeName: 'Navigator' })],
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
            <Title>Edit</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Nama</Label>
              <Input onChangeText={(nama) => this.setState({nama})} value={this.state.nama}/>
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={(email) => this.setState({email})} value={this.state.email}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input secureTextEntry onChangeText={(password) => this.setState({password})} value={this.state.password}/>
            </Item>
            <Item floatingLabel>
              <Label>Nomor Telepon</Label>
              <Input onChangeText={(nomor) => this.setState({nomor})} />
            </Item>
            <Textarea rowSpan={4} bordered placeholder="Alamat" onChangeText={(alamat) => this.setState({alamat})}  value={this.state.alamat}/>
          </Form>
          <Button block style={{ margin: 10, marginTop: 50 }} onPress={() => this.edit()}>
            <Text>Submit</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default EditView;
