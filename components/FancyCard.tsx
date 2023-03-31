/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{uri: 'https://www.holidify.com/images/bgImages/PHUKET.jpg'}}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Phuket</Text>
          <Text style={styles.cardLabel}>City in Phuket Island, Thailand</Text>
          <Text style={styles.cardDescription}>
            Phuket City, on Phuket Island, is the capital of Thailand’s Phuket
            Province. In the Old Town, Thalang Road is lined with colorful
            19th-century shophouses and Sino-Portuguese buildings. Built in 1903
            by a wealthy tin merchant, Baan Chinpracha mansion has Italian floor
            tiles, shuttered windows and antique furniture.
          </Text>
          <Text style={styles.cardFooter}> 12 mins away </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: 8,
  },
  card: {
    height: 400,
    width: 380,
    borderRadius: 10,
    backgroundColor: '#e1f8fb',
    marginVertical: 12,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardElevated: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    width: 380,
    height: 200,
    borderRadius: 10,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingTop: 12,
    paddingHorizontal: 8,
  },
  cardTitle: {
    marginTop: 2,
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardLabel: {
    fontSize: 16,
    color: '#000',
  },
  cardDescription: {
    fontSize: 14,
    color: '#000',
    flexShrink: 1,
    marginTop: 8,
  },
  cardFooter: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
});
