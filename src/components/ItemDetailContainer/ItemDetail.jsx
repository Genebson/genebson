import Item from '../ItemListContainer/Item';

const ItemDetail = ({ detail }) => {
  return (
    <>
      <h1>DETALLES DEL PRODUCTO</h1>
      <Item detail={detail} />
    </>
  );
};

export default ItemDetail;