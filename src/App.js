import React, { useState } from 'react';
import './App.css';
import './Styles.css';

const DropdownMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown-menu" onClick={toggleDropdown}>
      <button className="dropdown-button">Menu</button>
      {isDropdownOpen && (
        <ul className="dropdown-list">
          <li><a href="https://www.video-game-addiction.org/what-is-computer-internet-addiction.html">What is it?</a></li>
          <li><a href="">Symptoms</a></li>
          <li className="additional-link"><a href="#">Treatment</a></li>
          <li className="additional-link"><a href="#">Do I need help?</a></li>
        </ul>
      )}
    </div>
  );
};

function App() {
  const [displayText, setDisplayText] = React.useState('Click the button!');
  const [selectedImages, setSelectedImages] = useState([]);

  const handleClick = () => {
    setDisplayText('Button clicked!');
  };

  const handleImageClick = (index) => {
    setSelectedImages((prevSelectedImages) => {
      const newSelectedImages = [...prevSelectedImages];
      newSelectedImages[index] = !newSelectedImages[index];
      return newSelectedImages;
    });
  };

  const toggleAnswer = (id) => {
    const answer = document.getElementById(id);
    answer.classList.toggle('visible');

    const arrow = document.getElementById('arrow' + id.slice(-1));
    const rightArrow = arrow.querySelector('.right-arrow');
    const downArrow = arrow.querySelector('.down-arrow');

    if (answer.classList.contains('visible')) {
      rightArrow.style.display = 'none';
      downArrow.style.display = 'inline';
    } else {
      rightArrow.style.display = 'inline';
      downArrow.style.display = 'none';
    }
  };

  return (
    <div className="App">
      <nav className="App-navbar">
        <div className="left-side">
          <h1>G1.G2</h1>
        </div>
        <div className="right-side">
          <div className='ul'>
            <ul>
              <li><a href="https://www.video-game-addiction.org/what-is-computer-internet-addiction.html">What is it?</a></li>
              <li><a href="">Symptoms</a></li>
              <li className="additional-link"><a href="#">Treatment</a></li>
              <li className="additional-link"><a href="#">Do I need help?</a></li>
            </ul>
          </div>
          <DropdownMenu />
          <a href='loginsignup.jsx'><li><button>Login</button></li></a>
        </div>
      </nav>
      <main className="App-main">
        <div className='Container'>
          <div className='Container_left'>
            <h1>When Video Games Become More Than Just Games</h1>
            <p>Anyone who has experienced it knows all too well—video game addiction is real. People of all ages, especially teens and pre-teens, are facing very real, sometimes severe consequences associated with compulsive use of video and computer games.</p>
          </div>
          <div className='Container_right'>
            <div className='border'>
              <img
                className={`selectableImg ${selectedImages[0] ? 'selected' : ''}`}
                src="image.jpg"
                alt="Description of the image"
                onClick={() => handleImageClick(0)}
              />
            </div>
          </div>
        </div>
        <div className='About'>
          <button className='btn'>Try Our Quiz</button>
          <a href="#">LEARN ABOUT THE SYMPTOMS</a>
        </div>

        {/* New section */}
        <div className="split">
          <h1>Gaming Addiction In</h1>
        </div>
        <div className="Specials-container">
          <div className="Specials">
            <div className="Kids">
              <h1 className="Title">Kids</h1>
              <div className="Description">
                <p>
                  • Impaired Skill Development: Gaming hampers essential skills, affecting social and cognitive abilities.
                  <br /> • Disrupted Routines: Prolonged screen time challenges academic performance.
                  <br /> • Social Withdrawal: Excessive gaming hinders real-world connections.
                </p>
              </div>
            </div>
            <div className="Teens">
              <h1 className="Title">Teens</h1>
              <div className="Description">
                <p>
                  • Academic Decline: Teens face performance decline, sleep disruption, and emotional impact.
                  <br /> • Social Isolation: Excessive gaming leads to withdrawal from face-to-face interactions.
                  <br /> • Emotional Impact: Gaming serves as an escape, affecting emotional health.
                </p>
              </div>
            </div>
            <div className="Adults">
              <h1 className="Title">Adults</h1>
              <div className="Description">
                <p>
                  • Professional Challenges: Gaming addiction results in decreased productivity and strained relationships.
                  <br /> • Strained Relationships: Marital and familial bonds suffer due to gaming prioritization.
                  <br /> • Health Consequences: Physical health deteriorates; intervention is crucial for breaking the cycle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="Info-Container">
            <ul className="Info">
            
              <li> <a href=""><p style={{ paddingLeft: '40px' }}>GET HELP</p></a> </li> 
              <li> <a href=""><p style={{ paddingLeft: '40px' }}>TAKE QUIZ</p></a> </li> 
              <li> <a href=""><p style={{ paddingRight: '20px' }}>MORE INFO</p></a> </li> 
            </ul>
            <div className="Contact-Info">
        <p>Email: Bachtarzimounder@gmail.com</p>
        <p>Phone: +213 0559550699</p>
        <p>Constantine - Algérie La Nouvelle Ville Ali Mendjeli, 25016</p>
      </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

