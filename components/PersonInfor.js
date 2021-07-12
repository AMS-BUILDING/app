import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function PersonInfor() {
    return <View style={styles.wrapper}>
        <Text style={styles.title}>Ban bảo vệ chung cư</Text>
        <Text style={styles.desc}>Người quản lí: Đỗ Văn Lợi</Text>
        <Text style={styles.desc}>SĐT: 0913109093</Text>
    </View>
};

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    title: {
        color: '#9966FF',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    },
    desc: {
        fontSize: 14,
        marginBottom: 10
    }
});