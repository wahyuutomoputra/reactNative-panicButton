import React, { Component } from "react";
import { Image, Dimensions, Alert, AsyncStorage, ActivityIndicator, View } from "react-native";
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
  Right,
  Body,
  Item,
  Form,
  Input,
  Label
} from "native-base";
import styles from "./styles";
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";


const deviceWidth = Dimensions.get("window").width;
const logo = require("../../../assets/logo.png");
const cardImage = require("../../../assets/drawer-cover.png");



class Laporan extends Component {
  
  
  
    constructor(props) {
        super(props);
        this.state = {
                      srcImg: '',
                      uri: '',
                      fileName: '',
                      loading: false,
                      avatarSource: require("../../../assets/drawer-cover.png"),
                      id: '',
                      latitude: '',
                      longitude: '',
                      kategori: '',
                      pesan: '',
                     };
      }
      

      componentDidMount() {
        const kat = this.props.navigation.getParam('keterangan');
        AsyncStorage.getItem('id', (error, result) => {
          if (result) {
            this.setState({ id: result, kategori: kat });
          }
        });
        LocationServicesDialogBox.checkLocationServicesIsEnabled({
            message: "<h2>Gunakan Lokasi ?</h2>Aplikasi ini memerlukan GPS untuk mengetahui lokasi anda<br/><a href='#'>Learn more</a>",
            ok: "YA",
            cancel: "TIDAK",
            enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
            showDialog: true, // false => Opens the Location access page directly
            openLocationServices: true, // false => Directly catch method is called if location services are turned off
            preventOutSideTouch: false, //true => To prevent the location services popup from closing when it is clicked outside
            preventBackClick: false, //true => To prevent the location services popup from closing when it is clicked back button
            providerListener: true // true ==> Trigger "locationProviderStatusChange" listener when the location state changes
        }).then(function(success) {
            // success => {alreadyEnabled: true, enabled: true, status: "enabled"} 
                navigator.geolocation.getCurrentPosition((position) =>  {
                    let initialPosition = JSON.stringify(position);
                    console.log(initialPosition);
                    //console.log(initialPosition.coords.latitude)
                    this.setState({ latitude: JSON.stringify(position.coords.latitude), longitude: JSON.stringify(position.coords.longitude) });
                    // fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + initialPosition.latitude + ',' + initialPosition.longitude + '&key=AIzaSyBoxYCfBO539SeKX4ETllWpoGrQS4XwIKM&callback=initMap')
                    //         .then((response) => response.json())
                    //         .then((responseJson) => {
                    //             console.log('ADDRESS GEOCODE is BACK!! => ' + JSON.stringify(responseJson));
                    // })
                    //AIzaSyB2qTHwtv4xaIVXH_SWQNG3PKrwhMpm5BA
                }, error => console.log(error), { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 });
            }.bind(this)
        ).catch((error) => {
            console.log(error.message);
            Alert.alert('Perhatian', 'Mohon aktifkan GPS anda', [{text: 'Ok'}]);
            this.props.navigation.goBack();
        });
        
        // DeviceEventEmitter.addListener('locationProviderStatusChange', function(status) { // only trigger when "providerListener" is enabled
        //     console.log(status); //  status => {enabled: false, status: "disabled"} or {enabled: true, status: "enabled"}
        // });

    }
    
    componentWillUnmount() {
        // used only when "providerListener" is enabled
        LocationServicesDialogBox.stopListener(); // Stop the "locationProviderStatusChange" listener.
    } 

      

      // componentDidMount() {
      //   navigator.geolocation.getCurrentPosition(
      //     (position) => {
      //       alert(position.coords.latitude);
      //     },
      //     (error) => { console.log(error); },
      //     { enableHighAccuracy: true, timeout: 30000 }
      //   )
      // }
    
      choosePicture = () => {
        var ImagePicker = require('react-native-image-picker');
        var options = {
            title: 'Pilih Gambar',
            storageOptions: {
              skipBackup: true,
              path: 'images'
            },
            maxWidth: 1200,
            maxHeight: 1200,

        };
        ImagePicker.launchCamera(options, (response) => {
            // console.log('Response = ', response);
            // console.log('Response = ', response.value);
            // if (response.didCancel) {
            //   console.log('User cancelled image picker');
            // }
            // else if (response.error) {
            //   console.log('ImagePicker Error: ', response.error);
            // }
            // else if (response.customButton) {
            //   console.log('User tapped custom button: ', response.customButton);
            // }
            // else {
              const source = { uri: 'data:image/jpeg;base64,' + response.data };
              console.log(response.fileName);
              this.setState({
                srcImg: { uri: response.uri },
                uri: response.uri,
                fileName: response.fileName,
                avatarSource: source
              });
            //}
        });
    }
    uploadPicture = () => {
        console.log('mulai upload');
        this.setState  ({loading : true })
     
        const data = new FormData();

        data.append('id', this.state.id); // you can append anyone.
        data.append('latitude', this.state.latitude);
        data.append('longitude', this.state.longitude);
        data.append('kategori', this.state.kategori);
        data.append('pesan',this.state.pesan);
        data.append('fileToUpload', {
          uri: this.state.uri,
          type: 'image/jpeg',
          name: this.state.fileName,
        });
        console.log(data);
        const url= "http://192.168.43.229/ciDamkar/React/laporan"
        fetch(url, {
          method: 'post',
          body: data
        })
        .then((response) => response.json())
        .then((responseJson) =>
          {
            console.log(responseJson);
            if(responseJson.hasil=="berhasil"){
              alert('laporan telah dikirim');
            }
            this.setState  ({
                loading : false
               })
          });
      }
  render() {
    if(this.state.loading){
      <View style={{flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center',}}>
      <ActivityIndicator/>
      </View>
    }
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: '#66D8FF' }} androidStatusBarColor="#66D8FF">
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Kirim Laporan</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem bordered>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>{this.state.kategori}</Text>
                  <Text note>Mei 13, 2019</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem>
              <Body>
                <Image
                  style={{
                    alignSelf: "center",
                    height: 270,
                    resizeMode: "cover",
                    width: deviceWidth / 1.18,
                    marginVertical: 5
                  }}
                  source={this.state.avatarSource}
                />
                <Button block style={{ margin: 15, marginTop: 10, backgroundColor: '#66D8FF' }} onPress={this.choosePicture}>
                    <Text>Ambil Foto</Text>
                </Button>
               
                <Item floatingLabel>
                  <Label>Pesan</Label>
                  <Input onChangeText={pesan => this.setState({pesan})}/>
                </Item>
                
              </Body>
            </CardItem>
          </Card>
          <Button block style={{ margin: 15, marginTop: 10, backgroundColor: '#66D8FF' }} onPress={this.uploadPicture} rounded>
            <Text>Kirim Laporan</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}



export default Laporan;
