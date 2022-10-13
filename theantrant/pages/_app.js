import '../styles/globals.css'
import Navbar from "../components/navbar.js"

function MyApp({ Component, pageProps }) {
  return (
  <div  className="bg-gradient-to-br from-blue-900 to-gray-800">
    <title>The Ant Rant</title>
    <Navbar/>
    <Component {...pageProps}/>
  </div>
  )
}

export default MyApp
