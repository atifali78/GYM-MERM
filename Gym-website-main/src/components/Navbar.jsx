import  { useState } from 'react';

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showProductModal, setShowProductModal] = useState(false);

  // State to manage login, signup, and product form data
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [productData, setProductData] = useState({
    productName: '',
    price: '',
    description: '',
    image: '',
  });

  const [loginError, setLoginError] = useState(null);
  const [signupError, setSignupError] = useState(null);
  const [productError, setProductError] = useState(null);

  // Modal open/close handlers
  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);

  const openSignupModal = () => setShowSignupModal(true);
  const closeSignupModal = () => setShowSignupModal(false);

  const openProductModal = () => setShowProductModal(true);
  const closeProductModal = () => setShowProductModal(false);

  // Handle form input change for Login
  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form input change for Signup
  const handleSignupInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form input change for Product
  const handleProductInputChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission for Login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoginError(null);

    const { email, password } = loginData;

    try {
      const response = await fetch('https://example.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
        alert('Login successful!');
        closeLoginModal();
      } else {
        const errorData = await response.json();
        setLoginError(errorData.message || 'Invalid login credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginError('Failed to log in. Please try again later.');
    }
  };

  // Handle form submission for Signup
  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setSignupError(null);

    const { username, email, password } = signupData;

    try {
      const response = await fetch('https://example.com/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful:', data);
        alert('Signup successful!');
        closeSignupModal();
      } else {
        const errorData = await response.json();
        setSignupError(errorData.message || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setSignupError('Failed to sign up. Please try again later.');
    }
  };

  // Handle form submission for Product
  const handleProductSubmit = async (e) => {
    e.preventDefault();
    setProductError(null);

    const { productName, price, description, image } = productData;

    // Add your API call logic here
    try {
      const response = await fetch('https://example.com/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productName, price, description, image }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Product added successfully:', data);
        alert('Product added successfully!');
        closeProductModal();
      } else {
        const errorData = await response.json();
        setProductError(errorData.message || 'Error adding product.');
      }
    } catch (error) {
      console.error('Error during product submission:', error);
      setProductError('Failed to add product. Please try again later.');
    }
  };

  return (
    <>
      <header>
        <p>BODY & SOUL FITNESS</p>
        <div className="nav-links">
          <a href="#login" onClick={openLoginModal}>Login</a>
          <a href="#signup" onClick={openSignupModal}>Signup</a>
          <a href="#products" onClick={openProductModal}>Products</a>
        </div>
      </header>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeLoginModal}>&times;</span>
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={loginData.email}
                onChange={handleLoginInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={loginData.password}
                onChange={handleLoginInputChange}
                required
              />
              <button type="submit">Login</button>
              {loginError && <p className="error">{loginError}</p>}
            </form>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeSignupModal}>&times;</span>
            <h2>Signup</h2>
            <form onSubmit={handleSignupSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={signupData.username}
                onChange={handleSignupInputChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={signupData.email}
                onChange={handleSignupInputChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={signupData.password}
                onChange={handleSignupInputChange}
                required
              />
              <button type="submit">Signup</button>
              {signupError && <p className="error">{signupError}</p>}
            </form>
          </div>
        </div>
      )}

      {/* Product Modal */}
      {showProductModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeProductModal}>&times;</span>
            <h2>Add Product</h2>
            <form onSubmit={handleProductSubmit}>
              <input
                type="text"
                name="productName"
                placeholder="Product Name"
                value={productData.productName}
                onChange={handleProductInputChange}
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={productData.price}
                onChange={handleProductInputChange}
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={productData.description}
                onChange={handleProductInputChange}
                required
              />
              <br/>

              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={productData.image}
                onChange={handleProductInputChange}
                required
              />
              <button type="submit">Add Product</button>
              {productError && <p className="error">{productError}</p>}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
