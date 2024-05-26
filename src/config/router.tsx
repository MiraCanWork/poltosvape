import { IndexRouteObject, NonIndexRouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PATH } from '@/constants/path'
// import { StartPage } from '../pages/StartPage'
import { NotFound } from '@/pages/NotFoundPage'
import { Liquid } from '@/pages/Liquid'
import { Consumables } from '@/pages/Consumables'
// import { LoginPage } from '../pages/LoginPage'
// import { RegistrationPage } from '../pages/RegistrationPage'
// import { RestorePasswordPage } from '../pages/RestorePasswordPage'
import { Root } from '@/pages/Root'

const routes: (IndexRouteObject | NonIndexRouteObject)[] = [
  {
    path: PATH.HOME,
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Liquid /> },
      {
        path: PATH.CONSUMABLES,
        element: <Consumables />
      }
    ]
  }
]

const router = createBrowserRouter(routes)
export const RootRouter = () => <RouterProvider router={router} />
