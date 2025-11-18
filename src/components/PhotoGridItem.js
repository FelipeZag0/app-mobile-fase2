import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Dimensions, View } from 'react-native';

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const tileSize = screenWidth / numColumns;

const PhotoGridItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        // ADICIONADO: backgroundColor cinza para ver o quadrado mesmo se a imagem falhar
        style={{ width: tileSize, height: tileSize, backgroundColor: '#ccc' }} 
        source={{ uri: item.thumbnailUrl }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 1,
  },
});

export default PhotoGridItem;