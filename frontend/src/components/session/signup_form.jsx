import React from "react";
import logo from "../../styles/img/logo.png";
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(()=> this.props.login(user));
    }

    handleDemoLogin(e) {
        const demo = {
            username: "demo",
            password: "password"
        }

        this.props.login(demo);
    }

    renderErrors() {
        return(
            <div>
                {Object.keys(this.state.errors).map((err, i) => (
                    <p key={`error- ${i}`}>{this.state.errors[err]}</p>
                ))}
            </div>
        )
    }

    componentWillUnmount() {
        this.props.removeErrors();
    }

    render() {
        return(
            <div className="session-form-background">
                <div className="session-form-container">
                    <div className="session-form-body">
                        <div className="session-heading">
                            <Link to="/">
                                <img src={logo} className="user-auth-logo"/>
                            </Link>
                            <h1 className="logo-link" className="logo-link">Triolingo</h1>
                            <div className="errors">{this.renderErrors()}</div>
                        </div>

                        <form className="session-form" onSubmit={this.handleSubmit}>
                            <ul>
                                <li>
                                    <label className="username">
                                        <input type="text" value={this.state.username} onChange={this.update('username')} placeholder="username" className="username-field"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="password">
                                        <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="password" className="password-field"/>
                                    </label>
                                </li>
                                <li>
                                    <label className="password2">
                                        <input type="password" value={this.state.password2} onChange={this.update('password2')} placeholder="Enter password again" className="password-field"/>
                                    </label>
                                </li>
                                <li>
                                    <button className="session-form-continue">{this.props.formType}</button>
                                </li>
                            </ul>
                        </form>
                        <div className="context-switch">
                                <div>Already have an account?</div>
                                <Link to="/login" className="switch">Sign In</Link>
                                <div className="switch"><a onClick={() => this.handleDemoLogin()}>Log in with Demo user</a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};


export default SignupForm;