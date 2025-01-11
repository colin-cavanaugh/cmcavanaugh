import { GridItem } from '../library/matter-ui-griditem'
import { Letter } from '../library/matter-ui-letter'
import { Profile } from '../library/matter-ui-profile'

const Header = () => {
  return (
    <GridItem
      look={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Letter look={{ fontSize: 28, textAlign: 'center' }}>Colin Cavanaugh</Letter>
      <Profile look={{ borderRadius: 75 }} src={'src/img/groheadshot.jpg'} />
    </GridItem>
  )
}

export default Header
