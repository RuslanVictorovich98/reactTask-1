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
    error: undefined
  }

  gettingUrl = async (e) => { //e - ивент
    e.preventDefault();
    const USE_URL = await fetch("https://api.github.com/");
    const data = await USE_URL.json();
    console.log(data);

    this.setState({
      current_user_url: data.current_user_url,
      current_user_authorizations_html_url: data.current_user_authorizations_html_url,
      authorizations_url: data.authorizations_url,
      code_search_url: data.code_search_url,
      commit_search_url: data.commit_search_url,
      error: ""
    });
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
