import {
  Outlet,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import App from '../App'
import AboutMe from '../components/AboutMe'
import MatterUi from '../components/MatterUi'
import PersonalLife from '../components/PersonalLife'

const rootRoute = createRootRoute({
  component: () => {
    return (
      <>
        <App />
        {/* <TanStackRouterDevtools /> */}
      </>
    )
  },
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: AboutMe,
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
const routeTree = rootRoute.addChildren([
  homeRoute,
  matterUiRoute,
  personalLifeRoute,
  notFoundRoute,
])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
