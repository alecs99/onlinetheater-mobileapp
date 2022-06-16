import React from 'react';
import { StyleSheet, View, Text, Share, Button, TouchableOpacity } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

export const PlayDetails: React.FC = ( { route } : any ) => {
  const { play } : any = route.params;
  const baseMessage = 'Check out this theater play I found on online theater app: https://youtu.be/';

  const share = async (shareMessage: string) => {
      try {
          await Share.share({
              message: shareMessage,
          });
      } catch (error) {
          alert('Could not share');
      }
  }


  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={200}
        play={false}
        videoId={play.videoId}
      />
      <View style={[styles.card, styles.shadowProp]}>
        <Text style={styles.heading}>
            { play.playName } 
        </Text>
         <Text style={ styles.cardText }>
             { play.genre }</Text>
         <Text style={ styles.cardText }>
             { play.playwright.name }</Text>
         <Text style={ styles.cardText }>
             { play.description} </Text>
         <Text style={ styles.cardText }>
              Duration: <Text style={styles.bold}> { play.duration } minutes </Text></Text>
        </View>
      <TouchableOpacity
        onPress={() => share(baseMessage + play.videoId)}
        style={styles.button}>
        <Text style={styles.text}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlayDetails;


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#c91827',
  },
  text: {
      color: 'white',
      fontWeight: 'bold'
  },
  heading: {
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 20,
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
  cardText: {
      marginBottom: 13,
      fontSize: 17
  },
  bold: {
      fontWeight: 'bold'
  }
});