function Payment() {
    return (
        <div className="container py-5">

            <div className="row mb-4">
                <div className="col-lg-8 mx-auto text-center">
                    <h1 className="display-4">Bootstrap 4 credit card form</h1>
                    <p className="lead mb-0">Easily build a well-structured credit card form using Bootstrap 4</p>
                    <p className="lead">Snippet by <a href="https://bootstrapious.com/snippets">Bootstrapious</a></p>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-7 mx-auto">
                    <div className="bg-white rounded-lg shadow-sm p-5">
                        <ul role="tablist" className="nav bg-light nav-pills rounded-pill nav-fill mb-3">
                            <li className="nav-item">
                                <a data-toggle="pill" href="#nav-tab-card" className="nav-link active rounded-pill">
                                    <i className="fa fa-credit-card"></i>  Credit Card
                                </a>
                            </li>
                            <li className="nav-item">
                                <a data-toggle="pill" href="#nav-tab-paypal" className="nav-link rounded-pill">
                                <i className="fab fa-cc-paypal"></i> Paypal
                                </a>
                            </li>
                            <li className="nav-item">
                                <a data-toggle="pill" href="#nav-tab-bank" className="nav-link rounded-pill">
                                    <i className="fa fa-university"></i>  Bank Transfer
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">

                            <div id="nav-tab-card" className="tab-pane fade show active">
                                <p className="alert alert-success">Some text success or error</p>
                                <form >
                                    <div className="form-group">
                                        <label htmlFor="username">Full name (on the card)</label>
                                        <input type="text" name="username" id="username" placeholder="Jason Doe" required className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cardNumber">Card number</label>
                                        <div className="input-group">
                                            <input type="text" name="cardNumber" id="cardNumber" placeholder="Your card number" className="form-control" required />
                                            <div className="input-group-append">
                                                <span className="input-group-text text-muted">
                                                    <i className="fab fa-cc-visa mx-1"></i>
                                                    <i className="fab fa-cc-mastercard mx-1"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-8">
                                            <div className="form-group">
                                                <label><span className="hidden-xs">Expiration</span></label>
                                                <div className="input-group">
                                                    <input type="number" placeholder="MM" name="" className="form-control" required />
                                                    <input type="number" placeholder="YY" name="" className="form-control" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group mb-4">
                                                <label data-toggle="tooltip" title="Three-digits code on the back of your card">CVV
                                                    <i className="fa fa-question-circle"></i>
                                                </label>
                                                <input type="text" required className="form-control" />
                                            </div>
                                        </div>



                                    </div>
                                    <button type="button" className="subscribe btn btn-primary btn-block rounded-pill shadow-sm"> Confirm  </button>
                                </form>
                            </div>
                            <div id="nav-tab-paypal" className="tab-pane fade">
                                <p>Paypal is easiest way to pay online</p>
                                <p>
                                    <button type="button" className="btn btn-primary rounded-pill"><i className="fab fa-paypal"></i> Log into my Paypal</button>
                                </p>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <div id="nav-tab-bank" className="tab-pane fade">
                                <h6>Bank account details</h6>
                                <dl>
                                    <dt>Bank</dt>
                                    <dd> THE WORLD BANK</dd>
                                </dl>
                                <dl>
                                    <dt>Account number</dt>
                                    <dd>7775877975</dd>
                                </dl>
                                <dl>
                                    <dt>IBAN</dt>
                                    <dd>CZ7775877975656</dd>
                                </dl>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Payment;