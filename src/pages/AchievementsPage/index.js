import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container } from '../Menu/styles';
import { AchievementsTitle, AchievementsScroll, AchievementsWrapper } from './styles';
import Achievements from '../../components/Achievements';

export async function setAchievements(achievement) {
  let achievements = await AsyncStorage.getItem('@achievements_Key');
  if(achievements !== null) {
    const achievementsArray = achievements.split('-');
    if(!achievementsArray.some(element => {return achievement == element})) {
      achievements = `${achievements + '-' + achievement}`;
      await AsyncStorage.setItem('@achievements_Key', achievements);
    }
  } else {
    await AsyncStorage.setItem('@achievements_Key', '0');
    setAchievements(achievement);
  }
}

export default function AchievementsPage() {

  useEffect(() => {
  
  }, []);

  return(
    <Container>
      <AchievementsTitle>Conquistas</AchievementsTitle>
      <AchievementsScroll>
        <AchievementsWrapper>
          <Achievements />
        </AchievementsWrapper>
      </AchievementsScroll>
    </Container>
  )
} 