import React from 'react';
import { withRouter } from 'react-router-dom';
import Form from './components/form';
import Notification from './components/notification';
import * as service from '../services/crawlerService';

class Crawler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: {
        url: '',
        findExternalUrls: false,
      },
      showNotification: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.startCrawling = this.startCrawling.bind(this);
    this.clear = this.clear.bind(this);
    this.toggleShowNotification = this.toggleShowNotification.bind(this);
  }

  handleChange(e) {
    const {
      name,
      type,
      checked,
      value,
    } = e.target;

    const parsedValue = type === 'checkbox' ? checked : value;
    const target = { ...this.state.target, [name]: parsedValue };
    this.setState({ ...this.state, target });
  }

  startCrawling(e) {
    e.preventDefault();

    const { url, findExternalUrls } = this.state.target;
    service.crawler(url, findExternalUrls).then(() => this.clear());
  }

  clear() {
    this.setState({
      ...this.state,
      showNotification: true,
      target: {
        url: '',
        findExternalUrls: false,
      },
    });
  }

  toggleShowNotification(showNotification = true) {
    this.setState({ ...this.state, showNotification });
  }

  render() {
    return (
      <div className="container">
        <Form
          target={this.state.target}
          handleChange={this.handleChange}
          startCrawling={this.startCrawling}
        />
        <Notification
          handleClick={this.toggleShowNotification}
          show={this.state.showNotification}
          text="The crawler has been started in background."
        />
      </div>
    );
  }
}

export default withRouter(Crawler);
