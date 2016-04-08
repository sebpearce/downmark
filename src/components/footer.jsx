import React from 'react';

var Footer = React.createClass({

  render: function() {

    const footerText = 'Copyright 2016 Seb Pearce';

    return <footer className="footer">{footerText}</footer>
  }
});

export default Footer;