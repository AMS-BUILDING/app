import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Button, CheckBox, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import HomeImage from '../assets/images/home.png';

export default function AccessCard({ navigation }) {
    return <View style={styles.wrapper}>
        <View style={styles.wrapContent}>
            <ImageBackground source={HomeImage} style={styles.image}>
                <View style={styles.overlay}>
                    <View style={styles.main}>
                        <View style={styles.confirm}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnBack}>
                                <AntDesign name="arrowleft" size={30} color="#fff" />
                            </TouchableOpacity>
                            <View style={styles.wrapText}>
                                <Text style={styles.textConfirm}>Thẻ ra vào</Text>
                            </View>
                        </View>
                        <View style={styles.wrapCard}>
                            <Text style={styles.title}>Căn hộ được cấp 1 thẻ</Text>
                            <View style={styles.groupCard}>
                                <Text style={styles.textCard}>Mã thẻ:</Text>
                                <Text style={styles.textCard}>0361000302156</Text>
                            </View>
                            <View style={styles.groupCard}>
                                <Text style={styles.textCard}>Số thẻ đăng kí thêm:</Text>
                                <NumericInput type='up-down' totalWidth={80} />
                            </View>
                            <View style={styles.groupCard}>
                                <Text style={styles.textCard}>Phí mỗi thẻ:</Text>
                                <Text>50.000đ</Text>
                            </View>
                            <View style={styles.groupCard}>
                                <Text style={styles.textCard}>Tổng phí:</Text>
                                <Text style={styles.textCard}>150.000đ</Text>
                            </View>
                        </View>
                        <Text style={styles.textRule}>Quy định khi đăng kí thẻ ra vào</Text>
                        <View style={styles.wrapCommit}>
                            <CheckBox style={styles.checkbox} />
                            <Text style={styles.textCommit}>Tôi đã đọc và cam kết</Text>
                        </View>
                        <View style={styles.wrapBtn}>
                            <View style={styles.btnConfirm}>
                                <Button title="Đăng kí" color="#006633" onPress={() => navigation.navigate('ServiceQuote')} />
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>

        </View>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapContent: {
        flex: 1,
        position:'relative'
    },
    imageBanner: {
        height: '100%'
    },

    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#161b224d',
        
    },
    textBanner: {
        position: 'absolute',
        left: 15,
        bottom: 25,
        width: '100%',
        zIndex:1
    },
    main: {
        width:'100%',
        height:'100%',
        position:'absolute',
        zIndex:3
    },
    confirm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        height: 100,
        backgroundColor: '#006633',
        width: '100%',
        paddingTop: 30,
        position: 'relative',
        borderBottomColor: '#282828',
        borderBottomWidth: 1,
        borderStyle: 'solid'
    },
    btnBack: {
        position: 'absolute',
        left: 15,
        top: 50
    },
    wrapText: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textConfirm: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: 10
    },
    test: {

        fontSize: 30,
        color: 'white'
    },
    title: {
        fontSize: 20,

        fontWeight: 'bold',
        color: '#9966FF',
        marginBottom: 10
    },
    wrapCard: {
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
        marginBottom: 5,
        backgroundColor: '#fff'
    },
    groupCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    textCard: {
        fontSize: 14
    },
    checkbox: {
        width: 20,
        height: 20,
        borderColor: '#fff',
        color:'#fff'
    },
    textRule: {
        color: '#fff',
        margin: 15,
        textDecorationLine: 'underline',
        fontSize: 14
    },
    wrapCommit: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    textCommit: {
        margin: 15,
        fontSize: 13,
        color: '#fff'
    },
    wrapBtn: {
        padding: 5,
        marginTop: 5,
        borderRadius: 10
    },
    image: {
        resizeMode: "cover",
        position: 'relative',
        height: '100%',
    },
});