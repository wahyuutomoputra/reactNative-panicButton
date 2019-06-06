import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body } from "native-base";
import { FlatList, ActivityIndicator, View, TouchableWithoutFeedback  } from 'react-native';


export default class Riwayat extends Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    if(this.state.isLoading){
      return(
        <Content padder>
          <View style={{flex: 1, padding: 20}}>
            <ActivityIndicator/>
          </View>
        </Content>
        
      )
    }
    return (
      <Content padder>
        <View style={{flex: 1, paddingTop:20}}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => 
            <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
                <View>
                    <Text>ID: {item.id}</Text>
                    <Text>Title: {item.title}</Text>
                </View>

            </TouchableWithoutFeedback>
            }
            keyExtractor={({id}, index) => id}
          />
        </View>
      </Content>
    );
  }

  actionOnRow(item) {
    alert(item.title);
 }
}
