import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Logo from '../assets/images/logo.png';

export default function Login({ navigation }) {
    return <View style={styles.wrapper}>
        <View style={styles.container}>
            <Image source={Logo} style={styles.imageLogo} />
            <Text style={styles.title}>RESIDENT APP</Text>
            <View style={styles.formGroup}>
                <FontAwesome name="user" size={30} style={styles.iconForm} />
                <TextInput placeholder="Tên đăng nhập/SĐT" type="text" style={styles.inputText} />
            </View>
            <View style={styles.formGroup}>
                <FontAwesome name="lock" size={30} color="#6B6B6B" />
                <TextInput placeholder="Mật khẩu" type="text" style={styles.inputText} secureTextEntry={true} />
                <Ionicons name="eye-off" size={30} color="#6B6B6B" style={styles.iconEyes} />
            </View>
            <View style={{ marginLeft: 'auto', marginBottom: 20 }}>
                <Text style={styles.forgotPass}>Quên mật khẩu?</Text>
            </View>
            <View style={styles.btnLogin}>
                <Button title="Đăng nhập" color="white" style={styles.textLogin} onPress={() => navigation.navigate('Feedback')} />
            </View>
            <View style={styles.wrapFooter}>
                <Text style={styles.textFooter}>Yêu cầu cung cấp tài khoản</Text>
            </View>
        </View>
    </View>
};

const styles = StyleSheet.create({
    wrapper: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        width: 350,
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
        marginBottom: 20
    },
    iconForm: {
        color: '#6B6B6B',
    },
    inputText: {
        flex: 1,
        padding: 10,
        fontSize: 18,
      
    },
    forgotPass: {
       
        fontWeight: 'bold',
        fontSize: 20,
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
    textFooter: {
        fontSize: 20,
    
        fontWeight: 'bold',
        marginTop: 20,
    }
})