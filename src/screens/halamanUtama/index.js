import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Footer,
  FooterTab,
  Text,
  Body,
  Left,
  Right,
  Icon,
} from "native-base";
import styles from "./styles";
import Dashboard from "./dashboard/dashboard";
import Telpon from "./telpon/telpon";
import Riwayat from "./riwayat/riwayat";
import Akun from "./akun/akun";

class HalamanUtama extends Component {
  a(){
    alert('h');
  }
  constructor(props) {
    super(props);
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      currentIndex: 1,
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      currentIndex: 1
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
      currentIndex: 2
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      currentIndex: 3
    });
  }
  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
      currentIndex: 4
    });
  }
  render() {
    let AppComponent = null;
    if(this.state.currentIndex == 1){
      AppComponent = Dashboard
    }else if(this.state.currentIndex == 2){
      AppComponent = Telpon
    }else if(this.state.currentIndex == 3){
      AppComponent = Riwayat
    }else if(this.state.currentIndex == 4){
      AppComponent = Akun
    }
    
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>Panic Button</Title>
          </Body>
          <Right />
        </Header>
        {/* <Content> */}
          <AppComponent/>
        {/* </Content> */}
        <Footer>
          <FooterTab>
            <Button
              active={this.state.tab1}
              onPress={() => this.toggleTab1()}>
              <Icon active={this.state.tab1} type="Entypo" name="home" />
              <Text>Beranda</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
              <Icon active={this.state.tab2} type="Entypo" name="phone" />
              <Text>Telpon</Text>
            </Button>
            <Button
              active={this.state.tab3}
              onPress={() => this.toggleTab3()}>
              <Icon active={this.state.tab3} type="Entypo" name="book" />
              <Text>Riwayat</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
              <Icon active={this.state.tab4} name="person" />
              <Text>Akun</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

 export default HalamanUtama;
 
// import React from 'react';
// import { Text, View } from 'react-native';
// import { createStackNavigator, createTabNavigator } from 'react-navigation';
// import { Footer, FooterTab, Button, Icon, Text as NBText } from 'native-base'

// class Home extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text>Home</Text>
//                 <Text style={{ marginTop: 20 }} onPress={() => this.props.navigation.navigate('Tabs')}>Go to Tabs</Text>
//             </View>
//         );
//     }
// }

// class Lucy extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text>Lucy</Text>
//             </View>
//         );
//     }
// }

// class Nine extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text>Nine</Text>
//             </View>
//         );
//     }
// }

// class Jade extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text>Jade</Text>
//             </View>
//         );
//     }
// }

// const tabs = createTabNavigator({
//     Lucy: { screen: Lucy },
//     Nine: { screen: Nine },
//     Jade: { screen: Jade }
// },
//     {
//         tabBarPosition: 'bottom',
//         swipeEnabled: false,
//         tabBarComponent: props => {
//             return (
//                 <Footer>
//                     <FooterTab>
//                         <Button
//                             vertical
//                             active={props.navigationState.index === 0}
//                             onPress={() => props.navigation.navigate("Lucy")}>
//                             <Icon name="bowtie" />
//                             <NBText>Lucy</NBText>
//                         </Button>
//                         <Button
//                             vertical
//                             active={props.navigationState.index === 1}
//                             onPress={() => props.navigation.navigate("Nine")}>
//                             <Icon name="briefcase" />
//                             <NBText>Nine</NBText>
//                         </Button>
//                         <Button
//                             vertical
//                             active={props.navigationState.index === 2}
//                             onPress={() => props.navigation.navigate("Jade")}>
//                             <Icon name="headset" />
//                             <Text>Jade</Text>
//                         </Button>
//                     </FooterTab>
//                 </Footer>
//             );
//         }
//     });

// export default HalamanUtama = createStackNavigator({
//     Home: { screen: Home },
//     Tabs: { screen: tabs }
// }, {
//         initialRouteName: "Home",

//     })