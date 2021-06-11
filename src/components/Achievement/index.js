
import React from 'react';
import { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

import { AchievementView, AchievementTitle, AchievementDescription } from './styles';

export default function Achievement({}) {
  // const offset = useSharedValue(-200);
  const offset = useSharedValue(0);
  console.log(offset);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {translateX: offset.value}
    ]
  }))

  function showAchievement() {
    offset.value = withTiming(0, {
      duration: 500,
      easing: Easing.bezier(0.6, 0.1, 0.75, 1)
    });
    setTimeout(() => {
      offset.value = withTiming(-200, {
        duration: 500,
        easing: Easing.bezier(0.6, 0.1, 0.75, 1)
      });  
    }, 3000)
  }

  return (
    <AchievementView style={animatedStyle}>
      <AchievementTitle>Conquista adquirida!</AchievementTitle>
      <AchievementDescription>
        Sério?
      </AchievementDescription>
    </AchievementView>
  );
};