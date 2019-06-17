import React from "react";
import { Root, Icon } from "native-base";
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";

//import halaman
import SplashPage from "./screens/splashscreen/"; //yg di import nama class
import pilihLaporan from "./screens/pilihLaporan/";
import Laporan from "./screens/laporan";
import LoginView from "./screens/login";
import DetailRiwayat from "./screens/detailRiwayat";
import DaftarView from "./screens/daftar";
import EditView from "./screens/edit";


//import navigator
import Beranda from "./screens/navigator/beranda";
import Telpon from "./screens/navigator/telpon";
import Riwayat from "./screens/navigator/riwayat";
import Akun from "./screens/navigator/akun";

const TabNavigator = createBottomTabNavigator(
  {
    Beranda: { //nama route
      screen: Beranda, //nama halaman
      navigationOptions: {
        tabBarLabel: 'Beranda',
        tabBarIcon: ({tintColor}) =>
        <Icon type="Entypo" name="home" />
      }
    },
    Telpon: {
      screen: Telpon,
      navigationOptions: {
        tabBarLabel: 'Telpon',
        tabBarIcon: ({tintColor}) =>
        <Icon type="Entypo" name="phone" />
      }
    },
    Riwayat: {
      screen: Riwayat,
      navigationOptions: {
        tabBarLabel: 'Riwayat',
        tabBarIcon: ({tintColor}) =>
        <Icon type="Entypo" name="book" />
      }
    },
    Akun: {
      screen: Akun,
      navigationOptions: {
        tabBarLabel: 'Akun',
        tabBarIcon: ({tintColor}) =>
        <Icon name="person" />
      }
    },
  },
  {
    tabBarOptions: {
        showLabel: true, // hide labels
        activeTintColor: '#F8F8F8', // active icon color
        inactiveTintColor: '#586589',  // inactive icon color
        style: {
            backgroundColor: '#66D8FF' // TabBar background
        }
    }
  },
)

const AppNavigator = createStackNavigator(
  {
    Navigator: { screen: TabNavigator },
    pilihLaporan: { screen: pilihLaporan },
    SplashPage: { screen: SplashPage },
    Laporan: { screen: Laporan },
    LoginView: { screen: LoginView },
    DetailRiwayat: { screen: DetailRiwayat },
    DaftarView: { screen: DaftarView },
    EditView: { screen: EditView },
   
  },
  {
    initialRouteName: "SplashPage",
    headerMode: "none",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default () =>
  <Root>
    <AppContainer />
  </Root>;
