import React, { useState } from "react";
import learners from "../data.js";
import Learner from "./components/Learner.jsx";
import Score from "./components/Score.jsx";


const App = () => {
  const [newLearner, setNewLearner] = useState(learners)
  return (
    <div>
    {newLearner.map((item, index) => (
      <>

      <Learner
        key={index}
        name={item.name}
        bio={item.bio}
      />
      <Score  key={index} scores={item.scores}/>

      
      </>
    ))}
  </div>
  )
  
};

export default App;



