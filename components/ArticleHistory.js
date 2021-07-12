import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ArticleHistory() {
    return <View style={styles.wrapper}>
        <Text style={styles.title}>Sử dụng dịch vụ bể bơi - 4/6/2021</Text>
        <Text style={styles.desc}>Đã sử dụng dịch vụ bể bơi lúc 15h ngày 5/6/2021</Text>
        <View style={styles.note}>
            <Text style={styles.time}>12 phút trước</Text>
        </View>
    </View>
};

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        padding: 25,
        borderBottomWidth: 2,
        borderBottomColor: 'black'
    },
    title: {
        color: '#9966FF',
     
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10
    },
    desc: {
       
        fontSize: 16,
        marginBottom: 10
    },
    note: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    time: {
        color: '#868686',
        fontSize: 16,
        
    },
});