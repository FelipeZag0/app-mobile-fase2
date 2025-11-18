import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import UserListItem from '../components/UserListItem';
import { fetchUsers } from '../services/api';

const UserListScreen = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadUsers = async () => {
            try {
              setLoading(true);
              const data = await fetchUsers();
              setUsers(data);
              setError(null);
            } catch (_e) {
              setError('Erro ao carregar usuários.Verifique sua conexão.');
            } finally {
              setLoading(false);
            }
        };

        loadUsers();
    }, []);

    if (loading) {
      return (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#007aff" />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.center}>
          <Text style={{ color: 'red' }}>{error}</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <UserListItem
              item={item}
              onPress={() => {
                navigation.navigate('AlbumList', { userId: item.id });
              }}
            />
          )}
        />
      </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default UserListScreen;