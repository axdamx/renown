/* eslint-disable react-native/no-inline-styles */
// @ts-nocheck to disable type checking per file
import React from 'react';
import {
    View,
    Text,
    FlatList,
    ImageBackground,
    Pressable,
    ScrollView,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { IMAGENAME } from '../images';
import { mockAuctionData } from '../constants/mockData';

const ProfileScreen: React.FC<Props> = ({}) => {
    const renderCard = ({ item }) => (
        <Pressable onPress={() => console.log('item', item)}>
            <ImageBackground
                source={IMAGENAME}
                resizeMode='contain'
                style={{
                    backgroundColor: 'pink',
                    borderRadius: 35,
                    margin: 15,
                    padding: 15,
                    height: 345,
                    width: 345,
                    justifyContent: 'space-between',
                    overflow: 'hidden',
                }}>
                <View
                    style={{
                        //   backgroundColor: 'yellow',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                    <View
                        style={{
                            backgroundColor: 'grey',
                            opacity: 1,
                            borderRadius: 45,
                            padding: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}>
                        <View
                            style={{
                                backgroundColor: 'black',
                                height: 50,
                                width: 50,
                                borderRadius: 25,
                            }}
                        />
                        <View
                            style={{
                                flexDirection: 'column',
                                marginHorizontal: 10,
                                alignSelf: 'center',
                            }}>
                            <Text> {item.auctionName} </Text>
                            <Text style={{ marginVertical: 4 }}>
                                {' '}
                                {item.authorName}{' '}
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            backgroundColor: 'black',
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <IonIcon
                            name={'heart-outline'}
                            size={20}
                            color={'white'}
                        />
                    </View>
                </View>
                <View
                    style={{
                        backgroundColor: 'purple',
                        borderRadius: 45,
                        padding: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                    }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text> Current Bid </Text>
                        <Text> $24,000.00 </Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text> Ending in </Text>
                        <Text> 10h17m30s </Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: 'black',
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <IonIcon name={'flash'} size={20} color={'white'} />
                    </View>
                </View>
            </ImageBackground>
        </Pressable>
    );

    return (
        <ScrollView style={{}}>
            <Text style={{ fontWeight: 'bold', fontSize: 40, padding: 15 }}>
                Profile
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 40, padding: 15 }}>
                Top Collection
            </Text>
            <FlatList
                data={mockAuctionData}
                renderItem={renderCard}
                horizontal={true}
                decelerationRate={0}
                // snapToInterval={'100%'} //your element width
                snapToAlignment={'center'}
                // initialScrollIndex={1}
                showsHorizontalScrollIndicator={false}
                // snapToEnd={true}
            />
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 15,
                }}>
                <Text style={{ fontWeight: 'bold', fontSize: 40 }}>
                    Top Artist{' '}
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                    View all{' '}
                </Text>
            </View>
        </ScrollView>
    );
};

export default ProfileScreen;
