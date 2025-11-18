import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const fetchUsers = async () => {
    try {
        const response = await api.get('/users');
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
        throw error;
    }
};

export const fetchAlbums = async (userId) => {
    try {
        const response = await api.get(`/albums`, { params: { userId } });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar álbuns:', error);
        throw error;
    }
};

export const fetchPhotos = async (albumId) => {
    try {
        const response = await api.get(`/photos`, { params: { albumId } });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar fotos:', error);
        throw error;
    }
};

export default api;