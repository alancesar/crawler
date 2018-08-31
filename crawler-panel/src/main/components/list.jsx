/* eslint no-underscore-dangle: 0 */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const List = ({ entries }) => (
  <table className="table is-hoverable is-fullwidth">
    <thead>
      <tr>
        <th>URL</th>
        <th>Origin</th>
        <th>Data</th>
      </tr>
    </thead>
    <tbody>
      {
        entries.map(entry => (
          <tr key={entry._id}>
            <td>
              <Link to={entry._id}>
                {entry.source}
              </Link>
            </td>
            <td>
              {entry.origin}
            </td>
            <td>
              {new Date(entry.date).toLocaleString('pt-BR')}
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

List.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    source: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
};

export default List;
