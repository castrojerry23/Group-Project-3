import React from 'react';
import { withRouter } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';

import SignUpForm from '../components/SignUpForm';
import { signIn } from '../actions';

import '../components/Components.css';


class SignUpFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  handleSubmit(values) {
    this.props.signUp(values)
      .then((response) => {
        if (response.data.signUp.errors.length <= 0) {
          this.props.signInDispatcher(response.data.signUp.token);
          this.props.router.replace('/');
        } else {
          this.setState({
            errors: response.data.signUp.errors
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    return (
      <SignUpForm
        onSubmit={this.handleSubmit.bind(this)}
        errors={this.state.errors}
      />
    );
  }
}

const signUpMutation = gql`
  mutation signUp(
    $lastName: String!, $email: String!, $password: String!) {
    signUp(
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token,
      errors {
        key
        value
      }
    }
  }
`;

const SignUpWithData = graphql(signUpMutation, {
  props: ({ mutate }) => ({
    signUp: ({lastName, email, password }) => mutate({
      variables: { lastName, email, password }
    }),
  }),
})(withRouter(SignUpFormContainer));

const mapDispatchToProps = (dispatch) => ({
  signInDispatcher(token) {
    dispatch(signIn(token));
  }
});

const SignUpWithDataAndDispatch = connect(
  null,
  mapDispatchToProps
)(SignUpWithData);

export default SignUpWithDataAndDispatch;
