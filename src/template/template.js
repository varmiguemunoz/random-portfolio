import getData from '../utils/getData.js'

const Template = async () => {
  const data = await getData()
  const view = `
    <div class="About">
      <div class="card">
        <div class="card_details">
          <div class="card_photo circle">
            <img src="${data.picture.large}" alt="${data.name.first}">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="enable-background:new -580 439 577.9 194;"
              xml:space="preserve">
              <circle cx="50" cy="50" r="40" />
            </svg>
          </div>
          <p class="card_title">Hey, my name is: </p>
          <p class="card_value">${data.name.first} ${data.name.last}</p>
        </div>
        <div class="card_userdata">
            <p>Email: ${data.email}</p>
            <p>I am from: ${data.location.country}</p>
        </div>
        <div class="card_social">
          <a href="https://twitter.com/gndx">
            <img src="./images/twitter.png" />
          </a>
          <a href="https://github.com/gndx">
            <img src="./images/github.png"  />
          </a>
          <a href="https://instagram.com/gndx">
            <img src="./images/instagram.png"  />
          </a>
        </div>
      </div>
    </div>
  `
  return view
}

export default Template
