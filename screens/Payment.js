import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Bidv from '../assets/images/bidv.png';
import MoMo from '../assets/images/momo.png';
import Money from '../assets/images/money.png';
import Vietcombank from '../assets/images/vietcombank.png';
import ViettelPay from '../assets/images/viettelpay.png';
import Header from '../components/Header';
import bgScreen from '../assets/images/bgscreen.png';
import { Linking } from 'react-native';
export default function Payment({ navigation }) {
    let openMoMo = () => {
        Linking.openURL("momo://app")
    }
    let openViettelPay = () => {
        Linking.openURL("viettelpay://app")
    }
    return <View style={styles.wrapper}>
        <ImageBackground source={bgScreen} style={styles.image}>
            <View style={[styles.wrapContent, { position: 'absolute', zIndex: 5, width: '100%', height: '100%' }]}>

                <View style={styles.main}>
                    <View>
                        <Text style={styles.title}>Căn hộ 099</Text>
                        <View style={styles.content}>
                            <Text style={styles.textContent}>Nội dung</Text>
                            <Text style={styles.textContent}>Nộp tiền phí dịch vụ</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={[styles.textContent, styles.textColor]}>Tháng </Text>
                            <Text style={[styles.textContent, styles.textColor]}>5</Text>
                        </View>
                        <View style={styles.content}>
                            <Text style={styles.textContent}>Tổng</Text>
                            <Text style={[styles.textContent, styles.textColor]}>10.000.000đ</Text>
                        </View>
                        <Text style={[styles.textContent, styles.textPay]}>Thanh toán qua số tài khoản 0361000302156</Text>
                        <Text style={styles.textContent}>Người thụ hưởng: NGUYỄN VĂN MẠNH</Text>
                        <Text style={{ color: 'white', marginTop: 10 }}>Ngân hàng Vietcombank Vĩnh Phúc</Text>
                        <Text style={{ color: 'white', marginTop: 10 }}>Nội dung thanh toán:</Text>
                        <Text style={{ color: 'white', marginTop: 10, marginBottom: 10 }}>[Mã căn hộ],[Số điện thoại],Nộp phí hàng tháng</Text>
                        <Text style={styles.textContent}>Thanh toán qua ví điện tử</Text>
                        <View style={styles.wrapPayment}>
                            <TouchableOpacity style={styles.wrapPay} onPress={openMoMo}>

                                <Image source={MoMo} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.wrapPay} onPress={openViettelPay}>

                                <Image source={ViettelPay} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

            </View>
            <View style={{
                backgroundColor: '#000', opacity: .5,
                position: "absolute",
                zIndex: 4,
                width: '100%',
                height: '100%'
            }} />
        </ImageBackground >
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapContent: {
        flex: 1
    },
    imageBanner: {
        height: '100%'
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        height: '100%',
        position: 'relative'
    },
    textBanner: {
        position: 'absolute',
        left: 15,
        bottom: 25,
        width: '100%'
    },
    main: {
        padding: 15
    },
    confirm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    textConfirm: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 10
    },
    test: {
        fontSize: 30,
        color: 'white'
    },
    detailList: {
        borderBottomColor: '#666666',
        borderBottomWidth: 2,
        height: 100
    },
    detail: {
        borderColor: '#666666',
        borderWidth: 2,
        padding: 10
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    detailTotal: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    detailText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    wrapBtn: {
        padding: 10,
        marginTop: 15,
        borderRadius: 10
    },
    title: {
        fontSize: 16,
        marginBottom: 10,
        color: 'white'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 2,
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomColor: '#949494'
    },
    textContent: {
        fontSize: 16,
        color: 'white'
    },
    textColor: {
        color: 'white'
    },
    textPay: {
        fontSize: 14,
        marginTop: 10,
        marginBottom: 10
    },
    wrapPay: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    wrapPayment: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
        marginTop: 30
    }
});