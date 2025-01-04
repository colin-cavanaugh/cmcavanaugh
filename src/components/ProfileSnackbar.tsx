import { SpeedDial, SpeedDialAction } from '@mui/material'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import React from 'react'
import { Profile } from '../library/matter-ui-profile'
import { Section } from '../library/matter-ui-section'

const actions = [{ icon: <LocalLibraryIcon />, name: 'Matter UI' }]

const ProfileSnackbar = () => {
  return (
    <Section>
      <SpeedDial
        ariaLabel='Navigation'
        icon={<Profile look={{ height: 150, width: 150, borderRadius: 75 }} src={'src/img/groheadshot.jpg'} />}
        sx={{ height: 150, width: 150 }}
        direction='left'
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            sx={{ height: 50, width: 50 }}
          />
        ))}
      </SpeedDial>
    </Section>
  )
}

export default ProfileSnackbar
