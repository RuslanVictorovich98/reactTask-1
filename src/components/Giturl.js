import React, { Component } from 'react';


class Giturl extends Component {
  render() {
    return (
      <div>
        <h3>Полученные URL:</h3>
        <div className="class-giturl">
          <a href="`{this.props.current_user_url}`">{this.props.current_user_url}</a><br/>
          <a href="`{this.props.current_user_authorizations_html_url}`">{this.props.current_user_authorizations_html_url}</a><br/>
          <a href="`{this.props.authorizations_url}`">{this.props.authorizations_url}</a><br/>
          <a href="`{this.props.code_search_url}`">{this.props.code_search_url}</a><br/>
          <a href="`{this.props.commit_search_url}`">{this.props.commit_search_url}</a>
        </div>
      </div>
    );
  }
}

export default Giturl;
