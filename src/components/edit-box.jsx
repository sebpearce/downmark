// react
import React from 'react';

var EditBox = React.createClass({

  handleChange: function(event) {
    this.props.setRawContent(event.target.value);
  },

  render: function() {

    return <textarea id="editbox" className="editbox" value={this.props.rawContent} onChange={this.handleChange} autoFocus />
  }
});

export default EditBox;