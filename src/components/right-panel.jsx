// react
import React from 'react';
import PreviewBox from './preview-box.jsx';

var RightPanel = React.createClass({

  render: function() {
    return (
      <div className="rightpanel">
        <PreviewBox processedContent={this.props.processedContent} />
      </div>
    )
  }
});

export default RightPanel;