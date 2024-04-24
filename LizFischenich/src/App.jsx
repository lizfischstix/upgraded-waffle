import { Outlet } from "react-router"
import Header from './Components/Header'
import Nav from './Components/Nav'
function App() {
  return (
    <>
     <Header />
     <Outlet />
     <Nav />
    </>
  )
}

export default App;
