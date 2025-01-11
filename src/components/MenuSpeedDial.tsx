import { SpeedDial, SpeedDialAction } from '@mui/material'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import AssignmentIcon from '@mui/icons-material/Assignment'
import { Section } from '../library/matter-ui-section'

const actions = [
  { icon: <LocalLibraryIcon />, name: 'Matter UI' },
  { icon: <AssignmentIcon />, name: 'Download Resume' },
]

const MenuSpeedDial = () => {
  return (
    <Section>
      <SpeedDial
        ariaLabel='Navigation'
        // icon={<Profile look={{ height: 150, width: 150, borderRadius: 75 }} src={'src/img/groheadshot.jpg'} />}
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<MenuBookIcon />}
        direction='left'
      >
        {actions.map(action => (
          <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
        ))}
      </SpeedDial>
    </Section>
  )
}

export default MenuSpeedDial
