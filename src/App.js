import React, { Component } from 'react';

import Giturl from './components/Giturl';
import Form from './components/Form';
import './App.css';


// const SEARCH_PATH = "/search";
// const SEARCH_PARAMS = "query=";

class App extends Component {



  state = {
    result: [],
  }

  gettingUrl = async (e) => { //e - ивент, async - для того что бы все роботало асинхронно
    e.preventDefault();

    const URL = "https://api.github.com/";

    if ( URL === "https://api.github.com/") {
      const USE_URL = await fetch(URL); // fetch - метод позволяющая прочитать url адрес и получить с него данные ,await - используеться из-за того что мы используем асинхронный запрос к этому url адресу
      const data = await USE_URL.json(); // перевод в удобный json формат
      // console.log(data);

      this.state.result = Object.entries(data);

      // const b = this.state.result;
      console.log(this.state.result);

    } else {
      this.setState({
        error: "URL адрес не введен!"
      });
    }
  }


  render() {
    return (
      <div className="contaiter">
        <Form urlMethod={this.gettingUrl} />

        <div>

        {this.state.result.map(({current_user_url, code_search_url}) =>
          <Giturl
            author={current_user_url}
            key={code_search_url}
          />
        )}
        </div>
      </div>
    );
  }
}

export default App;
