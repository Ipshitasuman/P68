import * as React from 'react';
import { StyleSheet, Text, Image , View } from 'react-native';

export default class Fbook extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Image
          style={styles.imi}
          source={{
            uri:
              'https://pyxis.nymag.com/v1/imgs/11d/582/c7b0487c6e26db4f5be6eb679e3620d2ce-facebook.rsquare.w1200.jpg',
          }}
        />
              <Text style ={{fontSize:30, fontFamily: 'cursive', fontWeight: 'bold', fontAlign:'center', marginTop:80, marginLeft: 50 }}>
                Facebook
              </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12eaaf',
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
