import * as React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default class Insta extends React.Component{
    render(){
        return(
            <View style={styles.container}>
              <Image
          style={styles.imi}
          source={{
            uri:
              'https://parentzone.org.uk/sites/default/files/Instagram%20logo.jpg',
          }}
        />

<Text style ={{fontSize:30, fontFamily: 'cursive', fontWeight: 'bold', fontAlign:'center', marginTop:80, marginLeft: 40 }}>
                Instagram
              </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6c6d5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imi: {
    width: 150,
    height: 150,
    marginLeft: 45,
    marginTop:100
  },
});
