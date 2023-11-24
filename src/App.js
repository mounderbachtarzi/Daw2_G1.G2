import React, { useState } from 'react';
import './App.css';

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
          <li><button>Login</button></li>
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
          <button className='btn'>Try Our Quizz</button>
          <a href="#">LEARN ABOUT THE SYMPTOMS</a>
        </div>

        <div className="faq-container">
          <div className="question" onClick={() => toggleAnswer('answer1')}>What is video games addiction
            <span className="arrow" id="arrow1">
              <img className="right-arrow" src="Right.png" alt="" />
              <img className="down-arrow" src="Down.png" alt="" style={{ display: 'none' }} />
            </span>
          </div>
          <div className="answer" id="answer1">
            <p>Diagnostic criteria are slowly being formed by health bodies across the world. However, experts generally look to evaluate sustained patterns of gaming in patients and the degree to which they interfere with other life obligations.</p>
          </div>

          <div className="question" onClick={() => toggleAnswer('answer2')}>Are long gaming sessions an indicator of video game addiction
            <span className="arrow" id="arrow2">
              <img className="right-arrow" src="Right.png" alt="" />
              <img className="down-arrow" src="Down.png" alt="" style={{ display: 'none' }} />
            </span>
          </div>
          <div className="answer" id="answer2">
            <p>Not necessarily. Video games are designed to challenge and stimulate players and tens of millions of Americans regularly enjoy the escape that they offer. Addiction involves sustained patterns of play that interfere with daily life and, therefore, occasional long gaming sessions don't act as definitive proof of a behavioral issue.</p>
          </div>

          <div className="question" onClick={() => toggleAnswer('answer3')}>What makes video games addictive
            <span className="arrow" id="arrow3">
              <img className="right-arrow" src="Right.png" alt="" />
              <img className="down-arrow" src="Down.png" alt="" style={{ display: 'none' }} />
            </span>
          </div>
          <div className="answer" id="answer3">
            <p>Challenge, discovery, and social elements of online gaming all contribute to the enjoyment of video games. With the advent of streaming platforms like Twitch, gaming is more collaborative and social than ever before. Problems arise when excessive gaming begins to supplant real-life relationships and obligations.</p>
          </div>

          <div className="question" onClick={() => toggleAnswer('answer4')}>How prevalent is gaming addiction
            <span className="arrow" id="arrow4">
              <img className="right-arrow" src="Right.png" alt="" />
              <img className="down-arrow" src="Down.png" alt="" style={{ display: 'none' }} />
            </span>
          </div>
          <div className="answer" id="answer4">
            <p>Studies estimate that 10 to 15% of gamers exhibit signs that meet the World Health Organization's criteria for addiction. You can find out more by exploring the resources available on our site.</p>
          </div>

          <div className="question" onClick={() => toggleAnswer('answer5')}>What can I do to address the problem
            <span className="arrow" id="arrow5">
              <img className="right-arrow" src="Right.png" alt="" />
              <img className="down-arrow" src="Down.png" alt="" style={{ display: 'none' }} />
            </span>
          </div>
          <div className="answer" id="answer5">
            <p>If you or a loved one shows signs of computer or video game addiction, this website is for you. Here, you will find up-to-date information and resources that will help you assess whether gaming has gone from an entertaining pastime to a full-blown obsession. From signs and symptoms to advice for parents and treatment options, we try to offer evidence-based advice and solutions to help bring compulsive gamers back to real life.</p>
          </div>
        </div>
   
      </main>
    </div>
  );
}

export default App;
