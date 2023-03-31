/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: '1',
      name: 'Arunava Kundu',
      phone: '1234567890',
      status: 'Hey there! I am using WhatsApp.',
      email: 'drarunkundu22@gmail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/43717403?v=4',
    },
    {
      uid: '2',
      name: 'Sayan Sardar',
      phone: '1234567890',
      status: 'Hey there! I am using WhatsApp.',
      email: 'drarunkundu@gmail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/43717403?v=4',
    },
    {
      uid: '3',
      name: 'Diganth Bhowmik',
      phone: '1234567890',
      status: 'Hey there! I am using WhatsApp.',
      email: 'arunavakundu014@gmail.com',
      imageUrl: 'https://avatars.githubusercontent.com/u/43717403?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(contact => (
          <View key={contact.uid} style={styles.contactCard}>
            <Image
              source={{
                uri: contact.imageUrl,
              }}
              style={styles.contactImage}
            />
            <View>
              <Text style={styles.contactName}>{contact.name}</Text>
              <Text style={styles.userStatus}>{contact.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
  container: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  contactCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    width: 370,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 10,
    marginBottom: 3,
    shadowColor: '#000',
    padding: 4,
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
},
  contactImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginHorizontal: 10,
  },
  contactName: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: 8,
  },
  userStatus: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#758283',
    paddingHorizontal: 8,
  },
});
