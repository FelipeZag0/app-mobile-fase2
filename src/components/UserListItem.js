import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const UserListItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {/* Circulo com a inicial do nome */}
            <View style={styles.initialCircle}>
                <Text style={styles.initialLetter}>{item.name.charAt(0)}</Text>
            </View>

            {/* Nome e Username */}
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.username}>@{item.username}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    initialCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    },
    initialLetter: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    textContainer: {
        flex: 1
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    },
    username: {
        fontSize: 14,
        color: '#666',
        marginTop: 2
    },
});

export default UserListItem;