import React from "react";
import { StyleSheet, TouchableOpacity, Text, StatusBar } from "react-native";
import { Play } from "../screen/Play.screen";

export const PlayPreview = ({ title, onPress }: any) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    );
  };

  export default PlayPreview;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#c91827',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 50
    },
    title: {
      fontSize: 32,
      color: 'white',
    },
    mainTitle: {
      fontSize: 38,
      fontWeight: 'bold',
    }
  });