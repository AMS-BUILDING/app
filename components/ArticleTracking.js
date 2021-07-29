import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ArticleTracking({ navigation }) {
    return <View style={styles.wrapper}>
        <Text style={styles.title}>Yêu cầu sửa chữa - 3/6/2021</Text>
        <Text style={styles.desc}>Yêu cầu sửa chữa điều hòa căn hộ A-103. Đang chờ phê duyệt</Text>
        <View style={styles.note}>
            <Text style={styles.time}>12 phút trước</Text>
            <View style={styles.more}>
                <Text style={styles.textRead} onPress={() => navigation.navigate('DetailProcess')}>Xem tiến trình</Text>
                <Text style={styles.textCancle}>Hủy</Text>
            </View>
        </View>
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
    },
    note: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    time: {
        color: '#868686',
        fontSize: 13,
       
    },
    more: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textRead: {
       
        color: '#9966FF',
        fontSize: 13,
        marginRight: 10
    },
    textCancle: {
    
        color: '#9966FF',
        fontSize: 13,
    }
});