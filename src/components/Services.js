import React from "react";
import { storeProducts } from "./data";
function Services() {
  return (
    <div className="container services-container">
      <h1 className="heading-of-product">
        OUR Products is available here in cheap rates
      </h1>
      <div className="row">
        {storeProducts.map((item) => {
          return (
            <>
              <div
                className="col card-container
               col-md-3 col-lg-4 "
              >
                <div class="card">
                  <img
                    class="card-image "
                    src={item.img}
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">$ {item.price}</p>
                    <a href="#" class="btn btn-primary">
                      click for detail
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
