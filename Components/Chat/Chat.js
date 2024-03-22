import React from 'react';
import { View, Text, Image } from 'react-native';
import NavBar from '../Main/NavBar/NavBar';
import TopBar from '../Main/TopBar/TopBar';

const Chat = () => {
    return (
        <View>
            {/* Top Bar */}
            <TopBar style={styles.topBar}/>

            {/* Navigation Bar */}
            <View style={styles.navBar}>
                <Text style={styles.navBarText}>Chat</Text>
            </View>

            {/* Image */}
            <Image
                source={require('./path/to/your/image.png')}
                style={styles.image}
            />
        </View>
    );
};

const styles = {
    topBar: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topBarText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    navBar: {
        height: 50,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navBarText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 20,
    },
};

export default Chat;
