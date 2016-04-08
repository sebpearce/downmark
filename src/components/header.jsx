import React from 'react';

var Header = React.createClass({

  render: function() {

    return <header className="header">{this.props.appName}</header>
  }
});

export default Header;