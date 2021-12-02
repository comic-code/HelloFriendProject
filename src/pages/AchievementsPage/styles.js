import styled from 'styled-components';
import normalize from '../../utils/normalize';
import { DefaultText } from '../AbrirOlhos/styles'

export const AchievementsTitle = styled(DefaultText)`
  font-size: 30px;
  width: 100%;
  border-bottom-width: 3px;
  border-color: #EA048D;
  text-align: center;
`

export const AchievementsScroll = styled.ScrollView`
  /* background-color: #404040; */
  flex: 1;
  width: 100%;
  margin-top: 20px;
`

export const AchievementsWrapper = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`