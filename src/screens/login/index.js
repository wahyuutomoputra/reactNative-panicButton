import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Item,
  Input,
  Form,
  Text
} from "native-base";
import { TouchableHighlight, View, AsyncStorage, TouchableOpacity } from "react-native";
import styles from "./styles";
import { NavigationActions, StackActions  } from 'react-navigation';
import ServerName from "../../ServerName";


class LoginView extends Component {
  constructor(props) {
    super(props);
    state = {
      email   : '',
      password: '',
    }
  }
  cek_login() {
    const data = new FormData();
    data.append('email', this.state.email);
    data.append('password', this.state.password);
    //const url= "http://192.168.43.229/ciDamkar/React/cek_login";
    const url = ServerName.name+"React/cek_login";
    fetch(url, {
        method: 'post',
        body: data
    })
    .then((response) => response.json())
    .then((responseJson) =>
    {
        console.log(responseJson);
        console.log(responseJson.hasil);
        if(responseJson.hasil==true){
            AsyncStorage.setItem('id', responseJson.id);
            AsyncStorage.setItem('email', this.state.email);
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Navigator' })],
            });
            this.props.navigation.dispatch(resetAction);
        }else{
            alert('email atau password anda salah');
        }
    });
  }
  render() {
    return (
      <Container style={styles.container}>
     
        <Content padder>
          <Form>
            <View
                style={{
                  alignItems: "center",
                  marginBottom: 200,
                  backgroundColor: "transparent"
                }}
              >
            </View>
            <Item rounded style={styles.inputContainer}>
              <Icon active type="Entypo" name="email" />
              <Input placeholder="Email" onChangeText={(email) => this.setState({email})} />
            </Item>
            <Item rounded style={styles.inputContainer}>
              <Icon active name="key"/>
              <Input secureTextEntry placeholder="Password" onChangeText={(password) => this.setState({password})} />
            </Item>
          </Form>
          <Button block info style={styles.masuk} onPress={() => this.cek_login()} rounded>
            <Text>Masuk</Text>
          </Button>
          <View
              style={{
                alignItems: "center",
                marginBottom: 10,
                backgroundColor: "transparent"
              }}
            >
          </View>
          <TouchableOpacity  style={styles.masuk}
          onPress={() => this.props.navigation.navigate("DaftarView")}>
             <Text>Daftar</Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

export default LoginView;
// import React, { Component } from "react";
// import {
//   Container,
//   Header,
//   Title,
//   Content,
//   Button,
//   Item,
//   Label,
//   Input,
//   Body,
//   Left,
//   Right,
//   Icon,
//   Form,
//   Text
// } from "native-base";
// import styles from "./styles";
// import { TouchableHighlight, View } from "react-native";

// class LoginView extends Component {
// constructor(props) {
//     super(props);
//         state = {
//             email   : '',
//             password: '',
//         }
// }
// cek_login() {
//     alert(this.state.email);
// }
//   render() {
//     return (
//       <Container style={styles.container}>
//         <Content>
//         <View
//             style={{
//                 alignItems: "center",
//                 marginBottom: 150,
//                 backgroundColor: "transparent"
//             }}
//             >
//         </View>
//           <Form>
//             <Item rounded style={styles.inputContainer} >
//               <Icon active name="home" />
//               <Input placeholder="Email" onChangeText={(email) => this.setState({email})} />
//             </Item>
//             <Item rounded style={styles.inputContainer}>
//               <Icon active name="home" />
//               <Input placeholder="Password" onChangeText={(password) => this.setState({password})} secureTextEntry/>
//             </Item>
//           </Form>
//           <Button block info style={{ margin: 15, marginTop: 40 }} 
//           onPress={() => this.cek_login()} rounded>
//             <Text>Masuk</Text>
//           </Button>
//         </Content>
//       </Container>
//     );
//   }
// }

// export default LoginView;
