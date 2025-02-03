import { Outlet, createRouter, createRoute, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import App from '../App'
import About from '../components/About'
import MatterUi from '../components/MatterUi'
import PersonalLife from '../components/PersonalLife'
import { Box } from '@mui/material'

const rootRoute = createRootRoute({
  component: () => {
    return <App />
  },
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: About,
})
const matterUiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/matterui',
  component: MatterUi,
})
const personalLifeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/personallife',
  component: PersonalLife,
})
const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: () => <div>404 - Page Not Found</div>,
})
const routeTree = rootRoute.addChildren([homeRoute, matterUiRoute, personalLifeRoute, notFoundRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
