import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, Alert } from 'react-native';
import  PlayPreview  from '../components/PlayPreview'

const URL = 'https://e21c-84-232-165-107.eu.ngrok.io/play';


export const Play: React.FC = ({ navigation }: any) => {
  const [playsList, setPlaysList] = useState([]);

  const fetchPlays = useCallback(async () => {
    const result = await fetch(URL);

    if (result.ok) {
      const plays = await result.json();
      setPlaysList(plays);
    } else {
      alert('There was a problem fetching the plays! Error status: ' + result.status);
    }
  }, []);

  const emptyResponse = () => {
    return (
      <Text style={styles.noItems}>No items available! Try again later</Text>
    )
  }

  useEffect(() => {
    fetchPlays();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Theater's plays:</Text>
      <FlatList
        data={playsList}
        keyExtractor= {(play: any) => play.playId}
        renderItem= { ( play : any ) => (
           <PlayPreview
              onPress={() => navigation.push('PlayDetails', { play: play.item })}
              title={play?.item.playName} 
            />
          )}
        ListEmptyComponent={emptyResponse}
      />

    </View>
  );
};

export default Play; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff'
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 20
  },
  noItems: {
    fontSize: 25,
  }
});