import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export default class NewsItems extends Component {
  render() {
    return (
      <div >
      <Typography variant="h2"gutterBottom>
        {this.props.title}
      </Typography>
      <Typography variant="h3" gutterBottom>
        {this.props.writter}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {this.props.content}
      </Typography>
      
    </div>
    )
  }
}
