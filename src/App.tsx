import Landing from "./components/Landing"
import "./App.css"
import { Suspense } from "react"


function App() {

  return (
    <>
      <Suspense fallback="Cargando traducciones">
        <Landing />
      </Suspense>
    </>
  )
}

export default App
