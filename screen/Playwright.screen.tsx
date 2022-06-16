import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, StatusBar, Alert } from 'react-native';
import  PlayPreview  from '../components/PlayPreview'

const URL = 'https://e21c-84-232-165-107.eu.ngrok.io/playwright';


export const Playwright: React.FC = ({ navigation }: any) => {
  const [playwrightsList, setPlaywrightsList] = useState([]);

  const fetchPlays = useCallback(async () => {
    const result = await fetch(URL);

    if (result.ok) {
      const playwrights = await result.json();
      setPlaywrightsList(playwrights);
    } else {
      alert('There was a problem fetching the playwrights! Error status: ' + result.status);
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
      <Text style={styles.mainTitle}>Theater's Playwrights:</Text>
      <FlatList
        data={playwrightsList}
        keyExtractor= {(playwright: any) => playwright.playId}
        renderItem= { ( playwright : any ) => (
          <View style= { styles.item }>
             <Text style={ styles.title }> 
             {playwright?.item.name} 
             </Text>
          </View>
        )}
        ListEmptyComponent={emptyResponse}
      />
    </View>
  );
};

export default Playwright; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#fff'
  },
  item: {
    backgroundColor: '#c91827',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 50
  },
  title: {
    fontSize: 32,
    color: 'white',
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