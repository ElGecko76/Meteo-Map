import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { SearchBar } from 'react-native-elements';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { connect } from "react-redux";

const DEFAULT_COORD = { lat: 48.859268, lng: 2.347060 }

class SearchScreen extends Component {
    state = { search: "" }

    updateSearch = search => {
        this.setState({ search })
    }

    submitSearch = () => {
        console.log(this.state.search);
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={{ latitude: DEFAULT_COORD.lat, longitude: DEFAULT_COORD.lng, latitudeDelta: 0.2000, longitudeDelta: 0.1000 }}
                    scrollEnabled={false}
                    liteMode={true} />

                <SearchBar
                    lightTheme
                    onChangeText={this.updateSearch}
                    value={this.state.search}
                    onSubmitEditing={this.submitSearch}
                    placeholder="Type your city..."
                    containerStyle={{
                        position: "absolute",
                        bottom: hp("50%"),
                        left: wp("5%"),
                        width: wp("90%")
                    }} />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 1
    }
});

const mapStateToProps = (store) => {
    return {
        currentWeather: store.weather.data
    }
}

export default connect(mapStateToProps, undefined)(SearchScreen)