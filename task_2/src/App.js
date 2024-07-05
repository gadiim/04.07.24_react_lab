import React, { Component } from 'react';
import img from './atom_cats_img.png';
import chest from './atom_cats_chest.png';
import './App.css';

class BandMembers extends Component {
  render() {
    return (
      <fieldset>
        <h3>Band Members:</h3>
        <div><b>Zeke "The Rebel" Thompson</b> - Lead Vocalist and Rhythm Guitar
          <li>The charismatic leader with a rebellious spirit. Known for his gritty voice and stage presence.</li>
        </div>
        <div><b>Johnny "Wrench" Collins</b> - Lead Guitar
          <li>A mechanical genius with a knack for crafting unique guitar sounds. Always seen tinkering with his gear.</li>
        </div>
        <div><b>Rowdy "Rogue" Reed</b> - Bass Guitar
          <li>The heartbeat of the band, providing deep, resonant bass lines. She’s known for her fierce independence and loyalty.</li>
        </div>
        <div><b>Tom "Turbo" Anderson</b> - Drums
          <li>The powerhouse behind the drum kit, delivering explosive beats that drive the band's energetic performances.</li>
        </div>
        <div><b>Ava "Sparks" Miller</b> - Keyboard and Synths
          <li>The tech-savvy member who brings futuristic sounds and intricate melodies to the band’s music.</li>
        </div>
      </fieldset>
    );
  }
}

class Albums extends Component {
  render() {
    return (
      <fieldset>
        <h3>Albums:</h3>
        <ul>
          <li className='Album-name'><b>Album Name:</b> "Atomic Dawn"
            <ul>
              <li><b>Release Year:</b>  2278</li>
              <li><b>Cover Art:</b> A vibrant, retro-futuristic design featuring a rising sun over a metallic cityscape.</li>
            </ul>
          </li>
          <li className='Album-name'><b>Album Name:</b> "Rad Rock"
            <ul>
              <li><b>Release Year:</b>  2281</li>
              <li><b>Cover Art:</b> A dynamic illustration of the band performing in a post-apocalyptic landscape, with neon lights and radioactive symbols.</li>
            </ul>
          </li>
          <li className='Album-name'><b>Album Name:</b> "Power Surge"
            <ul>
              <li><b>Release Year:</b>  2284</li>
              <li><b>Cover Art:</b> A dramatic image of an electric storm with lightning bolts illuminating a dark, ruined city.</li>
            </ul>
          </li>
          <li className='Album-name'><b>Album Name:</b> "Metal Hearts"
            <ul>
              <li><b>Release Year:</b>  2287</li>
              <li><b>Cover Art:</b> A heart made of metal gears and wires, glowing with an inner light, against a backdrop of a starry night sky.</li>
            </ul>
          </li>
        </ul>
      </fieldset>
    );
  }
}

class BandDiscription extends Component {
  render() {
    return (
      <div className='Band-discription'>The Atom Cats are a band that embodies the spirit of resilience and rebellion in a world where the old rules no longer apply.
      Their music, a fusion of rock, punk, and electronic influences, reflects the harsh realities and undying hope of their surroundings.
      Each member brings a unique flavor to the band, from Zeke's rebellious lyrics to Ava's futuristic synths.
      Together, they create a sound that resonates with the survivors and dreamers of their world, offering both an escape and a call to action.
      The Atom Cats' albums tell stories of survival, defiance, and the pursuit of freedom.
      Their debut album, "Atomic Dawn," captures the awakening of a new era, while "Rad Rock" celebrates the vibrant energy of their live performances.
      "Power Surge" explores themes of power and resilience, and "Metal Hearts" delves into the complexities of love and humanity in a fractured world.
      Their music is more than just a collection of songs; it's a soundtrack to the lives of those who dare to dream and fight for a better tomorrow.
    </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={img} className="Band-img" alt="img" />
          <h1 className="Band-title">atom cats</h1>
        </header>
        <body>
          <img src={chest} className="Band-chest" alt="chest" />
          <div className='Container-info'>
            <BandMembers />
            <Albums />
          </div>
          <BandDiscription />
        </body>
      </div>
    );
  }
}

export default App;
