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
  Right
} from "native-base";
import styles from "./styles";
import { FlatList, ActivityIndicator, View, TouchableWithoutFeedback, AsyncStorage  } from 'react-native';

class Riwayat extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true, id: ''}
  }
  componentDidMount(){
    AsyncStorage.getItem('id', (error, result) => {
      if (result) {
        this.setState({ id: result });
      }
      
      return fetch('http://192.168.43.229/ciDamkar/React/riwayat_laporan/'+result)
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.d,
        }, function(){

        });

      })
      .catch((error) =>{
        alert('error');
        console.error(error);
      });
    });
    
  }
  render() {
    if(this.state.isLoading){
        return(
        <Container style={styles.container}>
            <Header style={{ backgroundColor: '#66D8FF' }} androidStatusBarColor="#66D8FF">
               <Body>
                <Title>Riwayat</Title>
               </Body>
               <Right />
            </Header>
            <Content padder>
                <View style={{flex: 1, padding: 20}}>
                <ActivityIndicator/>
                </View>
            </Content>
        </Container>
          
          
        )
      }
    
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: '#66D8FF' }} androidStatusBarColor="#66D8FF">
          <Body>
            <Title>Riwayat</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
        <FlatList
         data={this.state.dataSource}
         renderItem={({item}) => 
         <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>           
         <Card style={styles.mb} button>
            <CardItem header bordered>
              <Text>{item.kategori}</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>{item.pesan}</Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>{item.tanggal}</Text>
            </CardItem>
          </Card>
          </TouchableWithoutFeedback>
         }
         keyExtractor={({id}, index) => id}
        />
        </Content>
      </Container>
    );
  }

  actionOnRow(item) {
    this.props.navigation.navigate("DetailRiwayat",{id:item.id});
    //alert(item.id);
 }
}

export default Riwayat;
