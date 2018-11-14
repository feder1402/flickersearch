// import { useContext } from 'react';
//import StateMachine from '../StateMachine';

const Results = () => {

  // const state = useContext(StateMachine);

  const state = "initial";

  switch ( state ) {
    case "initial":
      return "Your results will show here...";
    case "searching":
      return "Searching...";
    case "displaying_results":
      return "Displaying results";
    case "zoomed_in":
      return "Zoomed in";
    default:
      return "Unknown State"
  }
}

export default Results;
