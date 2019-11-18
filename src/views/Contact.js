import React from "react";
import "../scss/contact.scss";

class Contact extends React.Component {
  componentDidMount(){
    document.title = "Contact | Spike's Rewritten Guide";
  }

  render() {
    return (
      <>
        <div className="panel">
          <div className="panel-content">
            <h1>Send Spike a Message!</h1>
            <div>
              {/* @if (ViewBag.Message == null) */}
              {
                <div>
                  <form method="post" id="contactform">
                    <div className="contact-input">
                      <label asp-for="Name">
                        Toon Name<span> * </span>
                        <span title="NOT your real name, unless you feel so inclined">
                          &#128712;
                        </span>
                      </label>
                      <input
                        asp-for="Name"
                        type="text"
                        placeholder="Please tell me your toon's name!"
                      />
                      <span
                        className="contact-validation"
                        asp-validation-for="Name"
                      ></span>
                    </div>

                    <div className="contact-input">
                      <label asp-for="Toon">
                        Toon Species<span> * </span>
                      </label>
                      <select className="toon-input" asp-for="Toon">
                        <option value="">Select a toon species!</option>
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
                        <option value="crocodile">Crocodile</option>
                      </select>
                      <span
                        className="contact-validation"
                        asp-validation-for="Toon"
                      ></span>
                    </div>

                    <div className="contact-input">
                      <label asp-for="Email">
                        Email Address<span> * </span>
                        <span title="Your email address is NOT stored anywhere, I promise">
                          &#128712;
                        </span>
                      </label>
                      <input
                        asp-for="Email"
                        type="email"
                        placeholder="Please tell me your email so I can respond!"
                      />
                      <span
                        className="contact-validation"
                        asp-validation-for="Email"
                      ></span>
                    </div>

                    <div className="contact-input">
                      <label asp-for="Message">
                        Message<span> * </span>
                      </label>
                      <textarea
                        asp-for="Message"
                        placeholder="Type your message here!"
                        style={{ height: 200 + "px" }}
                      ></textarea>
                      <span
                        className="contact-validation"
                        asp-validation-for="Message"
                      ></span>
                    </div>

                    <button type="submit">Send</button>
                  </form>
                </div>
              }
            </div>
            {/* <div style={{paddingBottom: 7 + 'px'}}>
            @if (ViewBag.Message != null)
            {
                <div>@ViewBag.Message</div>
            }
        </div> */}
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
