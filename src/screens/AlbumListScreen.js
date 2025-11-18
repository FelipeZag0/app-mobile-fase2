import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, Text } from 'react-native';
import { fetchAlbums } from '../services/api';
import AlbumListItem from '../components/AlbumListItem';

const AlbumListScreen = ({ route, navigation }) => {
    const { userId } = route.params;

    const [albums, setAlbums] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAlbums = async () => {
            try {
                setLoading(true);
                const data = await fetchAlbums(userId);
                setAlbums(data);
            } catch (error) {
                console.error("Erro ao carregar álbuns:", error);
            } finally {
                setLoading(false);
            }
        };

        loadAlbums();
    }, [userId]);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#007aff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={albums}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <AlbumListItem
                        item={item}
                        index={index}
                        onPress={() => {
                            navigation.navigate("PhotoGrid", { albumId: item.id });
                        }}
                    />
                )}
                ListEmptyComponent={<Text style={styles.centerText}>Nenhum álbum encontrado.</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    centerText: { textAlign: 'center', marginTop: 20, color: 'gray' },
});

export default AlbumListScreen;
