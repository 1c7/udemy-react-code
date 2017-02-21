import React, { Component } from 'react'
import {Text,View} from 'react-native'
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component{
  componentWillMount() {
    // fetch("https://jsonplaceholder.typicode.com/photos")
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     console.log(responseData);
    //   })
    //   .done();
  }
  renderAlbum(){
    return this.state.albums.map(album => <Text>{album.text}</Text>)
  }
  render() {
    return(
      <View>
        {this.renderAlbum}
      </View>
    )
  }
};

export default AlbumList