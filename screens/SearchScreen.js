import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const API_KEY = 'YOUR_API_KEY';

export default function SearchScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchNews = () => {
    axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`)
      .then(res => setResults(res.data.articles))
      .catch(err => console.log(err));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Cari berita..."
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />
      <Button title="Cari" onPress={searchNews} />
      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detail', { article: item })}
          >
            <Text style={styles.item}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, padding: 8, marginBottom: 10 },
  item: { marginVertical: 8 }
});
