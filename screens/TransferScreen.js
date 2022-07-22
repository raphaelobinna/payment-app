import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS, SIZES, FONTS, icons, images } from "../constants"


export const TransferScreen = ({ navigation }) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: false,
            title: '',

            headerLeft: () => (<TouchableOpacity style={{ flexDirection: 'row', paddingLeft: '10%', justifyContent: 'space-between' }} onPress={() => navigation.goBack()} >
                <Icon name="arrow-back" size={25} color={COLORS.primary} />
                <Text style={{ color: COLORS.primary, ...FONTS.h3, alignSelf: 'center', }} >Transfer</Text>
            </TouchableOpacity>)
        });
    }, [navigation]);

    const [, set] = useState();

    return (

        <ScrollView style={styles.container} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                <View>
                    <Text style={{ ...FONTS.h2 }} >Where</Text>
                    <Text style={{ ...FONTS.h2 }} >To Send?</Text>
                </View>

                <Icon name="qr-code" style={{ alignSelf: 'center' }} size={30} color={'black'} />

            </View>

            <TouchableOpacity style={{
                backgroundColor: COLORS.lightyellow, paddingVertical: '4%',
                paddingHorizontal: '10%',
                flexDirection: 'row', justifyContent: 'space-between',
                marginVertical: '5%',
                width: '90%', alignSelf: 'center', borderRadius: 10
            }} >

                <Image
                    source={icons.wallet}
                    resizeMode="contain"
                    style={{
                        height: 30,
                        width: 30,
                        alignSelf: 'center',
                        tintColor: COLORS.yellow
                    }}
                />

                <View>
                    <Text style={{ ...FONTS.body5 }} >Transfer your money</Text>
                    <Text style={{ ...FONTS.h4 }} >Wallet to Wallet</Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity style={{
                backgroundColor: COLORS.lightGreen, paddingVertical: '4%',
                paddingHorizontal: '10%',
                flexDirection: 'row', justifyContent: 'space-between',
                marginVertical: '5%',
                width: '90%', alignSelf: 'center', borderRadius: 10
            }} >

                <Image
                    source={icons.wallet}
                    resizeMode="contain"
                    style={{
                        height: 30,
                        width: 30,
                        alignSelf: 'center',
                        tintColor: COLORS.primary
                    }}
                />

                <View>
                    <Text style={{ ...FONTS.body5 }} >Transfer your money</Text>
                    <Text style={{ ...FONTS.h4 }} >Wallet to Bank</Text>
                </View>

            </TouchableOpacity>

            <Text style={{ ...FONTS.h3 }} >Recent Transaction</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: '5%' }} >

                <TouchableOpacity style={{
                    backgroundColor: COLORS.lightGreen, paddingVertical: '4%',
                    paddingHorizontal: '8%',
                    flexDirection: 'column', justifyContent: 'space-between',
                    marginVertical: '5%',
                    alignSelf: 'center', borderRadius: 10
                }} >

                    <Icon name="account-circle" style={{ alignSelf: 'center',marginBottom:'5%' }} size={40} color={'black'} />


                    <View>
                        <Text style={{ ...FONTS.body5, textAlign:'center' }} >Don Rosinate</Text>
                        <Text style={{ ...FONTS.h4 }} >****83848</Text>
                    </View>

                    <View style={{
                        backgroundColor: '#fff', paddingVertical: '5%',
                        paddingHorizontal: '10%',
                        flexDirection: 'column', justifyContent: 'space-between',
                        marginVertical: '5%',
                        alignSelf: 'center', borderRadius: 10
                    }} >
                        <Text style={{...FONTS.body4, color:COLORS.primary}} >+$0.17</Text>

                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={{
                    backgroundColor: COLORS.lightRed, paddingVertical: '5%',
                    paddingHorizontal: '8%',
                    flexDirection: 'column', justifyContent: 'space-between',
                    marginVertical: '5%',
                    alignSelf: 'center', borderRadius: 10
                }} >

                    <Icon name="account-circle" style={{ alignSelf: 'center',marginBottom:'5%' }} size={40} color={'black'} />


                    <View>
                        <Text style={{ ...FONTS.body5, textAlign:'center' }} >Amanada Steel</Text>
                        <Text style={{ ...FONTS.h4 }} >****83848</Text>
                    </View>

                    <View style={{
                        backgroundColor: '#fff', paddingVertical: '5%',
                        paddingHorizontal: '10%',
                        flexDirection: 'column', justifyContent: 'space-between',
                        marginVertical: '5%',
                        alignSelf: 'center', borderRadius: 10
                    }} >
                        <Text style={{...FONTS.body4, color:COLORS.red}} >-$1.17</Text>

                    </View>

                </TouchableOpacity>

            </View>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: '8%',
    }
})