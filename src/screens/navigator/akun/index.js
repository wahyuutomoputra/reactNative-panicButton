// import React, { Component } from "react";
// import { Content, Card, CardItem, Text, Body, Container, Header, Title, Right } from "native-base";

// export default class Akun extends Component {
//   render() {
//     return (
//       <Container>
//         <Header style={{ backgroundColor: '#66D8FF' }} androidStatusBarColor="#66D8FF">
//           <Body>
//             <Title>Akun</Title>
//           </Body>
//           <Right />
//         </Header>
//         <Content padder>
//           <Card>
//             <CardItem>
//               <Body>
//                 <Text>Ini dua</Text>
//               </Body>
//             </CardItem>
//             <CardItem>
//               <Body>
//                 <Text>Platform specific codebase for components</Text>
//               </Body>
//             </CardItem>
//             <CardItem>
//               <Body>
//                 <Text>
//                   Any native third-party libraries can be included along with
//                   NativeBase.
//                 </Text>
//               </Body>
//             </CardItem>
//             <CardItem>
//               <Body>
//                 <Text>
//                   Single file to theme your app and NativeBase components.
//                 </Text>
//               </Body>
//             </CardItem>
//             <CardItem>
//               <Body>
//                 <Text>
//                   Gives an ease to include different font types in your app.
//                 </Text>
//               </Body>
//             </CardItem>
//           </Card>
//         </Content>
//       </Container>
//     );
//   }
// }

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { NavigationActions, StackActions  } from 'react-navigation';
// cardImage = require("../../../../assets/me.jpg");
const cardImage = require("../../../../assets/s.jpg");

export default class Akun extends Component {

  keluar(){
    AsyncStorage.removeItem('id');
    AsyncStorage.removeItem('email');
    const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'SplashPage' })],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={cardImage}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              {/* <Text style={styles.name}>Wahyu Utomo Putra</Text>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text> */}
              
                        
              <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate("EditView")}>
                <Text>Edit akun</Text> 
              </TouchableOpacity>

              <View
                  style={{
                    alignItems: "center",
                    marginBottom: 10,
                    backgroundColor: "transparent"
                  }}
                >
              </View>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => this.keluar()}>
                <Text>Log Out</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
});
 