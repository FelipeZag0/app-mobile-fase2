import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import PhotoGridItem from '../components/PhotoGridItem';
import { fetchPhotos } from '../services/api';

const PhotoGridScreen = ({ route, navigation }) => {
    const { albumId } = route.params;

    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPhotos = async () => {
            try {
                setLoading(true);
                const data = await fetchPhotos(albumId);
                setPhotos(data);
            } catch (error) {
                console.error("Erro ao carregar fotos:", error);
            } finally {
                setLoading(false);
            }
        };
        
        loadPhotos();
    }, [albumId]);

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
                data={photos}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                renderItem={({ item }) => (
                    <PhotoGridItem
                        item={item}
                        onPress={() => {
                            console.log("Foto clicada:", item.title);
                        }}
                    />
                )}
                ListEmptyComponent={<Text style={styles.centerText}>Nenhuma foto encontrada.</Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    centerText: { textAlign: 'center', marginTop: 20, color: 'gray' },
});

export default PhotoGridScreen;