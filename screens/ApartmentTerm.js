import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import TermItem from '../components/TermItem';
export default function ApartmentTerm({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <View style={styles.wrapNav}>
                <View style={styles.nav}>
                    <AntDesign name="arrowleft" size={35} color="white" />
                    <Text style={styles.title}>Điều khoản chung cư</Text>
                </View>
            </View>
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
      
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 10
    },
    wrapContent: {
        flex: 1
    },
});