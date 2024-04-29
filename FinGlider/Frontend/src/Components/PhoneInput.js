import React from "react";
import { IoClose } from "react-icons/io5";

const PhoneInput = ({
  phoneNumber,
  setPhoneNumber,
  handleNext,
  setPageVisible,
  pageVisible,
  form,
}) => {
  const nameInput = document.getElementById("name");
  return (
    <div
      id="verify"
      tabIndex="5"
      className=" mt-1 d-md-block d-block container view "
      style={{ position: "absolute", fontSize: "18px", zIndex: "1500" }}
    >
      <div className="row ">
        <div
          className="card mx-auto  col-sm-4 col-lg-12 col-md-6"
          style={{ maxWidth: "400px" }}
        >
          <div
            className="px-2 pb-0 "
            style={{ position: "absolute", right: "10px" }}
          >
            <span>
              <IoClose onClick={() => setPageVisible(false)} />
            </span>
          </div>
          <div className="card-body view ">
            <h3 className="card-title text-center mb-4 mt-4">
              Enter Phone Number
            </h3>

            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Phone Number"
                  value={phoneNumber || form.phoneNumber}
                  onChange={(e) =>
                    setPhoneNumber(e.target.value || form.phoneNumber)
                  }
                />
              </div>
              <button
                type="button"
                onClick={handleNext}
                className="btn btn-primary btn-block"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneInput;
