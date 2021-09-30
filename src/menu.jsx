function NavBar({ stockitems }) {
    const { Button } = ReactBootstrap;
    const [stock, setStock] = React.useState(stockitems);
    const [cart, setCart] = React.useState([]);

    const moveToCart = (id, e) => {
        
        let [name, instock] = e.target.innerHTML.split(":");
        //if current stock is 0 return else find the item and add to cart
        if(instock <=0) return; 

        let item = stock.filter((item) => item.name == name);

        let newStock = stock.map((item) => {
            if (item.name == name) {
              item.instock--;
            }
            return item;
          });

        setStock([...newStock]);
        setCart([...cart,...item]);
    };
    //Filter any items below the minimum stock
    //const menuitems1 = menuitems.filter(item => item.instock >= minstock)
    
    //create new list with list items from the array
    const updatedList = stock.map((item, index) => {
        return (
            <Button onClick={(e)=> moveToCart({id:1}, e)} key={index}>
                {item.name}:{item.instock}
            </Button>
        );
    });

    return (
    <>
    <ul style={{ listStyleType: "none" }}>{updatedList}</ul>
    <h1>Shopping Cart</h1>
    <Cart cartitems={cart}> Cart Items</Cart>
    </>
    );
  }
  function Cart({ cartitems }) {
    const { Button } = ReactBootstrap;
    console.log('rendering Cart');
    const cartitem = cartitems.map((item, index) => {

      return (
        <Button id={item.name} key={index}>
          {item.name}
        </Button>
      );
    });
    return (
      <ul id="cart-items" style={{ listStyleType: 'none' }} key="cart">
        {cartitem}
      </ul>
    );
  }
  const menuItems = [
    { name: "apple", instock: 2 },
    { name: "pineapple", instock: 3 },
    { name: "pear", instock: 0 },
    { name: "peach", instock: 3 },
    { name: "orange", instock: 1 }
  ];
  ReactDOM.render(
    <NavBar stockitems={menuItems} />,
    document.getElementById("root")
  );