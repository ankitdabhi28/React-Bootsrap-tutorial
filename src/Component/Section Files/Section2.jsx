function Section2() {

    return (
        <section className=" container ">

            <div className="row">
                {/* <!-- Bottom left --> */}
                <div className="col-xl-4 col-lg-6">
                    <div className="bg-light bl-con-1">
                        <div className="d-flex border-bottom p-3">
                            <div className="user-detail">Name :</div>
                            <div className="">Ankit Dabhi</div>
                        </div>
                        <div className="d-flex border-bottom p-3">
                            <div className="user-detail">Email :</div>
                            <div className="">ankit@gmail.com</div>
                        </div>
                        <div className="d-flex border-bottom p-3">
                            <div className="user-detail">Phone :</div>
                            <div className="">7418529630</div>
                        </div>
                        <div className="d-flex p-3">
                            <div className="user-detail">Address :</div>
                            <div className="">Joshipura , Junagadh</div>
                        </div>
                    </div>
                </div>

                {/* <!-- Bottom Right --> */}
                <div className="col-xl-4 col-lg-6">
                    <div className="bg-light bl-con-2 p-3">
                        {/* <!-- 1st --> */}
                        <div className="d-flex justify-content-between border-bottom p-3">
                            <div><img src={require('../pngwing.png')} alt="" /></div>
                            <div>asdsdfgdf@dsdfh.com</div>
                        </div>
                        {/* <!-- 2nd --> */}
                        <div className="d-flex justify-content-between border-bottom p-3">
                            <div><img src={require('../pngwing.png')} alt="" /></div>
                            <div>aujnkf@dsdfh.com</div>
                        </div>
                        {/* <!-- 3 --> */}
                        <div className="d-flex justify-content-between border-bottom p-3">
                            <div><img src={require('../pngwing.png')} alt="" /></div>
                            <div>axcrftyu@dsdfh.com</div>
                        </div>
                        {/* <!-- 4 --> */}
                        <div className="d-flex justify-content-between border-bottom p-3">
                            <div><img src={require('../pngwing.png')} alt="" /></div>
                            <div>axcrftyu@dsdfh.com</div>
                        </div>
                        {/* <!-- 5 --> */}
                        <div className="d-flex justify-content-between p-3">
                            <div><img src={require('../pngwing.png')} alt="" /></div>
                            <div>a@dfh.com</div>
                        </div>
                    </div>
                </div>

                {/* <!-- full Bottom --> */}
                <div className="col-xl-4 col-lg-12">
                    <div className="bl-con-3 bg-light p-3">
                        Bottom right
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet. Lorem ipsum Lorem ipsum dolor sit
                                amet consectetur adipisicing elit. Dolorum, rerum. dolor sit
                                amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Dolorum, rerum. ipsum dolor sit
                                amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet. Lorem Lorem ipsum dolor sit amet
                                consectetur adipisicing elit. Dolorum, rerum. ipsum dolor sit
                                amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>


    );

}
export default Section2; 