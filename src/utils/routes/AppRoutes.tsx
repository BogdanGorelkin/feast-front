import { Navigate, Route, Routes } from 'react-router-dom'
import SignIn from '../../features/auth/SignIn'
import { useAppSelector } from '../redux/store'
import Admin from '../../features/admin/Admin'
import LandingPage from '../../features/landing/LandingPage'

export default function AppRoutes() {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <Routes>
      {user ? (
        <>
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  )
}
