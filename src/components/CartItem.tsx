import { Button, Stack } from "react-bootstrap";
import useShoppingCart from "../context/ShoppingCartContext";
import StoreItem from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemsProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemsProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = StoreItem.find((item) => item.id === id);
  if (!item) return;
  return (
    <>
      <Stack
        direction="horizontal"
        gap={2}
        className="d-flex align-items-center"
      >
        <img
          src={item.imgUrl}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="me-auto">
          <div>
            {item.name}{" "}
            {quantity && (
              <span className="text-muted ms-1" style={{ fontSize: "10px" }}>
                x {quantity}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {formatCurrency(item.price)}
          </div>
        </div>
        <div>
          {formatCurrency(item.price * quantity)}
          <Button
            variant="outline-danger"
            className="ms-2"
            size="sm"
            onClick={() => removeFromCart(id)}
          >
            &times;
          </Button>
        </div>
      </Stack>
    </>
  );
};

export default CartItem;
