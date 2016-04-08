// http://www.juxt.com/pov/thoughts/building-native-desktop-apps-with-web-tech

// sass
import './styles/main.scss';

// react
import React from 'react';
import ReactDom from 'react-dom';

// components
import LeftPanel from './components/left-panel.jsx';
import RightPanel from './components/right-panel.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';

var App = React.createClass({

  render: function() {

    var appName = 'Downmark';

    return (
      <div className="wrapper">
        <Header appName={appName}/>
          <div className="panelcontainer">
            <LeftPanel/>
            <RightPanel/>
          </div>
        <Footer/>
      </div>
    )
  }

});

ReactDom.render(<App/>, document.getElementById('react-root'));