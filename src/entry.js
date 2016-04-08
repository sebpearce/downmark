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

// Remarkable: https://github.com/jonschlinkert/remarkable
import Remarkable from 'remarkable';
const md = new Remarkable();

var App = React.createClass({

  getInitialState: function() {

    var bs = '# Some BS for you\n\n## Through astrology, our lives are engulfed in rebirth.\n\nYou will soon be recreated by a power deep within yourself — a power that is unified, life-affirming. [Astrology may be the solution](http://sebpearce.com) to what’s holding you back from a breathtaking flow of beauty.\n\n### Lollipops\n\nYou and I are pilgrims of the stratosphere. By unfolding, we exist. Consciousness consists of morphogenetic fields of quantum energy. “Quantum” means a refining of the divine.\n\n- First item\n- Second item\n- Third item\n\n### Other stuff\n\n1. Yep\n2. Nope\n3. Maybe\n4. OK\n5. You what?\n6. Freeze!\n7. Balls\n8. Roger';

    return {
      rawContent: bs,
    }
  },

  setRawContent: function(content) {
    this.setState({
      rawContent: content
    });
  },

  render: function() {

    var appName = 'Downmark';

    return (
      <div className="wrapper">
        <Header appName={appName}/>
          <div className="panelcontainer">
            <LeftPanel setRawContent={this.setRawContent} rawContent={this.state.rawContent} />
            <RightPanel processedContent={md.render(this.state.rawContent)} />
          </div>
        <Footer/>
      </div>
    )
  }

});

ReactDom.render(<App/>, document.getElementById('react-root'));