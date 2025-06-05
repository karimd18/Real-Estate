import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import { contactInfoData } from '../../data/data';

const ContactInfo = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{uri: item.image}} style={styles.image} resizeMode="cover" />
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={contactInfoData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#0D0D0D',
    borderRadius: 8,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.75)',
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default ContactInfo;
