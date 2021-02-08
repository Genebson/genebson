import Item from './Item'

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return <Item key={product.id} detail={product} />
      })}
    </div>
  );
};

export default ItemList;