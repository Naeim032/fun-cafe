import React from 'react';
import './Answer.css';

const Answer = () => {
  return (
    <div className='ans'>
        <h2>Q1: different between props and state</h2>
       <p>state refers to the internal data of a component that can change 
       over time, while props are used to pass data between components</p>

        <h2>Q1: how to wark useEffect</h2>
       <p>You need to pass two arguments to useEffect :<br></br>
         1. A setup function with setup code that connects to that system. 
          It should return a cleanup function with cleanup code that 
          disconnects from that system.<br></br>
         2. A list of dependencies including every value from your 
         component used inside of those functions.</p>

        <h2>Q1: how to wark useState</h2>
       <p>The useState hook works by handling and managing state in your applications. The useState hook takes the first value of the state variable as its argument. The second value then sets your state, which is why it's always initiated as setState</p>
    </div>
  );
};

export default Answer;