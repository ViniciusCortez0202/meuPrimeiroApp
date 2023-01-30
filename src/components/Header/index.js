import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ name, onSearch }) {
    return (

        <View style={styles.header}>

            <View style={styles.start}>
                <Ionicons size={35} color="" name='chevron-back' />
                <Text style={styles.title}>{name}</Text>
            </View>

            <View style={styles.end}>
                <Ionicons style={styles.search} onPress={onSearch} size={30} color="" name='search-sharp' />
                <Ionicons size={30} color="" name='ellipsis-vertical' />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    header: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: '#f2f5f3',
        paddingHorizontal: 5,
    },
    title: {
        fontSize: 20,
        marginStart: 5
    },
    start: {
        flexDirection: "row",
        alignItems: 'center',

    },
    end: {
        flexDirection: "row",
        padding: 10
    },
    search: {
        marginEnd: 10
    }

});