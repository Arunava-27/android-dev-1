import React from 'react';

import {View, ScrollView, StyleSheet} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

function App() {
  return (
    <ScrollView style={styles.container}>
      {/* <Text style={styles.textColour}>App</Text> */}
      <View style={styles.spacing}>
        <FlatCards />
      </View>
      <View>
        <ElevatedCards />
      </View>
      <View style={styles.spacing}>
        <FancyCard />
      </View>
      <View>
        <ContactList />
      </View>
      <View style={styles.spacing}>
        <ActionCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textColour: {
    color: '#000',
  },
  spacing: {
    marginVertical: 10,
  },
});

export default App;
