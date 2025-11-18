import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AlbumListItem = ({ item, index, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.numberBox}>
                <Text style={styles.numberText}>{index + 1}</Text>
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.title} numberOfLines={1}>
                    {item.title}
                </Text>
                <Text style={styles.albumLabel}>Álbum nº {item.id}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    numberBox: {
        width: 50,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    numberText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
        textTransform: 'capitalize',
    },
    albumLabel: {
        fontSize: 14,
        color: 'gray',
    },
});

export default AlbumListItem;