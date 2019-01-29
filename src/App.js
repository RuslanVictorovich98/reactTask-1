import React, { Component } from 'react';

import Giturl from './components/Giturl';
import Form from './components/Form';
import Test from './components/Test';

import './App.css';


// const SEARCH_PATH = "/search";
// const SEARCH_PARAMS = "query=";

class App extends Component {



  state = {
    result: [],
    error: undefined,
  }

  gettingUrl = async (e) => { //e - ивент, async - для того что бы все роботало асинхронно
    e.preventDefault();

    window.addEventListener(TypeError, function(e) {
    console.log("ошибка"+e);
    }, true);

    const URL = "https://api.github.com/";
    // console.log(TypeError);
    // const online = navigator.onLine;
    const online = window.navigator.onLine;
    console.log(online);

    if ( URL === "https://api.github.com/" && online === true) {
    // if (online === true) {
      const USE_URL = await fetch(URL); // fetch - метод позволяющая прочитать url адрес и получить с него данные ,await - используеться из-за того что мы используем асинхронный запрос к этому url адресу
      const data = await USE_URL.json(); // перевод в удобный json формат
      const dataArr = Object.entries(data);


      this.setState({
        result: dataArr,
      })
    } else {
      this.setState({
        error: "URL адрес не введен, или введен не верно!"
      });
    }
  }


  render() {
    return (
      <div className="contaiter">
        <Form urlMethod={this.gettingUrl} />

        <div  className="class-giturl-main">
          <div className="class-giturl-h3">
            <h3>Полученные URL:</h3>
          </div>
          <div className="class-giturl">
            {this.state.result.map((url, user_id) => {
              return (<Giturl
                        url={url}
                        key={user_id}
                      />);
            })}
            {this.state.error}
          </div>
         </div>

      </div>
    );
  }
}

export default App;
