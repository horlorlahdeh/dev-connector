import React, { Component, Fragment } from 'react';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeConfirmPassword = this.onChangeConfirmPassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangeConfirmPassword(e) {
    this.setState({
      confirmPassword: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      console.log('Passwords do not match', 'danger');
    } else {
      console.log(this.state);
    }
  }
  // const {name, email, password, password2} = this.state;

  render() {
    return (
      <Fragment>
        <section className='container'>
          <h1 className='large text-primary'>Sign Up</h1>
          <p className='lead'>
            <i className='fas fa-user'></i> Create Your Account
          </p>
          <form className='form' onSubmit={this.onSubmit}>
            <div className='form-group'>
              <input
                type='text'
                placeholder='Name'
                name='name'
                value={this.state.name}
                onChange={this.onChangeName}
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                placeholder='Email Address'
                name='email'
                value={this.state.email}
                onChange={this.onChangeEmail}
                required
              />
              <small className='form-text'>
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
              </small>
            </div>
            <div className='form-group'>
              <input
                type='password'
                placeholder='Password'
                name='password'
                minLength='6'
                value={this.state.password}
                onChange={this.onChangePassword}
                required
              />
            </div>
            <div className='form-group'>
              <input
                type='password'
                placeholder='Confirm Password'
                name='confirmPassword'
                minLength='6'
                value={this.state.confirmPassword}
                onChange={this.onChangeConfirmPassword}
                required
              />
            </div>
            <input type='submit' className='btn btn-primary' value='Register' />
          </form>
          <p className='my-1'>
            Already have an account? <a href='login.html'>Sign In</a>
          </p>
        </section>
      </Fragment>
    );
  }
}

export default Register;
