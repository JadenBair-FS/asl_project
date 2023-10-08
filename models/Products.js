let products = [
  { id: "1", name: "Product 1", description: "Description 1", price: 100 },
];

const all = () => {
  return products;
};

const find = (id) => {
  return products.find((item) => item.id === id);
};

const create = (product) => {
  const id = Number(products[products.length - 1].id) + 1 + "";
  products.push({ id, ...product });
  return products[products.length - 1];
};

const update = (id, product) => {
  products = products.map((item) => {
    return item.id === id ? product : item;
  });
  return products;
};

const remove = (id) => {
  products = products.filter((item) => item.id !== id);
  return products;
};

module.exports = { all, find, create, update, remove };
