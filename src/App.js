import React, { Component } from 'react';

import Giturl from './components/Giturl';
import Form from './components/Form';
import './App.css';

class App extends Component {

  state = {
    current_user_url: undefined,
    current_user_authorizations_html_url: undefined,
    authorizations_url: undefined,
    code_search_url: undefined,
    commit_search_url: undefined,
    error: undefined,
    all_link: undefined
  }

  gettingUrl = async (e) => { //e - ивент, async - для того что бы все роботало асинхронно
    e.preventDefault();

    const URL = "https://api.github.com/";

    if ( URL === "https://api.github.com/") {
      const USE_URL = await fetch(URL); // fetch - метод позволяющая прочитать url адрес и получить с него данные ,await - используеться из-за того что мы используем асинхронный запрос к этому url адресу
      const data = await USE_URL.json(); // перевод в удобный json формат
      console.log(data);

      this.setState({
        all_link: data.name,
        current_user_url: data.current_user_url,
        current_user_authorizations_html_url: data.current_user_authorizations_html_url,
        authorizations_url: data.authorizations_url,
        code_search_url: data.code_search_url,
        commit_search_url: data.commit_search_url,
        error: ""
      });

    } else {
      // console.log("URL адрес не верен!");
      alert("URL адрес не верен!");

    }



  }

  render() {
    return (
      <div className="contaiter">
        <Form urlMethod={this.gettingUrl} />
        <Giturl
          current_user_url={this.state.current_user_url}
          current_user_authorizations_html_url={this.state.current_user_authorizations_html_url}
          authorizations_url={this.state.authorizations_url}
          code_search_url={this.state.code_search_url}
          commit_search_url={this.state.commit_search_url}
         />
      </div>
    );
  }
}

export default App;
