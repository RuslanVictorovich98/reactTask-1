import React from 'react';


const Form = props => (
  <div className="class-form">
    <h3>Наша форма:</h3>
    <form onSubmit ={props.urlMethod}>
      <input type="text" name="url" placeholder="Git URL"/><br/>
      <button className="button"><strong>Получить URL</strong></button>
    </form>
  </div>
);

export default Form;
