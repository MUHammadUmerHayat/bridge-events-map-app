import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="searchQuery">Search for events</label><br />
          <Field name="searchQuery" component="input" type="text"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'searchForm',
})(SearchForm);
