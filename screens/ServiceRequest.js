import React from 'react';
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import BannerImage from '../assets/images/banner1.png';
import Repair from '../assets/images/ic1.png';
import Pool from '../assets/images/ic10.png';
import Parking from '../assets/images/ic2.png';
import Clean from '../assets/images/ic3.png';
import Laundry from '../assets/images/ic4.png';
import Party from '../assets/images/ic5.png';
import Covid from '../assets/images/ic6.png';
import Card from '../assets/images/ic7.png';
import BBQ from '../assets/images/ic8.png';
import Tennis from '../assets/images/ic9.png';
import Header from '../components/Header';

export default function ServiceRequest({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <View style={styles.banner}>
                <Image source={BannerImage} style={styles.imageBanner} />
                <View style={styles.overlay}></View>
                <View style={styles.textBanner}>
                    <Text style={styles.test}>Yêu cầu dịch vụ</Text>
                </View>
            </View>
            <View style={styles.features}>
                <View style={styles.listItem}>
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Repair')} activeOpacity={0.8}>
                        <Image source={Repair} />
                        <Text style={{ marginTop: 10,  fontSize: 14 }} >Sửa chữa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Parking')} activeOpacity={0.8}>
                        <Image source={Parking} />
                        <Text style={{ marginTop: 10, fontSize: 14 }} >Gửi xe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ApartmentCleaning')} activeOpacity={0.8}>
                        <Image source={Clean} />
                        <Text style={{ marginTop: 10, fontSize: 14 }} >Vệ sinh</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Laundry')} activeOpacity={0.8}>
                        <Image source={Laundry} />
                        <Text style={{ marginTop: 10,  fontSize: 14 }} >Giặt là</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Party')} activeOpacity={0.8}>
                        <Image source={Party} />
                        <Text style={{ marginTop: 10,fontSize: 14 }} >Đặt tiệc</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Covid')} activeOpacity={0.8}>
                        <Image source={Covid} />
                        <Text style={{ marginTop: 10,  fontSize: 14 }} >Covid-19</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('AccessCard')} activeOpacity={0.8}>
                        <Image source={Card} />
                        <Text style={{ marginTop: 10, fontSize: 14 }} >Thẻ ra vào</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('BBQ')} activeOpacity={0.8}>
                        <Image source={BBQ} />
                        <Text style={{ marginTop: 10, fontSize: 14 }} >BBQ</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Tennis')} activeOpacity={0.8}>
                        <Image source={Tennis} />
                        <Text style={{ marginTop: 10,  fontSize: 14 }} >Tennis</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Pool')} activeOpacity={0.8}>
                        <Image source={Pool} />
                        <Text style={{ marginTop: 10, fontSize: 14}} >Hồ bơi</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FootballPitche')} activeOpacity={0.8}>
                        <Image source={Pool} />
                        <Text style={{ marginTop: 10, fontSize: 14 }} >Sân bóng</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
    banner: {
        position: 'relative',
        height: 150,
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 80,
        backgroundColor: 'black',
        opacity: 0.4,
    },
    textBanner: {
        position: 'absolute',
        left: 15,
        bottom: 25,
        width: '100%'
    },
    test: {
        fontSize: 20,
        fontWeight:'700',
        color: 'white'
    },
    features: {
        paddingTop: 15,
    },
    listItem: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    item: {
        width: '25%',
        height: 80,
        borderColor: '#666666',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 10,
        marginLeft:14,
        marginRight:14,
        
    }
});