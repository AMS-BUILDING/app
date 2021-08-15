import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../components/Header';
import TermItem from '../components/TermItem';
export default function ApartmentTerm({ navigation }) {
    return <View style={styles.wrapper}>
        <View style={styles.wrapContent}>
            
            <ScrollView>
                <TermItem />
                <TermItem />
                <TermItem />
                <TermItem />
                <TermItem />
            </ScrollView>
        </View>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapNav: {
        backgroundColor: '#666666'
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10
    },
    wrapContent: {
        flex: 1
    },
});