import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

// const validate = values => {
//   const errors = {}
//   if (!values.query) {
//     errors.query = 'Enter search'
//   } else if (values.query.length < 2) {
//     errors.query = 'Must have at least 2 characters to search'
//   }
//   return errors;
// }

class SearchForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="query">Search for events</label><br />
          <Field name="query" component="input" type="text" placeholder="by keyword" />
          <Field name="location" component="input" type="text" placeholder="by location" />
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
