import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import BackArrow from '../Svgs/Backward';
import Button from '../Abstracts/Button';
import MenuDot from '../Svgs/MenuDot';
import EditPage from '../Svgs/EditPage';
import AddPerson from '../Svgs/AddPerson';
import Messege from '../Svgs/Messege';
// import TopTabBar from './ProfileTabBar';
import Scale from '../Functions/Scale';

const subtitlefontsize = Dimensions.get('window').width * 0.06;
const fontsize = Dimensions.get('window').width * 0.045;
const fontsize2 = Dimensions.get('window').width * 0.036;
const TopIconSize = Scale(375, 22, 22);
const PImgSize = Scale(375, 96, 96);
const btnSize = Scale(375, 154, 50);
const btniconsize = Scale(375, 22, 22);

const ProfileHead = ({ navigation, own }) => {
    return (
        <>
            <View style={[styles.statusbar, styles.row]}>
                <Button
                    TextIcon={BackArrow}
                    width={null}
                    texticonsize={TopIconSize.WIDTH}
                    onPress={() => navigation.goBack()}
                />
                {own === true ? (
                    <Text style={styles.statusbartext}>Profile</Text>
                ) : null}
                {own === false ? (
                    <>
                        <View style={styles.spacing} />
                        <MenuDot
                            width={TopIconSize.Width}
                            height={TopIconSize.Width}
                            color={'black'}
                        />
                    </>
                ) : null}
            </View>
            <View>
                <View style={styles.center}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
                        }}
                    />
                </View>
                <Text style={[styles.center, styles.title]}>Ashfak Sayem</Text>
                <View style={[styles.center, styles.row]}>
                    <View>
                        <Text style={[styles.center, styles.subtitle]}>350</Text>
                        <Text style={[styles.center, styles.followtxt]}>Following</Text>
                    </View>
                    <View style={styles.divider} />
                    <View>
                        <Text style={[styles.center, styles.subtitle]}>346</Text>
                        <Text style={[styles.center, styles.followtxt]}>Followers</Text>
                    </View>
                </View>
                <View
                    style={[
                        styles.row,
                        styles.center,
                        styles.btncontainer,
                        { marginLeft: own === false ? '-25%' : "18%" },
                    ]}>
                    {own === true ? (
                        <View>
                            <Button
                                text={'Edit Profile'}
                                borderWidth={2}
                                width={"62%"}
                                TextIcon={EditPage}
                                TextIconSize={20}
                                fontSize={18}
                                paddingVertical={8}
                                color={'#5669FF'}
                                borderColor={'#5669FF'}
                                style={{ alignContent: 'center', }}
                                justifyContent={"space-between"}
                            />
                        </View>
                    ) : null}
                    {own === false ? (
                        <>
                            <Button
                                text={'Follow'}
                                width={"80%"}
                                height={btnSize.Height}
                                TextIcon={AddPerson}
                                TextIconSize={btniconsize.Width}
                                fontSize={fontsize}
                                // paddingHorizontal={fontsize}
                                paddingVertical={0}
                                color={'white'}
                                backgroundColor={'#5669FF'}
                                justifyContent={"space-around"}
                            />
                            <Button
                                text={'Messages'}
                                borderWidth={1}
                                width={"85%"}
                                height={btnSize.Height}
                                TextIcon={Messege}
                                fontSize={fontsize}
                                TextIconSize={btniconsize.Width}
                                color={'#5669FF'}
                                paddingVertical={0}
                                // paddingHorizontal={fontsize}
                                borderColor={'#5669FF'}
                                justifyContent={"space-around"}
                            />
                        </>
                    ) : null}
                </View>
            </View >
            {/* <TopTabBar /> */}
        </>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    center: {
        alignSelf: 'center',
    },
    image: {
        width: PImgSize.Width,
        height: PImgSize.Height,
        borderRadius: 100,
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    statusbar: {
        marginBottom: 15,
    },
    statusbartext: {
        flex: 1,
        fontSize: 24,
        paddingHorizontal: 10,
        color: '#000',
    },
    title: {
        fontSize: subtitlefontsize,
        color: '#000',
        fontWeight: '500',
        paddingVertical: 15,
    },
    subtitle: {
        fontSize: fontsize,
        color: '#000',
        fontWeight: '500',
    },
    followtxt: {
        fontSize: fontsize2,
    },
    divider: {
        width: 1,
        height: '70%',
        backgroundColor: 'black',
        marginHorizontal: 20,
    },
    btncontainer: {
        width: '70%',
        marginVertical: 20,
    },
});

export default ProfileHead;
