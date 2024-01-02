import Template from './template/template.js'
import './styles/main.css'

;(async function App() {
  const main = null || document.getElementById('root')
  main.innerHTML = await Template()
})()
