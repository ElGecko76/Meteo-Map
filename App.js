import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

const DEFAULT_COORD = { lat: 48.859268, lng: 2.347060 }

export default function App() {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{ latitude: DEFAULT_COORD.lat, longitude: DEFAULT_COORD.lng, latitudeDelta: 0.2000, longitudeDelta: 0.1000 }}
                scrollEnabled={false}
                liteMode={true}>
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 1
    }
});
