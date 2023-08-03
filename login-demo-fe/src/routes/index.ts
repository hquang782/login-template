import { useRoutes } from 'react-router-dom'
import Router from './Mainroutes'

export default function Routers() {
  return useRoutes(Router())
}
