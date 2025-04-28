import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Linking } from 'react-native';

export default function DetailScreen({ route }) {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      <Text style={styles.title}>{article.title}</Text>
      <Text style={styles.content}>{article.content || 'Konten tidak tersedia.'}</Text>
      <Text style={styles.link} onPress={() => Linking.openURL(article.url)}>Baca Selengkapnya</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  image: { width: '100%', height: 200, borderRadius: 10 },
  title: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  content: { fontSize: 16 },
  link: { color: 'blue', marginTop: 20 }
});
