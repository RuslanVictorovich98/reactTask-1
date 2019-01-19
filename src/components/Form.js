import React, { Component } from 'react';


class Form extends Component {
  render() {
    return (
      <div className="class-form">
        <h3>Наша форма:</h3>
        <form onSubmit ={this.props.urlMethod}>
          <input type="text" name="url" placeholder="Git URL"/><br/>
          <button className="button">Получить URL</button>
        </form>
      </div>
    );
  }
}

export default Form;
