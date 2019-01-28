import React from 'react';

const Giturl = props => (
    <div>
      <h3>Полученные URL:</h3>
      <div className="class-giturl">
          <p>{props.author.current_user_url}</p>
      </div>
    </div>
  );

export default Giturl;
