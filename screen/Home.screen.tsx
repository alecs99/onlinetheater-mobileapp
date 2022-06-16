import React, { useRef, useEffect } from 'react';
import { Component } from 'react';
import { StyleSheet, View, Text, Animated } from 'react-native';
import { Image } from 'react-native';


export const Home: React.FC = () => {
  const fadeImage = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeImage, {
      toValue: 1,
      duration: 2800,
      useNativeDriver: true
    }).start();
  };

    useEffect(() => {
      fadeIn();
  }, [])

  return (
    <Animated.View style={{flex: 1, opacity:fadeImage} }>
        <View style={[styles.card, styles.shadowProp]}>
          <Text style={styles.heading}>
            Welcome to Online theater!
          </Text>
          <Text>
          Online theater is the app where you can watch your favourite plays.
        </Text>
        </View>
        <Image
            style={styles.image}
            source = {require('../assets/theater.jpg')} />
    </Animated.View>
  );
};


const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 13,
      },
      card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
      },
      shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      image: {
          width: '95%',
          height: '80%',
          justifyContent: 'center',
          marginLeft: '3%',
          flex: 1,
          borderRadius: 50
      }
});