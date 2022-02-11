import { Card, Button, Form } from "react-bootstrap";

const ShoppingСart = () => {
  return (
    <div className="shop-cont">
      <Card style={{ width: "60%", margin: "0px auto 20px" }}>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

      <Form.Control type="text" id="inputText" />
    </div>
  );
};

export default ShoppingСart;
