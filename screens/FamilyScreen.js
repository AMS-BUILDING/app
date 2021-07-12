import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import GroupFamily from '../components/GroupFamily';
import Header from '../components/Header';

export default function FamilyScreen({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.container}>
            <View style={styles.wrapHeader}>
                <View style={styles.confirm}>
                    <AntDesign name="arrowleft" size={40} color="white" />
                    <Text style={styles.textHeader}>Gia đình</Text>
                </View>
            </View>
            <ScrollView>
                <GroupFamily />
                <GroupFamily />
                <GroupFamily />
                <GroupFamily />
                <GroupFamily />
            </ScrollView>

        </View>
    </View>
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        flex: 1
    },
    wrapHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#666666',
        marginBottom: 10
    },
    confirm: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textHeader: {
        color: 'white',
        fontSize: 30,
        marginLeft: 10
    },
})