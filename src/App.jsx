// import  { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// const App = () => {
//   const [products, setProducts] = useState([]);
//   const [cart, setCart] = useState([]);

//   const fetchProducts = async () => {
//     const response = await axios.get('http://localhost:5000/products');
//     setProducts(response.data);
//   };

//   const fetchCart = async () => {
//     const response = await axios.get('http://localhost:5000/cart');
//     setCart(response.data);
//   };

//   const addToCart = async (product) => {
//     await axios.post('http://localhost:5000/cart', { productId: product._id });
//     fetchCart();
//   };

//   const updateCartItem = async (itemId, action) => {
//     await axios.put(`http://localhost:5000/cart/${itemId}`, { action });
//     fetchCart();
//   };

//   const deleteCartItem = async (itemId) => {
//     await axios.delete(`http://localhost:5000/cart/${itemId}`);
//     fetchCart();
//   };

//   useEffect(() => {
//     fetchProducts();
//     fetchCart();
//   }, []);

//   return (
//     <Container>
//       <h1 className="text-center my-4 bg-red">ARS CART</h1>

//       {/* Product List */}
//       <Row className="mb-4">
//         {products.map((product) => (
//           <Col md={4} key={product._id} className="mb-3">
//             <Card>
//               <Card.Img variant="top" src={product.image} />
//               <Card.Body>
//                 <Card.Title>{product.name}</Card.Title>
//                 <Card.Text>${product.price}</Card.Text>
//                 <Button variant="primary" onClick={() => addToCart(product)}>
//                   Add to Cart
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>

//       {/* Cart */}
//       <h2>Cart</h2>
//       <Row>
//         {cart.map((item) => (
//           <Col md={4} key={item._id} className="mb-3">
//             <Card>
//               <Card.Img variant="top" src={item.product.image} />
//               <Card.Body>
//                 <Card.Title>{item.product.name}</Card.Title>
//                 <Card.Text>
//                   ${item.product.price} x {item.quantity} = $
//                   {item.product.price * item.quantity}
//                 </Card.Text>
//                 <div className="d-flex justify-content-between">
//                   <Button
//                     variant="danger"
//                     onClick={() => deleteCartItem(item._id)}
//                   >
//                     Delete
//                   </Button>
//                   <div>
//                     <Button
//                       variant="secondary"
//                       onClick={() => updateCartItem(item._id, 'decrement')}
//                       disabled={item.quantity === 1}
//                     >
//                       -
//                     </Button>
//                     <Button
//                       variant="secondary"
//                       onClick={() => updateCartItem(item._id, 'increment')}
//                     >
//                       +
//                     </Button>
//                   </div>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Import custom CSS

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch products from the backend
  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:5000/products");
    setProducts(response.data);
  };

  // Fetch cart from the backend
  const fetchCart = async () => {
    const response = await axios.get("http://localhost:5000/cart");
    setCart(response.data);
  };

  // Add product to cart
  const addToCart = async (product) => {
    await axios.post("http://localhost:5000/cart", { productId: product._id });
    fetchCart();
  };

  // Update cart item (increment or decrement quantity)
  const updateCartItem = async (itemId, action) => {
    await axios.put(`http://localhost:5000/cart/${itemId}`, { action });
    fetchCart();
  };

  // Delete cart item
  const deleteCartItem = async (itemId) => {
    await axios.delete(`http://localhost:5000/cart/${itemId}`);
    fetchCart();
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Container>
      <h1 className="text-center my-4 app-title">ARS CART</h1>

      {/* Product List */}
      <h2 className="section-title">Products</h2>
      <Row className="mb-4">
        {products.map((product) => (
          <Col md={4} key={product._id} className="mb-3">
            <Card className="product-card">
              <Card.Img
                variant="top"
                src={product.image}
                className="product-image"
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Cart */}
      <h2 className="section-title">Cart</h2>
      <Row>
        {cart.map((item) => (
          <Col md={4} key={item._id} className="mb-3">
            <Card className="product-card">
              <Card.Img
                variant="top"
                src={item.product.image}
                className="product-image"
              />
              <Card.Body>
                <Card.Title>{item.product.name}</Card.Title>
                <Card.Text>
                  ${item.product.price} x {item.quantity} = $
                  {item.product.price * item.quantity}
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button
                    variant="danger"
                    onClick={() => deleteCartItem(item._id)}
                  >
                    Delete
                  </Button>
                  <div>
                    <Button
                      variant="secondary"
                      onClick={() => updateCartItem(item._id, "decrement")}
                      disabled={item.quantity === 1}
                    >
                      -
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => updateCartItem(item._id, "increment")}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default App;
