import React from 'react';
import CrawlerList from './components/list';
import * as service from '../services/crawlerService';

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entries: [] };
    this.load = this.load.bind(this);
  }

  componentDidMount() {
    this.load();
  }

  load() {
    service.getAll().then((entries) => {
      this.setState({ ...this.state, entries });
    });
  }

  render() {
    return (
      <div className="container">
        <CrawlerList entries={this.state.entries} />
      </div>
    );
  }
}

export default Grid;
