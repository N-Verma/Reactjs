import React, { Component } from "react";
import "./MyCart.css";
import {connect} from 'react-redux'
import MegaMenu from "../UI/MegaMenu/MegaMenu";
import BreadCrumb from "../UI/BreadCrumb/BreadCrumb";
import img from "../../assets/images/product1.jpg";
import Footer from "../UI/Footer/Footer";
class myCart extends Component {
 
  render() {
   
    let products=(
      this.props.cartDetails.map(item=>{
        return(
          <div>
            <p>{item.name}</p>
            <p>{item.price}</p>
          </div>
        )
      })
    )
    console.log(this.props.cartDetails)
    return (
      <React.Fragment>
        <div className="wraping">
          <MegaMenu />
        </div>

        <div className="mycart-data">
          <BreadCrumb addrs="My Cart" />
          <form>
      
          <div className="data-headers ">
            <h6>Image</h6>
            <h6>Product</h6>
            <h6>Price</h6>
            <h6>Quantity</h6>
            <h6>Delete</h6>
       
            <img
              src={img}
              alt="product"
              style={{
                width: "100px",
                height: "100px",
                borderBottom: "1px solid #777",
                borderRight: "1px solid #777",
                padding:"10px 15px"
              }}
            />
            <p
              style={{
                borderBottom: "1px solid #777",
                borderRight: "1px solid #777",
                padding:"10px 15px"

              }}
            >
              hello
            </p>
            <p
              style={{
                borderBottom: "1px solid #777",
                borderRight: "1px solid #777",
                padding:"10px 15px"
              }}
            >
              hello
            </p>

            <input
              type="number"
              style={{
                width: "200px",
                height: "50px",
                borderBottom: "1px solid #777",
                borderRight: "1px solid #777",
                padding:"10px 15px"
              }}
              min="0"
            />
            <p
              style={{
                borderBottom: "1px solid #777",
                borderRight: "1px solid #777",
                padding:"10px 15px"
              }}
            >
              <i className="fas fa-trash" />
            </p>

            
          </div>
        </form>
        </div>
      
      

        
        <Footer />
        {products}
      </React.Fragment>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    cartDetails:state.cart.allproducts
  }
}

export default connect(mapStateToProps)(myCart);
