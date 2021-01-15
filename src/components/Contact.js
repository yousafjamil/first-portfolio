import React from "react";

function Contact() {
  return (
    <div className="container offset-sm-2  ">
      <h1 className="contact-header">GET IN TOUCH WITH ME</h1>
      <div className="row mt-5">
        <div className="col-6">
          <form className="form">
            <h3 className="align-item-center">Sign up form</h3>
            <div class="form-group">
              <label for="forname">Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="enter your  name"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter email address"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
              />
            </div>

            <button type="submit" class="btn btn-outline-info w-100">
              Submit
            </button>
          </form>
        </div>
        <div className="col-6 mt-4 py-3 mx-auto">
          <h4>Address</h4>
          <span>khyber pakhtunkhwa peshawar pakistan</span>
          <pre></pre>
          <pre></pre>
          <h4>mobile whatsapp</h4>
          <span>+923448307585</span>

          <pre></pre>
          <h4>Email</h4>
          <span>yousafjamil200@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
