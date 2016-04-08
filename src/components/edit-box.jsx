// react
import React from 'react';

var EditBox = React.createClass({

  getInitialState: function() {
    var bs = '# Some BS for you\n\n## Through astrology, our lives are engulfed in rebirth.\n\nYou will soon be recreated by a power deep within yourself — a power that is unified, life-affirming. Astrology may be the solution to what’s holding you back from a breathtaking flow of beauty.\n\n### Lollipops\n\nYou and I are pilgrims of the stratosphere. By unfolding, we exist. Consciousness consists of morphogenetic fields of quantum energy. “Quantum” means a refining of the divine.\n\n- First item\n- Second item\n- Third item\n\n### Other stuff\n\n1. Yep\n2. Nope\n3. Maybe';
    return { value: bs }
  },

  handleChange: function(event) {
    this.setState({ value: event.target.value });
  },

  render: function() {

    return <textarea id="editbox" className="editbox" value={this.state.value} onChange={this.handleChange} />
  }
});

export default EditBox;