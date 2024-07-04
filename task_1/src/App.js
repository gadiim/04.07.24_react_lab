import logo from './logo.svg';
import './App.css';

function Rreview1 () {
  return (
    <div className="App-review">
      <div className="reviewer">
        Reviewer: Preston Garvey
      </div>
      <div className="rating">
        Rating: ★★★★★
      </div>
      <div className="review">
        Review: "The Wasteland of Hope" masterfully captures the challenges and hopes of our world after the apocalypse. William Sterling has recreated the atmosphere where every day is a struggle for survival. This book is a true reflection of our life, full of dangers and adventures. Readers will gain a better understanding of us, the Minutemen, and our mission to restore civilization."
      </div>
    </div>
  )
}

function Rreview2() {
  return (
    <div className="App-review">
      <div className="reviewer">
        Reviewer: Piper Wright
      </div>
      <div className="rating">
        Rating: ★★★★☆
      </div>
      <div className="review">
        Review: "The Wasteland of Hope" is a gripping look into our life after the nuclear disaster. William Sterling accurately describes the details I often see in my journalistic work. Although some moments seem a bit exaggerated, overall, the book is an excellent read for those who want to learn more about the world we live in."
      </div>
    </div>
  )
}

function Rreview3() {
  return (
    <div className="App-review">
      <div className="reviewer">
        Reviewer: Nick Valentine
      </div>
      <div className="rating">
        Rating: ★★★★★
      </div>
      <div className="review">
        Review: "The Wasteland of Hope" is not just a story about survival; it's a tale about human nature in the harshest conditions. William Sterling effectively conveys the feelings of isolation and hope that are integral to our daily lives. I recommend this book to everyone who wants to understand the importance of maintaining humanity even in the darkest times."
      </div>
    </div>
  )
}

function Rreview4() {
  return (
    <div className="App-review">
      <div className="reviewer">
        Reviewer: Paladin Danse
      </div>
      <div className="rating">
        Rating: ★★★★☆
      </div>
      <div className="review">
        Review: "The Wasteland of Hope" brilliantly explores themes of honor, duty, and the fight for survival. William Sterling has created a deep and truthful depiction of our world after the Great War. While some plot lines could be more developed, overall, the book is a must-read for those who want to understand our mission in the Brotherhood of Steel."
      </div>
    </div>
  )
}

function Rreview5() {
  return (
    <div className="App-review">
      <div className="reviewer">
        Reviewer: Curie
      </div>
      <div className="rating">
        Rating: ★★★★★
      </div>
      <div className="review">
        Review: "The Wasteland of Hope" is an impressive and profound analysis of our world after the nuclear apocalypse. William Sterling masterfully captures all aspects of life, from the struggle for resources to the search for meaning in this new reality. This book helps to better understand why we continue to fight and seek hope in this devastated world."
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">The Wasteland of Hope</h1>
        <h4 className="App-author">Author: William Sterling</h4>
        <h6 className="App-genre">Genre: Post-Apocalyptic Science Fiction</h6>
        <h6 className="App-page-count">Page Count: 420</h6>
      </header>
      <body>
        <h4 className="App-reviews">Reviews:</h4>

        <ul>
          <li>
            <Rreview1></Rreview1>
          </li>
          <li>
            <Rreview2></Rreview2>
          </li>
          <li>
            <Rreview3></Rreview3>
          </li>
          <li>
            <Rreview4></Rreview4>
          </li>
          <li>
            <Rreview5></Rreview5>
          </li>
        </ul>

      </body>
        
      <img src={logo} className="App-logo" alt="logo" /> 
      
    </div>
  );
}

export default App;
