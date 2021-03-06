import { motion } from 'framer-motion'
import styled from 'styled-components'
import { theme } from '../theme'

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 14px;
  color: white;
`

export const Col = styled.div`
  min-width: 170px;
  height: 40px;
  display: flex;
  align-items: center;
  span {
    margin-right: 20px;
  }
`

export const TitleText = styled.span`
  font: normal normal bold 30px/45px Noto Sans CJK KR;
  color: ${props => props.theme.tap.textColor};
`
export const Title = styled(motion.span)`
  display: flex;
  align-items: center;
`

export const Tap = styled(motion.span)`
  display: flex;
  border-radius: 5px;
  margin-right: 10px;
  width: 120px;
  height: 40px;

  background-color: ${props =>
    props.isActive ? props.theme.tap.accentBgColor : props.theme.tap.bgColor};

  color: ${props => props.theme.tap.textColor};

  /* border: 1px solid
    ${props => (props.isActive ? '#FFFFFF' : props.theme.accentTextColor)}; */

  &:hover {
    background-color: ${props => props.theme.tap.accentBgColor};
    /* border-color: ${props => props.theme.accentBgColor}; */
  }
  a {
    text-align: center;
    width: 120px;
    border-radius: 18px;
    padding-top: 14px;

    color: ${props => props.theme.tap.textColor};
  }
  /* a:hover {
    color: ${props => props.theme.tap.textColor};
  } */
`
