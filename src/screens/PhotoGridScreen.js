import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, Text, Modal } from 'react-native';
import { fetchPhotos } from '../services/api';
import PhotoGridItem from '../components/PhotoGridItem';
import PhotoDetail from '../components/PhotoDetail';

const PhotoGridScreen = ({ route, navigation }) => {
    const { albumId } = route.params;

    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);


    const [modalVisible, setModalVisible] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

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

    const openModal = (photo) => {
        setSelectedPhoto(photo);
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
        setSelectedPhoto(null);
    }

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
                        onPress={() => openModal(item)}
                    />
                )}
                ListEmptyComponent={<Text style={styles.centerText}>Nenhuma foto encontrada.</Text>}
            />

            <Modal
                visible={modalVisible}
                animationType='slide'
                transparent={false}
                onRequestClose={closeModal}
            >
                <PhotoDetail
                    photo={selectedPhoto}
                    onClose={closeModal}
                />
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    centerText: { textAlign: 'center', marginTop: 20, color: 'gray' },
});

export default PhotoGridScreen;