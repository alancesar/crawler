import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ target, handleChange, startCrawling }) => (
  <form>
    <div className="field">
      <label className="label" htmlFor="url">URL</label>
      <div className="control">
        <input
          className="input"
          type="url"
          id="url"
          name="url"
          placeholder="URL"
          value={target.url}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="field">
      <div className="control">
        <label className="checkbox">
          <input
            type="checkbox"
            name="findExternalUrls"
            checked={target.findExternalUrls}
            onChange={handleChange}
          />
          <span style={{ marginLeft: 10 }}>Find External URLs</span>
        </label>
      </div>
    </div>

    <div className="field is-grouped">
      <div className="control">
        <button className="button is-link" onClick={startCrawling}>Start</button>
      </div>
      <div className="control">
        <button className="button is-text">Cancel</button>
      </div>
    </div>
  </form>
);

Form.propTypes = {
  target: PropTypes.shape({
    url: PropTypes.string.isRequired,
    findExternalUrls: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  startCrawling: PropTypes.func.isRequired,
};

export default Form;
