import React, { useEffect, useState } from 'react';
import { Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 

import { AchievementContainer, AchievementBox, AchievementImage, AchievementLabel, ModalContainer, ModalWrapper, 
  ModalImage, ModalTitle, ModalDescription } from './styles';
import hiddenAchievement from '../../../assets/img/achievements/00.png';

export default function Achievements({}) {

  const [actualAchievements, setActualAchievements] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState({})
  
  async function getAchievements() {
    const stringValue = await AsyncStorage.getItem('@achievements_Key');
    const array = stringValue.split('-');
    setActualAchievements(array);
  }

  function openModal(achievement) {
    setSelectedAchievement(achievement);
    setModalVisible(true);
  }

  useEffect(() => {
    getAchievements();
  }, []);

  const achievements = [
    {
      id: 1,
      title: '142',
      description: 'Esse com certeza é o verdadeiro final desse jogo.', 
      image: require('../../../assets/img/achievements/01.png'),
      done: actualAchievements.some(achievement => {return achievement == 1})
    },
    {
      id: 2,
      title: '-----',
      description: 'Lorem ipsum dolor sit met.', 
      image: require('../../../assets/img/achievements/01.png'),
      done: actualAchievements.some(achievement => {return achievement == 2}),
    },
    {
      id: 3,
      title: '',
      description: '',
      image: null,
      done: actualAchievements.some(achievement => {return achievement == 3})
    }
  ] 

  return (<>
    <Modal animationType="fade" transparent visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
      <ModalContainer onPress={() => {setModalVisible(false)}}>
      <ModalWrapper>
        <ModalImage source={selectedAchievement.done ? selectedAchievement.image : hiddenAchievement} />
        <ModalTitle>{selectedAchievement.title}</ModalTitle>
        <ModalDescription>{selectedAchievement.description}</ModalDescription>
      </ModalWrapper>
      </ModalContainer>
    </Modal>

    {achievements.map(achievement => {
      return (
        <AchievementContainer key={achievement.id}
          onPress={() => {openModal(achievement)}}>
          <AchievementBox>
            <AchievementImage resizeMode="contain" source={achievement.done ? achievement.image : hiddenAchievement}/>
          </AchievementBox>
          <AchievementLabel>
            {achievement.title}
          </AchievementLabel>
        </AchievementContainer>
      )
    })}
  </>)
}