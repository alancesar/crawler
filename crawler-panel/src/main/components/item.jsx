import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ entry }) => (
  <div>
    <h2 className="title">Source<br />{entry.source}</h2>
    <h3 className="subtitle" style={{ marginTop: 10 }}>Origin<br />{entry.origin}</h3>

    <table>
      <thead>
        <tr>
          <th>Links</th>
        </tr>
      </thead>

      <tbody>
        {entry.links.map(link => (
          <tr key={link}>
            <td>{link}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

Item.propTypes = {
  entry: PropTypes.shape({
    source: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired,
  }).isRequired,
};

export default Item;
