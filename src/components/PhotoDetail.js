import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const PhotoDetail = ({ photo, onClose }) => {
    if (!photo) return null;

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>

            <Image
                style={styles.image}
                source={{ uri: photo.url }}
                resizeMode="contain"
            />

            <View style={styles.infoContainer}>
                <Text style={styles.label}>Título:</Text>
                <Text style={styles.title}>{photo.title}</Text>

                <View style={styles.row}>
                    <View>
                        <Text style={styles.label}>ID da Foto:</Text>
                        <Text style={styles.value}>{photo.id}</Text>
                    </View>

                    <View style={{ marginLeft: 40 }}>
                        <Text style={styles.label}>ID do Álbum:</Text>
                        <Text style={styles.value}>{photo.albumId}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        },
    closeButton: {
        padding: 20,
        alignSelf: 'flex-start',
    },
    closeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    image: {
        width: '100%',
        height: 300,
        backgroundColor: '#f0f0f0',
    },
    infoContainer: {
        padding: 20,
    },
    label: {
        fontSize: 12,
        color: '#888',
        marginBottom: 4,
        fontWeight: 'bold',
        marginTop: 15,
    },
    title: {
        fontSize: 18,
        color: '#333',
        textTransform: 'capitalize',
    },
    row: {
        flexDirection: 'row',
        marginTop: 10,
    },
    value: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default PhotoDetail;
     