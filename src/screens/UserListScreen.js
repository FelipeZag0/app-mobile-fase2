import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import UserListItem from '../components/UserListItem';
import { fetchUsers } from '../services/api';

const UserListScreen = ({ navigation }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const loadUsers = async () => {
            try {
              setLoading(true);
              const data = await fetchUsers();
              setUsers(data);
              setError(null);
            } catch (_e) {
              setError('Erro ao carregar usuários. Verifique sua conexão.');
            } finally {
              setLoading(false);
            }
        };

        loadUsers();
    }, []);

    const filteredUsers = useMemo(() => {
      if (!searchQuery) return users;

      return users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }, [searchQuery, users]);

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
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar usuário..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <FlatList
          data={filteredUsers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <UserListItem
              item={item}
              onPress={() => navigation.navigate('AlbumList', { userId: item.id })}
            />
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>Nenhum usuário encontrado.</Text>
          }
        />
      </View>
    );
};

const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      backgroundColor: '#fff',
    },
    center: { 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
    },
    searchContainer: {
      padding: 10,
      backgroundColor: '#f8f9fa',
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    searchInput: {
      backgroundColor: '#fff',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ddd',
      fontSize: 16,
    },
    emptyText: {
      textAlign: 'center',
      marginTop: 20,
      color: '#666',
    },
});

export default UserListScreen;