import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class SearchForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="searchField">Search for events</label>
          <Field name="searchField" component="input" type="text"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'searchForm',
})(SearchForm);