import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from "./components/Home"

const App = () => {
  return (
    <main className="bg-slate-300/20 h-full overflow-y-auto overflow-x-hidden">
        <Router>
            <Routes>
                {/* <Route path="/" element={< />} /> */}
                <Route path="/"  element={<Home/>} />
            </Routes>
        </Router>
    </main>
  )
}

export default App