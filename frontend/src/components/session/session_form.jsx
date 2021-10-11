import React from "react";
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
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
            <div className="session-form">
                <div className="form-box">
                    <h2 className="appName"> <Link to="/">TrioLingo</Link></h2>
                    <div className="errors">{this.renderErrors()}</div>

                    <form onSubmit={this.handleSubmit}>
                        <label className="username">
                            <input type="text" value={this.state.username} onChange={this.update('username')} placeholder="username" />
                        </label>

                        <label className="password">
                            <input type="password" value={this.state.password} onChange={this.update('password')} placeholder="password" />
                        </label>

                        <button className="submission">{this.props.formType}</button>

                    </form>
                </div>
            </div>
        )
    }
};


export default SessionForm;