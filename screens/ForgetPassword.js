import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Logo from '../assets/images/logo.png';

export default function ForgetPassword() {
    return <View style={styles.wrapper}>
        <View style={styles.container}>
            <Image source={Logo} style={styles.imageLogo} />
            <Text style={styles.title}>RESIDENT APP</Text>
            <View style={styles.formGroup}>
                <FontAwesome name="user" size={30} style={styles.iconForm} />
                <TextInput placeholder="Tên đăng nhập/SĐT" type="text" style={styles.inputText} />
            </View>
            <View style={styles.btnLogin}>
                <Button title="Gửi" color="white" style={styles.textLogin} />
            </View>
        </View>
        <View style={styles.wrapFooter}>
            <Text style={styles.textFooter}>Yêu cầu cung cấp tài khoản</Text>
        </View>
    </View>
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        width: 300,
        marginLeft: 'auto',
        marginRight: 'auto',
        alignItems: 'center',

    },
    imageLogo: {
        width: 250,
        height: 250
    },
    title: {
        color: '#9966FF',
      
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 30
    },
    formGroup: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomColor: '#6B6B6B',
        borderBottomWidth: 2,
        marginBottom: 30
    },
    iconForm: {
        color: '#6B6B6B',
    },
    inputText: {
        flex: 1,
        padding: 10,
        fontSize: 18,
      
    },
    btnLogin: {
        width: '100%',
        backgroundColor: '#9966FF',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20

    },
    textLogin: {
       
        fontSize: 20
    },
    wrapFooter: {
        padding: 30
    },
    textFooter: {
        fontSize: 20,
       
        fontWeight: 'bold',
        marginTop: 20,
    }
})