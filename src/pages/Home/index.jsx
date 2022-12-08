import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { StyledLink } from '../../utils/style/Atoms'
import HomeIllustration from '../../assets/home-illustration.svg'
import { useTheme } from '../../utils/hooks'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomeContainer = styled.div`
  margin: 30px;
  background-color: ${({theme}) => 
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark
  };
  padding: 60px 250px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`

const StyledTitle = styled.h1`
  padding-bottom: 30px;
  max-width: 350px;
  line-height: 50px;
  color: ${({theme}) => 
    theme === 'light' ? '#000000' : '#ffffff'
  }
`

const Illustration = styled.img`
  flex: 1;
  heigth: 10%;
  witdh: auto;
`

function Home() {
  const {theme} = useTheme()

  return (
    <HomeWrapper>
      <HomeContainer theme={theme}>
        <LeftCol>
          <StyledTitle theme={theme}>
            Repérez vos besoins, 
            on s’occupe du reste, 
            avec les meilleurs talents
          </StyledTitle>
          
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftCol>
        <Illustration src={HomeIllustration} />
      </HomeContainer>
    </HomeWrapper>
  )
}

export default Home
