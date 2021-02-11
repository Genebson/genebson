import Item from '../ItemListContainer/Item';
import ItemCount from '../counter/ItemCount';

const style = {

}

const ItemDetail = ({ detail }) => {

  let cantidad = 15

  const handleAdd = (counter) => {
    return () => {
      alert(`Se han agregado ${counter} productos`)
    }
  }

  return (
    <>
      <Item detail={detail} />
      <ItemCount onAdd={handleAdd} cantidad={cantidad} inicial={1} />
    </>
  );
};

export default ItemDetail;