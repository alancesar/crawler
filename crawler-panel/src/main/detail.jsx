import React from 'react';
import PropTypes from 'prop-types';
import CrawlerItem from './components/item';
import * as service from '../services/crawlerService';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: {
        origin: '',
        links: [],
      },
    };
    this.load = this.load.bind(this);
  }

  componentDidMount() {
    this.load();
  }

  load() {
    const { id } = this.props.match.params;
    service.get(id).then((entry) => {
      this.setState({ ...this.state, entry });
    });
  }

  render() {
    return (
      <div className="container">
        <CrawlerItem entry={this.state.entry} />
      </div>
    );
  }
}

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default Detail;
