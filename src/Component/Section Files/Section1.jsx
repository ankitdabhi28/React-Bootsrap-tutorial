

function Section1() {

    return (
        <section className="container sec-1 ">
            <div className="row top-con">
                {/* <!-- top left --> */}
                <div className="col-12 col-md-6">
                    <div className="bg-light top-left-con p-5">
                        <div className="user-logo"><img src={require('../pngwing.png')} alt="" /></div>
                        <div>
                            <p>User Profile</p>
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary">Follow</button>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button type="button" className="btn btn-outline-primary">
                                Message
                            </button>
                        </div>
                    </div>
                </div>
                {/* <!-- Top Right --> */}
                <div className="col-12 col-md-6">
                    <div className="top-right bg-light p-4">
                        <div className="input-group mb-3">
                            <span className="input-group-text">Person</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                            />
                            <input type="text" className="form-control" placeholder="Last Name" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Email</span>
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">PassWord</span>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="PassWord"
                            />
                        </div>

                        <div className="input-group mb-3">
                            <span className="input-group-text">City</span>
                            <select className="form-select" id="sel1" name="sellist1">
                                <option>Surat</option>
                                <option>Gandhingar</option>
                                <option>Junagadh</option>
                                <option>Jetpur</option>
                            </select>
                        </div>
                        <div className="form-check che-cl">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="check2"
                                value="something"
                            />
                            <label className="form-check-label" for="check2"
                            >Check And Submit</label
                            >
                        </div>
                        <div>
                            <button type="button" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );

}
export default Section1; 