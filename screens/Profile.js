import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesoneIcon from 'react-native-vector-icons/FontAwesome5';
import OctiIcons from 'react-native-vector-icons/Octicons';
import { COLORS, SIZES, FONTS, icons, images } from "../constants"

export const Profile = () => {

    const [, set] = useState();

    return (

        <ScrollView style={styles.container} >

            <TouchableOpacity style={{
                backgroundColor: COLORS.primary, paddingVertical: '7%',
                paddingHorizontal: '10%',
                flexDirection: 'row', justifyContent: 'space-between',
                marginVertical: '5%',
                width: '85%', alignSelf: 'center', borderRadius: 10
            }} >

                <Icon name="account-circle" style={{ alignSelf: 'center', }} size={50} color={'white'} />

                <View>
                    <Text style={{ ...FONTS.body5, color: 'white' }} >Jimmy Sullivan</Text>
                    <Text style={{ ...FONTS.h4, color: 'white' }} >+839-327-237</Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginVertical: '5%' }}>
                <FontAwesoneIcon name="money-bill-alt" size={25} style={{marginRight:'3%'}} color={COLORS.primary} />
                <Text style={{ ...FONTS.body5, color: COLORS.gray,  flex: 2 }} >Balance</Text>

                <Text style={{ ...FONTS.body5, color: COLORS.gray, alignSelf:'center', flex: 0.5 }} >$28.33</Text>
                <Icon name="chevron-right" size={30} color={COLORS.gray} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginVertical: '5%' }}>
                <Icon name="qr-code" size={25} style={{marginRight:'3%'}} color={COLORS.primary} />
                <Text style={{ ...FONTS.body5, color: COLORS.gray, flex: 2 }} >QR Code</Text>

              
                <Icon name="chevron-right" size={30} color={COLORS.gray} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginVertical: '5%' }}>
                <Icon name="lock" size={25} style={{marginRight:'3%'}} color={COLORS.primary} />
                <Text style={{ ...FONTS.body5, color: COLORS.gray, flex: 2 }} >Change Password</Text>

             
                <Icon name="chevron-right" size={30} color={COLORS.gray} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginVertical: '5%' }}>
                <Icon name="fingerprint" size={25} style={{marginRight:'3%'}} color={COLORS.primary} />
                <Text style={{ ...FONTS.body5, color: COLORS.gray, flex: 2 }} >Fingerprint</Text>

             
                <Icon name="chevron-right" size={30} color={COLORS.gray} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginVertical: '5%' }}>
                <Icon name="email" size={25} style={{marginRight:'3%'}} color={COLORS.primary} />
                <Text style={{ ...FONTS.body5, color: COLORS.gray, flex: 1 }} >Email</Text>

             
                <Text style={{ ...FONTS.body5, color: COLORS.gray, alignSelf:'center', width:'100%', flex: 1 }} >sullivanjuli@gmail.com</Text>
                <Icon name="chevron-right" size={30} color={COLORS.gray} />
            </TouchableOpacity>

            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', marginVertical: '10%', backgroundColor:COLORS.lightGreen, justifyContent:'space-between', padding:'7%', borderRadius:10 }}>
                <OctiIcons name="sign-out" size={35} style={{marginRight:'3%', flex:2}} color={COLORS.primary} />
            

             
                <Text style={{ ...FONTS.h4, color: COLORS.primary, alignSelf:'center', width:'100%', flex: 0.7 }} >Sign Out</Text>
             
            </TouchableOpacity>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop:'5%',
        paddingHorizontal: '8%',
    }
})