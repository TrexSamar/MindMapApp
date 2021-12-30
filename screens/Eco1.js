import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [
    {
      url:
        'https://raw.githubusercontent.com/TrexSamar/assets/main/The%20story%20of%20vaillage%20Palampur.png',
    },
     
  ];

export default class Eco1 extends React.Component{

    
        
      render(){
        return (
          <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
              <ImageViewer imageUrls={images} renderIndicator={() => null} />
            </View>
          </SafeAreaView>
        );
      };
    }
      
      const styles = StyleSheet.create({
        container: {
          backgroundColor: '#F5FCFF',
          flex: 1,
          width: '100%',
          height: '100%',
          resizeMode: 'contain'
        },
      });
    
      
       
    
      