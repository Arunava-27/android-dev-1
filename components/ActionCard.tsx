/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(webUrl: string) {
    Linking.openURL(webUrl);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>How to use React Native</Text>
        </View>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2edd6MuqUH13w86kiyQ_ha6U-EOrovmtOSfVufZRz9njRDI8_8sZAzDWsH0GVWOs-XE&usqp=CAU',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBodyContainer}>
          <Text style={styles.cardBodyText} numberOfLines={4}>
            React Native is a JavaScript framework for writing real, natively
            rendering mobile applications for iOS and Android. It’s based on
            React, Facebook’s JavaScript library for building user interfaces,
            but instead of targeting the browser, it targets mobile platforms.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://blogs.prahladinala.in/react-native-101-an-introduction-to-this-popular-framework',
              )
            }>
            <Text style={styles.footerBodyElevated}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite('https://www.linkedin.com/in/arunava-kundu-32375024b/')}>
            <Text style={styles.socialLinkElevated}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

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
  elevatedCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardImage: {
    width: 380,
    height: 200,
    borderRadius: 10,
  },
  cardBodyContainer: {
    flex: 1,
    flexGrow: 1,
    paddingTop: 12,
    paddingHorizontal: 8,
  },
  cardBodyText: {
    fontSize: 16,
    color: '#000',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  // footerBody: {
  //     fontSize: 16,
  //     color: '#000',
  //     backgroundColor: '#e6e6e6',
  // },
  footerBodyElevated: {
    fontSize: 16,
    color: '#000',
    backgroundColor: '#e6e6e6',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  socialLinkElevated: {
    fontSize: 16,
    color: '#000',
    backgroundColor: '#e6e6e6',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
});
