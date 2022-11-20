import "./App.css";
import { useState } from "react";

const movieDictionary = {
  Romantic: [
    {
      name: "(500) Days of Summer",
      rating: "7.7/10",
      desc: "Tom, greeting-card writer and hopeless romantic, is caught completely off-guard when his girlfriend, Summer, suddenly dumps him. He reflects on their 500 days together to try to figure out where their love affair went sour, and in doing so, Tom rediscovers his true passions in life.",
    },
    {
      name: "Dear John",
      rating: "6.3/10",
      desc: "While Sergeant John Tyree is home on two weeks leave from Germany, he meets Savannah after he dives into the ocean to retrieve Savannah's purse that had fallen off a pier. John eventually falls in love with Savannah, who promises to write to him until he returns from overseas.",
    },
    {
      name: "About Time",
      rating: "7.8/10",
      desc: "The night after another unsatisfactory New Year party, Tim's father tells his son that the men in his family have always had the ability to travel through time. Tim can't change history, but he can change what happens and has happened in his own life – so he decides to make his world a better place... by getting a girlfriend. Sadly, that turns out not to be as easy as he thinks.",
    },
  ],

  Action: [
    {
      name: "21 Bridges",
      rating: "6.6/10",
      desc: "An embattled NYPD detective, is thrust into a citywide manhunt for a pair of cop killers after uncovering a massive and unexpected conspiracy. As the night unfolds, lines become blurred on who he is pursuing, and who is in pursuit of him.",
    },
    {
      name: "2Guns",
      rating: "6.7/10",
      desc: " A DEA agent and an undercover Naval Intelligence officer who have been tasked with investigating one another find they have been set up by the mob -- the very organization the two men believe they have been stealing money from.",
    },
    {
      name: "6 Underground",
      rating: "6.1/10",
      desc: " After faking his death, a tech billionaire recruits a team of international operatives for a bold and bloody mission to take down a brutal dictator.",
    },
  ],
  Thriller: [
    {
      name: "A Walk Among the Tombstones",
      rating: "6.5/10",
      desc: "Private investigator Matthew Scudder is hired by a drug kingpin to find out who kidnapped and murdered his wife.",
    },
    {
      name: "Abduction",
      rating: "5.1/10",
      desc: "A young man sets out to uncover the truth about his life after finding his baby photo on a missing persons website.",
    },
    {
      name: "All I See Is You",
      rating: "5.4/10",
      desc: " A blind woman's relationship with her husband changes when she regains her sight and discovers disturbing details about themselves.",
    },
  ],
};

function App() {
  const [category, setCategory] = useState("Romantic");
  function categoryClickHandler(category) {
    setCategory(category);
  }
  return (
    <div className="App">
      <h1> 🎬 Movies For You 🎬 </h1>
      <p>
        Checkout below for the best movie recommendations. Select a category to
        get started.
      </p>
      <div>
        {Object.keys(movieDictionary).map((category) => (
          <button
            className="btn-category"
            onClick={() => categoryClickHandler(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieDictionary[category].map((movie) => (
            <li key={movie.name} className="movieItem">
              <div className="name"> {movie.name} </div>
              <div className="rating">
                {" "}
                <em>{movie.rating}</em>{" "}
              </div>
              <div className="description"> {movie.desc} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
