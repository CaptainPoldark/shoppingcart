function NavBar({ menuitems, minstock }) {
    const { Button } = ReactBootstrap;

    //Filter any items below the minimum stock
    const menuitems1 = menuitems.filter(item => item.instock >= minstock)
    
    //create new list with list items from the filtered array
    const updatedList = menuitems1.map((item, index) => {
      return <Button variant="primary" key={index}>{item.name}: {item.instock}</Button>;
    });

    return <ul style={{ listStyleType: "none" }}>{updatedList}</ul>;
  }
  const menuItems = [
    { name: "apple", instock: 2 },
    { name: "pineapple", instock: 3 },
    { name: "pear", instock: 0 },
    { name: "peach", instock: 3 },
    { name: "orange", instock: 1 }
  ];
  ReactDOM.render(
    <NavBar menuitems={menuItems} minstock={2} />,
    document.getElementById("root")
  );
  