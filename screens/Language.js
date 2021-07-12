import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../components/Header';
import { Checkbox, Button } from 'react-native-paper';
export default function Language({ navigation }) {
    return <View style={styles.wrapper}>
        <Header navigation={navigation} />
        <View style={styles.container}>
            <View style={styles.wrapHeader}>
                <View style={styles.confirm}>
                    <AntDesign name="arrowleft" size={40} color="white" />
                    <Text style={styles.textHeader}>Chọn ngôn ngữ</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, padding: 5 }}>
                <Text style={{  fontSize: 18 }}>English</Text>
                <Checkbox status="unchecked" color="red" />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, padding: 5 }}>
                <Text style={{  fontSize: 18 }}>Tiếng Việt</Text>
                <Checkbox status="checked" color="red" />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, padding: 5 }}>
                <Text style={{  fontSize: 18 }}>Tiếng nhật</Text>
                <Checkbox status="unchecked" color="#9966FF" />
            </View>
            <Button mode="contained" style={{ marginTop: 20, backgroundColor: '#9966FF', padding: 10 }}>
                Hoàn thành
            </Button>
        </View>
    </View>
};

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
})