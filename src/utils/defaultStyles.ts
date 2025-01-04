import { css } from '@emotion/react'

export const defaultStyles = {
  Activator: css({
    width: 200,
    height: 75,
    padding: '10px 20px',
    backgroundColor: 'gray',
    color: 'rgba(0,0,0,1)',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    '&:hover': {
      opacity: 0.8,
    },
    '&:focus': {
      outline: '2px solid blue',
    },
  }),
  Section: css({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '100vh', // Full height
    maxWidth: '100vw', // Full width
    padding: '20px',
    boxSizing: 'border-box', // Ensures proper padding
  }),
  GridContainer: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)', // 12 equal columns
    gridAutoFlow: 'row',
    gap: '8px', // Default gap between grid items
    alignItems: 'center',
    padding: '16px',
    width: '100%', // Ensure it spans the full width of its parent
    boxSizing: 'border-box', // To include padding in the container width
  }),
  Letter: css({
    fontSize: 16,
    fontFamily: 'Muli, sans-serif',
    padding: 0,
    margin: 0,
  }),
  GridItem: (xs = 12, sm?: number, md?: number, lg?: number, xl?: number) =>
    css({
      gridColumn: `span ${xs}`, // Default for mobile
      '@media (min-width: 600px)': {
        gridColumn: sm ? `span ${sm}` : `span ${xs}`, // Responsive for `sm`
      },
      '@media (min-width: 900px)': {
        gridColumn: md ? `span ${md}` : sm ? `span ${sm}` : `span ${xs}`, // Responsive for `md`
      },
      '@media (min-width: 1200px)': {
        gridColumn: lg ? `span ${lg}` : md ? `span ${md}` : sm ? `span ${sm}` : `span ${xs}`, // Responsive for `lg`
      },
      '@media (min-width: 1536px)': {
        gridColumn: xl ? `span ${xl}` : lg ? `span ${lg}` : md ? `span ${md}` : sm ? `span ${sm}` : `span ${xs}`, // Responsive for `xl`
      },
      width: '100%', // Ensure it spans the full width of the column
      padding: '16px', // Optional item padding
      boxSizing: 'border-box', // Ensure padding is included in width calculations
      borderRadius: '8px',
    }),
  Profile: css({
    display: 'inline-block',
    height: 100,
    width: 100,
    borderRadius: 50,
    objectFit: 'cover',
    // overflow: 'hidden',
  }),
}
// Modal
// The Modal component is used to display overlay content.

// Dialog
// Popup
// Overlay
// Lightbox
// AlertBox
// Prompt
// Flyout
// Window
// Sheet
// Drawer (for side modals)
