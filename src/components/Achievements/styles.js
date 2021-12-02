import styled from 'styled-components';
import Animated from 'react-native-reanimated';
import normalize from '../../utils/normalize';

export const AchievementView = styled(Animated.View)`
  min-width: 50%;
  /* max-width: 200px; */
  padding: 10px;
  height: 60px;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 50px;
  left: -1px;
  border-bottom-width: 3px;
  border-color: #EA048D;
  border-top-right-radius: 5px;
`

export const AchievementTitle = styled.Text`
  font-family: 'sans-serif-condensed';
  font-size: 20px;
  font-weight: bold;
`

export const AchievementDescription = styled.Text`
  align-self: flex-end;
  font-family: 'sans-serif-light';
  font-size: 16px;
`

export const AchievementContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

export const AchievementBox = styled.View`
  border: 1px solid #fff;
  width: ${normalize(150)}px;
  height: ${normalize(150)}px;
  margin-bottom: 20px;
`

export const AchievementImage = styled.Image`
  width: 100%;
  height: 100%;
`

export const AchievementLabel = styled.Text`
  font-family: 'PressStart2P-Regular';
  font-size: 20px;
  color: #fff;
`

export const ModalContainer = styled.TouchableOpacity`
  flex: 1;
  background-color: #0008;
  align-items: center;
  justify-content: center;
`

export const ModalWrapper = styled.View`
  width: 90%;
  background-color: #141414;
  align-items: center;
  padding: 20px 0;
`

export const ModalImage = styled.Image`
  width: ${normalize(300)}px;
  height: ${normalize(300)}px;
`

export const ModalTitle = styled(AchievementLabel)`
  font-size: 24px;
  margin: 20px 0;
`

export const ModalDescription = styled(AchievementLabel)`
  font-size: 12px;
  text-align: center;
`