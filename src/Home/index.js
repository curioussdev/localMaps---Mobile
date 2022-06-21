import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Platform, TouchableOpacity, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import { categories } from "./categories";


export default function Home(){
return(
    <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
            <Text style={styles.title}> Bem-Vindo ao LocalMaps</Text>
            <Text style={styles.subTitle}> Encontre no mapa um ponto de comercio local</Text>
       </View>

       <MapView style={styles.map}>
       
            <Marker coordinate={{
                latitude: 0,
                longitude: 0
            }} />
       
        </MapView>

        <View>
        <FlatList 
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            alignItems: 'center'
        }}
        renderItem={({ item }) => (
            <TouchableOpacity 
            key={ item.key }>
                <Image source={item.image} />
                <Text>{item.label}</Text>
            </TouchableOpacity> 
        )}
        />   
        </View>

    </SafeAreaView>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff,"
    },
    headerContainer: {
        padding: 20,
        paddingTop: Platform.OS === 'android' ? 50 : 0,
    },
    title: {
        fontSize: 24,
        fontWeight: "400",
        color: "#322153",
    },
    subTitle: {
        fontSize: 15,
        fontWeight: "400",
        color: "#aaaaaa",
    },
    map: {
        flex: 1, 
        backgroundColor: "#fff"
    }
});