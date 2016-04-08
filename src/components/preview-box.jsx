// react
import React from 'react';

var PreviewBox = React.createClass({

  createMarkup: function(input) {
    return {
      __html: input
    }
  },

  handleClick: function(event) {
    event.preventDefault();
    return false;
  },

  render: function() {
    return <div className="previewbox preview-styles" dangerouslySetInnerHTML={this.createMarkup(this.props.processedContent)}></div>
  }
});

export default PreviewBox;