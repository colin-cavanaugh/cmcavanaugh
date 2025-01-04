import React from 'react'
import { GridItem } from '../library/matter-ui-griditem'
import { Section } from '../library/matter-ui-section'
import { Letter } from '../library/matter-ui-letter'
import { Profile } from '../library/matter-ui-profile'
import { GridContainer } from '../library/matter-ui-gridcontainer'
import ProfileSnackbar from './ProfileSnackbar'
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
      <Section look={{ display: 'flex' }}>
        <Letter look={{ fontSize: 28, textAlign: 'center' }}>Colin Cavanaugh</Letter>
      </Section>
      <Section look={{ display: 'flex' }}>
        <ProfileSnackbar />
      </Section>
    </GridItem>
  )
}

export default Header
