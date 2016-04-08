// react
import React from 'react';
import EditBox from './edit-box.jsx';

var LeftPanel = React.createClass({

  render: function() {
    return (
      <div className="leftpanel">
        <EditBox />
      </div>
    )
  }
});

export default LeftPanel;