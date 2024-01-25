import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './context/authContext'
import {FormProvider} from './context/FormContext'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import TasksPage from './pages/TasksPage'
import UserProfilePage from './pages/UserProfilePage'
import LandingPage from './pages/LandingPage'
import ProtectedRoute from './ProtectedRoute'
import Navbar from './components/Navbar'

function App() {
  return(
    <AuthProvider>
      <FormProvider>
      <BrowserRouter>
      <main className='container mx-auto px10'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegisterPage/>}/>
          <Route element={<ProtectedRoute/>}>
            <Route path='/tasks' element={<TasksPage/>}/>
            <Route path='/profile' element={<UserProfilePage/>}/>
          </Route>
          <Route path='/operator-login' element={<h1>Operator login</h1>}/>
          <Route path='/operator-profile' element={<h1>Operator profile</h1>}/>
        </Routes>
      </main>
      </BrowserRouter>
      </FormProvider>
    </AuthProvider>
  )
}

export default App