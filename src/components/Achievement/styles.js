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