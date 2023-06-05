import styled from 'styled-components'
import { Media } from '../Media/Media.component'

export const Container = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;
  width: 100vw;
  max-width: 1148px;
  margin: 24px auto;
  flex-wrap: wrap;
  position: relative;

  ${Media.tablet`
    width: 100%;
    padding: 16px;
    margin: 0;
    justify-content: center;
  `}
`