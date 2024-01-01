import Template from './template/template.js'

;(async function App() {
  const main = null || document.getElementById('root')
  main.innerHTML = await Template()
})()
