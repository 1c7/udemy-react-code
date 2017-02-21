import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  MapView,
  Navigator
} from 'react-native';

import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'

const App = () => {
  return (
    <View>
      <Header headerText={'Albulm'}></Header>
      <AlbumList/>
    </View>
  )
}

AppRegistry.registerComponent('AwesomeProject', () => App);
