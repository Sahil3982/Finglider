import React, { lazy, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../CartContext";
import CartBox from "./CartBox";

//const currency = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });
const currency = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});

function MenuItem(props) {
  const { updateTotalPrice, totalPrice, itemQuantities, updateQuantity } =
    useCart();
  const menuItem = props.MenuItem;
  const cart = props.cart;
  console.log(props.MenuItem);

  const { id } = useParams();
  const [price, setPrice] = useState(parseFloat(menuItem.Price));
  const [showCartButton, setShowCartButton] = useState(true);
  const [inCart, SetinCart] = useState("false");
  const quantity = itemQuantities[menuItem.MenuId] || 0;
  const isAvailable = menuItem.Available;
  const isOffer = menuItem.OfferDescription;
  const isVisible = menuItem.isVisible;

  const offerPrice = menuItem.Price - menuItem.Price * menuItem.OfferHihglight;

  const handleIncreaseQuantity = () => {
    const newQuantity = quantity + 1;
    updateQuantity(menuItem.MenuId, newQuantity);
    {
      isOffer ? updateTotalPrice(offerPrice) : updateTotalPrice(menuItem.Price);
    }
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      updateQuantity(menuItem.MenuId, newQuantity);
      {
        isOffer
          ? updateTotalPrice(-offerPrice)
          : updateTotalPrice(-menuItem.Price);
      }
    }
  };

  const handleAddToCart = () => {
    handleIncreaseQuantity();
    setShowCartButton(false);
  };

  return (
    isVisible && (
      <div className="col-md-4 mb-3">
        <div className="d-flex align-items-center list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
          <div className="list-card-image">
            <div className="bg-white favourite-heart position-absolute font-weight-bold">
              {menuItem.Type.length > 0 && (
                <div
                  className={`${
                    menuItem.Type === "Veg"
                      ? "text-success veg"
                      : menuItem.Type === "Egg"
                      ? "text-warning veg"
                      : "text-danger non_veg"
                  }`}
                >
                  {" "}
                  .
                </div>
              )}
            </div>

            {isAvailable === 0 && <div className="card-badge"> SOLD OUT</div>}
            {isOffer && <div className="offer-badge"> {isOffer}</div>}

            <img
              loading="lazy"
              alt="#"
              src={menuItem.ImageUrl}
              className="img-fluid item-img w-100"
            />
          </div>
          <div className="p-3 position-relative">
            <div className="list-card-body">
              <h6 className="mb-1">
                <span className="text-black text-wrap">{menuItem.Item}</span>
              </h6>
              <p className="text-gray text-wrap mb-3">
                {menuItem.Heighlightdescription}
              </p>

              {isOffer && (
                <div
                  style={{ textDecoration: "line-through", color: "red" }}
                  className="d-flex allign item-center pl-2 pb-1 pt-0"
                >
                  {currency.format(menuItem.Price)}
                </div>
              )}
              <p className="text-gray mb-3 time">
                <span className="bg-light text-dark bg-white rounded-sm pl-2 pb-1 pt-1 pr-2">
                  <strong className="h6 font-weight-bolder">
                    {currency.format(isOffer ? offerPrice : menuItem.Price)}
                  </strong>
                </span>
              </p>
            </div>

            <div>
              {showCartButton && (
                <div className="container col-lg-12 col-md-6">
                  {" "}
                  <span className="float-left " ng-if="">
                    <button
                      className="btn custom-rounded-btn px-3 btn-sm text-white fw-bold"
                      style={{ backgroundColor: "Salmon", fontWeight: "bold" }}
                      data-toggle="modal"
                      onClick={() => {
                        props.handleClick(menuItem);
                        handleAddToCart();
                      }}
                      data-target="#extras"
                      disabled={isAvailable === 0}
                    >
                      ADD{" "}
                    </button>
                  </span>
                </div>
              )}

              {!showCartButton && (
                <div className="d-flex flex-column align-items-center mt-2">
                  <div ng-if="(menuItem.QuantitySection==null||menuItem.QuantitySection.length==0)&&SelectedQuantity(menuItem) > 0">
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        className="btn-sm inc btn btn-outline-secondary"
                        onClick={handleDecreaseQuantity}
                      >
                        <i className="feather-minus"></i>
                      </button>
                      <a
                        href="#"
                        className="btn-sm btn btn-outline-secondary division"
                        data-toggle="modal"
                        ng-click="showQuantityMenu(menuItem,Item.SectionName)"
                        data-target="#extras"
                        style={{ display: "block" }}
                      >
                        {quantity}
                      </a>
                      <button
                        type="button"
                        className="btn-sm  dec btn btn-outline-secondary"
                        onClick={handleIncreaseQuantity}
                      >
                        <i className="feather-plus"></i>
                      </button>
                      <span ng-if="menuItem.QuantitySecton.length>0 && SelectedQuantity(menuItem)>0"></span>
                    </div>
                  </div>

                  <div className="text-center mt-2">
                    <span ng-if="(menuItem.QuantitySection==null||menuItem.QuantitySection.length==0)&&SelectedQuantity(menuItem)==0"></span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default MenuItem;
