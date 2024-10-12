import { Image, StyleSheet, Text, View, ImageSourcePropType, Pressable } from 'react-native'
import React, { useState } from 'react'
import type { PropsWithChildren } from "react";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import One from "../assets/One.png";
import Two from "../assets/Two.png";
import Three from "../assets/Three.png";
import Four from "../assets/Four.png";
import Five from "../assets/Five.png";
import Six from "../assets/Six.png";

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

export default function App() {
  const [imgUrl, setImgUrl] = useState(One);
  const handleRollDice = () => {
    const x = Math.floor(Math.random() * 6) + 1;

    switch (x) {
      case 1:
        setImgUrl(One);
        break;
      case 2:
        setImgUrl(Two);
        break;
      case 3:
        setImgUrl(Three);
        break;
      case 4:
        setImgUrl(Four);
        break;
      case 5:
        setImgUrl(Five);
        break;

      case 6:
        setImgUrl(Six);
        break;

      default:
        setImgUrl(One)
        break;
    }
    ReactNativeHapticFeedback.trigger("impactHeavy", options);

  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={imgUrl} />
      <Pressable onPress={handleRollDice}>
        <Text style={styles.rollDiceBtnText}>Roll The Dice</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});