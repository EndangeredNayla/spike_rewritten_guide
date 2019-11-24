import React from "react";
import "../scss/contact.scss";

class Contact extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toonName: "",
            toonSpecies: "",
            email: "",
            message: "",
            response: "",
            sent: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        document.title = "Contact | Spike's Rewritten Guide";
    }

    handleChange(event) {
        this.setState({ message: event.target.value });
    }

    handleSubmit() {
        var template_params = {
            from_name: this.state.toonName,
            reply_to: this.state.email,
            to_name: "spikes.rewritten.guide@gmail.com",
            message_html: this.state.message
        };

        var service_id = "default_service";
        var template_id = "template_AgGsYEh0";
        window.emailjs
            .send(service_id, template_id, template_params)
            .then(
                alert(
                    "Email sent successfully! Thank you, Spike will get back to you soon!"
                )
            );
    }

    render() {
        return (
            <div className="panel">
                <div className="panel-content">
                    <h1>Send Spike a Message!</h1>
                    <div>
                        <div>
                            <form>
                                <div className="contact-input">
                                    <label htmlFor="Name">
                                        Toon Name
                                        <span style={{ color: "red" }}>
                                            {" "}
                                            *{" "}
                                        </span>
                                        <span title="NOT your real name, unless you feel so inclined">
                                            &#128712;
                                        </span>
                                    </label>
                                    <input
                                        id="Name"
                                        name="Name"
                                        type="text"
                                        value={this.state.toonName}
                                        placeholder="Please tell me your toon's name!"
                                        onChange={event =>
                                            this.setState({
                                                toonName: event.target.value
                                            })
                                        }
                                        required
                                    />
                                </div>

                                <div className="contact-input">
                                    <label htmlFor="Toon">
                                        Toon Species
                                        <span style={{ color: "red" }}>
                                            {" "}
                                            *{" "}
                                        </span>
                                    </label>
                                    <select
                                        className="toon-input"
                                        id="Toon"
                                        name="Toon"
                                        value={this.state.toonSpecies}
                                        onChange={event =>
                                            this.setState({
                                                toonSpecies: event.target.value
                                            })
                                        }
                                    >
                                        <option value="">
                                            Select a toon species!
                                        </option>
                                        <option value="cat">Cat</option>
                                        <option value="dog">Dog</option>
                                        <option value="rabbit">Rabbit</option>
                                        <option value="horse">Horse</option>
                                        <option value="monkey">Monkey</option>
                                        <option value="mouse">Mouse</option>
                                        <option value="duck">Duck</option>
                                        <option value="pig">Pig</option>
                                        <option value="bear">Bear</option>
                                        <option value="deer">Deer</option>
                                        <option value="crocodile">
                                            Crocodile
                                        </option>
                                    </select>
                                </div>

                                <div className="contact-input">
                                    <label htmlFor="Email">
                                        Email Address
                                        <span style={{ color: "red" }}>
                                            {" "}
                                            *{" "}
                                        </span>
                                        <span title="Your email address is NOT stored anywhere, I promise">
                                            &#128712;
                                        </span>
                                    </label>
                                    <input
                                        id="Email"
                                        name="Email"
                                        type="email"
                                        value={this.state.email}
                                        placeholder="Please tell me your email so I can respond!"
                                        onChange={event =>
                                            this.setState({
                                                email: event.target.value
                                            })
                                        }
                                        required
                                    />
                                </div>

                                <div className="contact-input">
                                    <label htmlFor="Message">
                                        Message
                                        <span style={{ color: "red" }}>
                                            {" "}
                                            *{" "}
                                        </span>
                                    </label>
                                    <textarea
                                        id="Message"
                                        name="Message"
                                        placeholder="Type your message here!"
                                        value={this.state.message}
                                        rows="5"
                                        onChange={this.handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    onClick={this.handleSubmit}
                                >
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
