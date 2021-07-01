import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { AirbnbRating, Avatar, Button } from 'react-native-elements';
import BannerImage from '../assets/images/banner1.png';
import AvatarEmp from '../assets/images/sontungmtp.png';
import Header from '../components/Header';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';


export default function DetailProcess({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.wrapContent}>
            <View style={styles.banner}>
                <Image source={BannerImage} style={styles.imageBanner} />
                <View style={styles.overlay}></View>
                <View style={styles.textBanner}>
                    <Text style={styles.test}>Yêu cầu chờ xử lý</Text>
                </View>
            </View>
            <View style={styles.main}>
                <TouchableOpacity style={styles.confirm} onPress={() => navigation.goBack()} activeOpacity={0.8}>
                    <AntDesign name="arrowleft" size={25} color="#9966FF" />
                    <Text style={styles.textConfirm}>Theo dõi tiến trình</Text>
                </TouchableOpacity>
                <Text style={{  fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>Thay vòi nước</Text>

                <View style={styles.infoEmpl}>
                    <View style={styles.avatar}>
                        <Avatar
                            rounded
                            size="xlarge"
                            source={AvatarEmp}
                        />
                    </View>
                    <View style={styles.wrapRate}>
                        <Text style={{  fontSize: 14 }}>Nhân viên thực hiện</Text>
                        <View style={styles.staff}>
                            <Text style={styles.nameEmp}>Đỗ Văn Lợi</Text>
                            <Text style={{ fontSize: 14, color: "#9966FF" }} >Nhân viên kĩ thuật</Text>
                        </View>
                        <AirbnbRating reviews={[]}
                        count={5}
                        defaultRating={4}
                        size={20}
                        />
                    </View>

                </View>
                <View style={styles.wrapBtn}>
                    <Button
                        title="Gọi điện"
                        buttonStyle={btnStyle}
                    />
                    <Button
                        title="Nhắn tin"
                        buttonStyle={btnStyle}
                    />
                </View>
            </View>
        </View>
    </View>
}
const btnStyle = StyleSheet.create({
    marginLeft: 20,
    borderRadius: 10,
    width: 150,
})

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapRate:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    avatar:{
        flex:1,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
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
    main: {
        padding: 15
    },
    confirm: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    textConfirm: {
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 10
    },
    test: {
        fontSize: 20,
        fontWeight:'700',
        color: 'white'
    },
    infoEmpl: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    
    staff: {
        borderBottomWidth: 1,
        marginTop: 5,
        paddingBottom: 5
    },
    nameEmp: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#9966FF',
        marginBottom: 5
    },
    wrapBtn: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    }
});