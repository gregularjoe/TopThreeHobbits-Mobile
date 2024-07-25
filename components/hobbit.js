import { Image, Text } from 'react-native';
import { useContext, useState } from 'react';
import {HobbitContext} from './HobbitContext.js';

export default function Hobbit( props ) {
    console.log("ad")

    return (
        <>
            <Text style={{fontSize: 30}}>{props.hobbits[props.hobbitIndex].name}</Text>
            <Image source={props.image}
                style={
                    {
                        width: 250,
                        height: 250,
                        borderRadius: 100
                    }
                }
            />
            <Text style={{fontSize: 17, marginHorizontal: 5}}>Actor: {props.hobbits[props.hobbitIndex].actor}</Text>
            <Text style={{fontSize: 17, marginHorizontal: 5}}>Best Friend: {props.hobbits[props.hobbitIndex].bestFriend}</Text>
            <Text style={{fontSize: 17, marginHorizontal: 20}}>Best Quote: {props.hobbits[props.hobbitIndex].bestLine}</Text>
            {

            }
        </>
    );
}