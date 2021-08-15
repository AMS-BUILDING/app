import { Entypo, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import HomeImage from '../assets/images/home.png';

export default function ServiceRequest({ navigation }) {
    // const token = useSelector(state => state.user?.token)
    // let [data, setData] = useState();
    // useEffect(() => {
    //     search()
    // }, [])
    // let search = async () => {
    //     let path = '/landlord/service_request/list';
    //     let resp = await API.authorizedJSONGET(path, token);
    //     if (resp.ok) {
    //         let response = await resp.json();
    //         setData(response)
    //     }
    // }
    return (
        <>
            <View style={styles.wrapper}>
                <ImageBackground source={HomeImage} style={styles.image}>

                    <View style={[styles.wrapContent, { position: 'absolute', zIndex: 5, width: '100%', height: '100%' }]}>
                        <View style={styles.features}>
                            <View style={styles.listItem}>
                                <View style={{ width: 90, marginRight: 45 }}>
                                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Repair')} activeOpacity={0.8}>
                                        <MaterialIcons name="home-repair-service" size={35} color="white" />
                                    </TouchableOpacity>
                                    <Text style={{ marginTop: 5, fontSize: 14, color: '#fff', textAlign: 'center', marginLeft: 14, marginRight: 14, width: '100%' }} >Sửa chữa</Text>
                                </View>
                                <View style={{ width: 90, marginRight: 45 }}>
                                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Parking')} activeOpacity={0.8}>
                                        <FontAwesome5 name="parking" size={35} color="white" />
                                    </TouchableOpacity>
                                    <Text style={{ marginTop: 5, fontSize: 14, color: '#fff', textAlign: 'center', marginLeft: 14, marginRight: 14, width: '100%' }} >Gửi xe</Text>
                                </View>
                                <View style={{ width: 90, marginRight: 45 }}>
                                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ApartmentCleaning')} activeOpacity={0.8}>
                                        <MaterialIcons name="cleaning-services" size={35} color="white" />

                                    </TouchableOpacity>
                                    <Text style={{ marginTop: 5, fontSize: 14, color: '#fff', textAlign: 'center', marginLeft: 14, marginRight: 14, width: '100%' }} >Vệ sinh</Text>
                                </View>
                                <View style={{ width: 90, marginRight: 45 }}>
                                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Laundry')} activeOpacity={0.8}>
                                        <MaterialIcons name="local-laundry-service" size={35} color="white" />

                                    </TouchableOpacity>
                                    <Text style={{ marginTop: 5, fontSize: 14, color: '#fff', textAlign: 'center', marginLeft: 14, marginRight: 14, width: '100%' }} >Giặt là</Text>
                                </View>
                                <View style={{ width: 90, marginRight: 45 }}>
                                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Party')} activeOpacity={0.8}>
                                        <MaterialCommunityIcons name="silverware-clean" size={35} color="white" />

                                    </TouchableOpacity>
                                    <Text style={{ marginTop: 5, fontSize: 14, color: '#fff', textAlign: 'center', marginLeft: 14, marginRight: 14, width: '100%' }} >Đặt tiệc</Text>
                                </View>
                                <View style={{ width: 90, marginRight: 45 }}>
                                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Covid')} activeOpacity={0.8}>
                                        <FontAwesome5 name="briefcase-medical" size={35} color="white" />

                                    </TouchableOpacity>
                                    <Text style={{ marginTop: 5, fontSize: 14, color: '#fff', textAlign: 'center', marginLeft: 14, marginRight: 14, width: '100%' }} >Covid-19</Text>
                                </View>
                                <View style={{ width: 90, marginRight: 45 }}>
                                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('AccessCard')} activeOpacity={0.8}>
                                        <Entypo name="credit-card" size={35} color="white" />

                                    </TouchableOpacity>
                                    <Text style={{ marginTop: 5, fontSize: 14, color: '#fff', textAlign: 'center', marginLeft: 14, marginRight: 14, width: '100%' }} >Thẻ ra vào</Text>
                                </View>
                                <View style={{ width: 90, marginRight: 45 }}>
                                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('BBQ')} activeOpacity={0.8}>
                                        <MaterialCommunityIcons name="food-fork-drink" size={35} color="white" />

                                    </TouchableOpacity>
                                    <Text style={{ marginTop: 5, fontSize: 14, color: '#fff', textAlign: 'center', marginLeft: 14, marginRight: 14, width: '100%' }} >BBQ</Text>
                                </View>
                                <View style={{ width: 90, marginRight: 45 }}>
                                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Tennis')} activeOpacity={0.8}>
                                        <Ionicons name="tennisball" size={35} color="white" />

                                    </TouchableOpacity>
                                    <Text style={{ marginTop: 5, fontSize: 14, color: '#fff', textAlign: 'center', marginLeft: 14, marginRight: 14, width: '100%' }} >Tennis</Text>
                                </View>
                                <View style={{ width: 90, marginRight: 45 }}>
                                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Pool')} activeOpacity={0.8}>
                                        <FontAwesome5 name="swimming-pool" size={35} color="white" />

                                    </TouchableOpacity>
                                    <Text style={{ marginTop: 5, fontSize: 14, color: '#fff', textAlign: 'center', marginLeft: 14, marginRight: 14, width: '100%' }} >Hồ bơi</Text>
                                </View>
                                <View style={{ width: 90, marginRight: 45 }}>
                                    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FootballPitche')} activeOpacity={0.8}>
                                        <Ionicons name="football" size={35} color="white" />

                                    </TouchableOpacity>
                                    <Text style={{ marginTop: 5, fontSize: 14, color: '#fff', textAlign: 'center', marginLeft: 14, marginRight: 14, width: '100%' }} >Sân bóng</Text>
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
                </ImageBackground>

            </View>
        </>
    )

}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    wrapContent: {
        flex: 1
    },
    image: {
        resizeMode: "cover",
        justifyContent: "center",
        height: '100%',
        position: 'relative'
    },
    imageBanner: {
        height: '100%'
    },
    banner: {
        position: 'relative',
        height: 150,
        backgroundColor: '#006633'
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
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    test: {
        fontSize: 20,
        fontWeight: '700',
        color: 'white',
        marginLeft: 15
    },
    features: {
        paddingTop: 15,
    },
    listItem: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        width: '100%',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderRadius: 10,
        marginLeft: 14,
        marginRight: 14,
        marginTop: 20,
        backgroundColor: '#006633',
    }
});