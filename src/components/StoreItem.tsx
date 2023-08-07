/* eslint-disable @typescript-eslint/no-unused-vars */
// import storeItems from "../data/items.json";
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import useShoppingCart from "../context/ShoppingCartContext";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  return (
    <Card className="h-100">
      <Card.Img
        src={imgUrl}
        variant="top"
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span>{name}</span>
          <span className="ms-2 text-secondary">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {getItemQuantity(id) === 0 ? (
            <Button
              className="w-100 rounded-0"
              onClick={() => increaseCartQuantity(id)}
            >
              + Add to cart
            </Button>
          ) : (
            <div className="d-flex flex-column align-items-center">
              <div
                className="d-flex justify-content-center align-items-center mb-2"
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                <span className="fs-5">{getItemQuantity(id)} in cart</span>
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant="danger"
                size="sm"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
