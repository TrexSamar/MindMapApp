import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const images = [
    {
      url:
        'https://raw.githubusercontent.com/TrexSamar/assets/main/assets/Socialism%20in%20Europe%20and%20the%20Russian%20Revolution.png',
    },
     
  ];

  

export default class History2 extends React.Component{

    
        
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
    
      
       
    
      