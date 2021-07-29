import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
import Header from '../components/Header';

export default function Market({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.container}>
            <View style={styles.wrapHeader}>
                <View style={styles.confirm}>
                    <AntDesign name="arrowleft" size={40} color="white" />
                    <Text style={styles.textHeader}>Đi chợ</Text>
                </View>
                <AntDesign name="shoppingcart" size={40} color="white" onPress={() => navigation.navigate('Cart')} />
            </View>
            <View style={styles.wrapSearch}>
                <Searchbar
                    placeholder="Search"
                />
            </View>
            <ScrollView>
                <View style={styles.wrapBtn}>
                    <Button
                        title="Thực phẩm tươi"
                        buttonStyle={buttonText}
                    />
                    <Button
                        title="Rau"
                        buttonStyle={buttonText}
                    />
                </View>
                <View style={styles.wrapBtn}>
                    <Button
                        title="Đồ dùng cá nhân"
                        buttonStyle={buttonText}
                    />
                    <Button
                        title="Đồ uống"
                        buttonStyle={buttonText}
                    />
                </View>
                <View style={styles.wrapBtn}>
                    <Button
                        title="Mỹ phẩm"
                        buttonStyle={buttonText}
                    />
                    <Button
                        title="Đồ chơi"
                        buttonStyle={buttonText}
                    />
                </View>
                <View style={styles.wrapBtn}>
                    <Button
                        title="Đồ ăn nhanh"
                        buttonStyle={buttonText}
                    />
                    <Button
                        title="Thẻ điện thoại"
                        buttonStyle={buttonText}
                    />
                </View>
                <View style={styles.wrapBtn}>
                    <Button
                        title="Quần áo"
                        buttonStyle={buttonText}
                        onPress={() => navigation.navigate('MarketFilter')}
                    />
                    <Button
                        title="Giày dép"
                        buttonStyle={buttonText}
                    />
                </View>
            </ScrollView>
        </View>
    </View>
};

const buttonText = StyleSheet.create({
    width: 180,
    padding: 15
});

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    container: {
        flex: 1
    },
    wrapHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#666666',
        marginBottom: 10
    },
    confirm: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textHeader: {
        color: 'white',
        fontSize: 30,
        marginLeft: 10
    },
    wrapSearch: {
        padding: 15
    },
    wrapBtn: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})