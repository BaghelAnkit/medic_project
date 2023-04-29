import React from "react";
import NaveBar from "./NaveBar";
import Fotter from "./Fotter";

export default function register() {
    return (
        <div>
            <NaveBar />
            <section class="advt-post bg-gray py-5">
                <div class="container">
                    <fieldset class="border border-gary px-3 px-md-4 py-4 mb-5">
                        <div class="row">
                            <div class="col-lg-12">
                                <h3>Register</h3>
                            </div>
                            <div class="col-lg-6">
                                <h6 class="font-weight-bold pt-4 pb-1">Name</h6>
                                <input type="text" autocomplete="off" class="form-control bg-white" placeholder="Name" />
                                <h6 class="font-weight-bold pt-4 pb-1">Contact</h6>
                                <input type="text" autocomplete="off" class="form-control bg-white" placeholder="Contact" />
                                <h6 class="font-weight-bold pt-4 pb-1">Password</h6>
                                <input type="Password" autocomplete="off" class="form-control bg-white" placeholder="Password" />
                                <h6 class="font-weight-bold pt-4 pb-1">User Type:</h6>
                                <div class="row px-3">
                                    <div class="col-lg-4 mr-lg-4 my-2 pt-2 pb-1 rounded bg-white">
                                        <input type="radio" name="itemName" autocomplete="off" value="personal" id="personal" />
                                        <label for="personal" class="py-2">Doctor</label>
                                    </div>
                                    <div class="col-lg-4 mr-lg-4 my-2 pt-2 pb-1 rounded bg-white ">
                                        <input type="radio" name="itemName" value="business" id="business" required />
                                        <label for="business" class="py-2">Patient</label>
                                    </div>
                                </div>
                                <h6 class="font-weight-bold pt-4 pb-1">Description:</h6>
                                <textarea name="" id="" class="form-control bg-white" rows="7"
                                    placeholder="Write details about your product" required></textarea>
                            </div>

                            <div class="col-lg-6">
                                <h6 class="font-weight-bold pt-4 pb-1">Select Ad Category:</h6>
                                <select name="" class="form-control w-100 bg-white" id="inputGroupSelect">
                                    <option value="1">Select category</option>
                                    <option value="2">Laptops</option>
                                    <option value="3">iphone</option>
                                    <option value="4">microsoft</option>
                                    <option value="5">monitors</option>
                                    <option value="6">11inch Macbook Air</option>
                                    <option value="7">Study Table Combo</option>
                                    <option value="8">11inch Macbook Air</option>
                                    <option value="9">Study Table Combo</option>
                                    <option value="10">11inch Macbook Air</option>
                                </select>
                                <div class="price">
                                    <h6 class="font-weight-bold pt-4 pb-1">Gender</h6>
                                    <div class="row px-3">
                                        <div class="col-lg-4 ml-lg-4 my-2 pt-2 pb-1 rounded bg-white ">
                                            <input type="radio" name="itemName" value="Negotiable" id="Negotiable" />
                                            <label for="Negotiable" class="py-2">Male</label>
                                        </div>
                                        <div class="col-lg-4 ml-lg-4 my-2 pt-2 pb-1 rounded bg-white ">
                                            <input type="radio" name="itemName" value="Negotiable" id="Negotiable" />
                                            <label for="Negotiable" class="py-2">Female</label>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                {/* <br/> */}
                                <div class="choose-file text-center my-4 py-4 rounded bg-white">
                                    <label for="file-upload">
                                        <span class="d-block font-weight-bold text-dark">Drop files anywhere to upload</span>
                                        <span class="d-block">or</span>
                                        <span class="d-block btn bg-primary text-white my-3 select-files">Select files</span>
                                        <span class="d-block">Maximum upload file size: 500 KB</span>
                                        <input type="file" class="form-control-file d-none" id="file-upload" name="file" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <button type="submit" class="btn btn-primary position-relative d-block mt-2 top-10  start-80">Submit</button>
                </div>
            </section>

            <Fotter />
        </div>
    )
}