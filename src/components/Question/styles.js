import styled from 'styled-components'
import {COLORS, PillButton} from '../../styles.js'

export const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Question = styled.h2`
  font-size: 28px;
  font-weight: 700;
`

export const Description = styled.p`
  font-size: 18px;
  font-weight: 400;
`

export const OptionsBox = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
`

export const Option = styled(PillButton)`
  background: white;
  border: 2px solid ${({$selected}) => ($selected ? COLORS.border : 'white')};

  :hover {
    border: 2px solid ${COLORS.border};
  }
`
