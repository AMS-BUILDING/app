import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, ImageBackground } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import HomeImage from '../assets/images/home.png';

export default function Parking({ navigation }) {
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
                                <Text style={styles.textConfirm}>Gửi xe</Text>
                            </View>
                        </View>
                        <View style={styles.headerText}>
                            <View style={[styles.wrapItem, styles.active]}>
                                <Text style={styles.textItem}>Ô tô</Text>
                            </View>
                            <View style={[styles.wrapItem, styles.noneBorder]}>
                                <Text style={styles.textItem}>Xe máy</Text>
                            </View>
                            <View style={styles.wrapItem}>
                                <Text style={styles.textItem}>Xe điện</Text>
                            </View>
                        </View>
                        <View style={styles.features}>
                            <ScrollView>
                                <View style={styles.numberCar}>
                                    <Text style={styles.textNumber}>Số lượng xe:</Text>
                                    <NumericInput type='up-down' 
                                    totalWidth={60} 
                                    totalHeight={35} 
                                    iconSize={18}/>
                                </View>
                                <View style={{padding:15}}>
                                    <View style={styles.featureItem}>
                                        <Text style={styles.textNumber}>Xe thứ nhất:</Text>
                                        <NumericInput type='up-down'
                                        totalWidth={60} 
                                        totalHeight={35} 
                                        />
                                    </View>
                                    <View style={styles.featureInput}>
                                        <TextInput placeholder="Loại xe" style={styles.input} />
                                        <TextInput placeholder="Màu xe" style={[styles.input,{marginLeft:10}]} />
                                    </View>
                                    <View style={styles.featureInput}>
                                        <TextInput placeholder="Biển số" style={styles.input} />
                                        <Text style={styles.textPrice}>Phí xe: 1.000.000đ</Text>
                                    </View>
                                </View>
                                <View style={{padding:15}}>
                                    <View style={styles.featureItem}>
                                        <Text style={styles.textNumber}>Xe thứ hai:</Text>
                                        <NumericInput type='up-down'
                                        totalWidth={60} 
                                        totalHeight={35} 
                                        />
                                    </View>
                                    <View style={styles.featureInput}>
                                        <TextInput placeholder="Loại xe" style={styles.input} />
                                        <TextInput placeholder="Màu xe" style={[styles.input,{marginLeft:10}]} />
                                    </View>
                                    <View style={styles.featureInput}>
                                        <TextInput placeholder="Biển số" style={styles.input} />
                                        <Text style={styles.textPrice}>Phí xe: 1.000.000đ</Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={styles.wrapBtn}>
                            <View style={styles.btnConfirm}>
                                <Button title="Xác nhận" color="#006633" onPress={() => navigation.navigate('ServiceQuote')} />
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
        position: 'relative'
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
        zIndex: 1
    },
    image: {
        resizeMode: "cover",
        position: 'relative',
        height: '100%',
    },
    main: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 3
    },
    wrapText: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
    textConfirm: {
        fontWeight: 'bold',
        fontSize: 25,
        color:'#fff'
    },
    test: {
        fontSize: 30,
        color: 'white'
    },
    headerText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'black',
        height:29,
        marginTop:20,
        marginLeft:14,
        marginRight:14
    },
    wrapItem: {
        width: '33.333%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    textItem: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight:'700',
        color:'#fff'
    },
    active: {
        backgroundColor: '#006633',
    },
    noneBorder: {
        borderTopLeftRadius: 0,
        borderBottomStartRadius: 0,
    },
    features: {
        height: 314,
        backgroundColor:'#fff',
        marginTop:0,
        marginLeft:15,
        marginRight:15
    },
    numberCar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        padding: 10
    },
    textNumber: {
        marginRight: 15,
        fontSize: 14
    },
    featureItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    featureInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        width: 150,
        height:40,
        borderRadius: 15,
        paddingLeft:8,
    },
    wrapBtn: {
        padding: 10,
      
        marginTop: 15,
        borderRadius: 10
    },
    textPrice: {
        fontSize: 15,
        fontWeight:'700'
    }
});