import React, { useState, useEffect } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Card, CardImg, CardBody, CardText, Row, Col, Alert } from 'reactstrap';

const Shoes = () => {
    let [input, setInput] = useState("Shoes");
    let [colour, setColour] = useState("Black")
    let [products, setProducts] = useState([]);
    let [error, setError] = useState(false)

    const handleInput = ({ target }) => {
        setInput(target.value);
    }

    const handleForm = async (e) => {
        e.preventDefault();
        await fetch(`/api/products?type=${input}&colour=${colour}`)
            .then(res => res.json())
            .then(data => (data.length > 0) ? setProducts(data) : setError(true));
    };

    const colourSelect = ({ target }) => {
        setError(false)
        setColour(target.value);
    }

    useEffect(() => {
        async function fetchData() {
            await fetch(`/api/products?type=${input}&colour=${colour}`)
                .then(res => res.json())
                .then(data => setProducts(data));
        }

        fetchData();
    }, [])

    const productRange = ["T-Shirt", "Jeans", "Hat", "Jumper", "Coat", "Shoes", "Socks"];
    const colourOptions = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Grey", "Black", "White"];

    if (error) {
        return (
            <div style={{ width: "90%", margin: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ minWidth: "80%", display: "flex", justifyContent: "center" }}>
                    <Form>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="search">
                                        Product
                                    </Label>
                                    <Input
                                        id="search"
                                        name="search"
                                        type="select"
                                        onChange={handleInput}
                                    >
                                        <option selected>Choose Product</option>
                                        {productRange.map((product) => {
                                            return (
                                                <option disabled value={product}>
                                                    {product}
                                                </option>)
                                        })}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Row>
                                        <Col>
                                            <Label for="colour">
                                                Colour
                                            </Label>
                                        </Col>
                                        <Input
                                            id="colour"
                                            name="colour"
                                            type="select"
                                            onChange={colourSelect}
                                        >
                                            <option selected disabled>Choose Colour</option>
                                            {colourOptions.map((colour) => {
                                                return (
                                                    <option value={colour}>
                                                        {colour}
                                                    </option>)
                                            })}
                                        </Input>
                                    </Row>
                                </FormGroup>
                            </Col>
                            <Col>
                                <Button style={{ marginTop: "32px" }}
                                    color="primary"
                                    onClick={handleForm}
                                >
                                    Search
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>

                <br />

                <Alert color="warning">{`We're sorry, we are currently out of stock for ${input}s in ${colour}. Please try adjusting your search parameters.`}</Alert>
            </div>
        )
    } else {
        return (
            <div style={{ width: "90%", margin: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ minWidth: "80%", display: "flex", justifyContent: "center" }}>
                    <Form>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="search">
                                        Product
                                    </Label>
                                    <Input
                                        id="search"
                                        name="search"
                                        type="select"
                                        onChange={handleInput}
                                    >
                                        <option selected disabled>Choose Product</option>
                                        {productRange.map((product) => {
                                            return (
                                                <option value={product}>
                                                    {product}
                                                </option>)
                                        })}
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Row>
                                        <Col>
                                            <Label for="colour">
                                                Colour
                                            </Label>
                                        </Col>
                                        <Input
                                            id="colour"
                                            name="colour"
                                            type="select"
                                            onChange={colourSelect}
                                        >
                                            <option selected disabled>Choose Colour</option>
                                            {colourOptions.map((colour) => {
                                                return (
                                                    <option value={colour}>
                                                        {colour}
                                                    </option>)
                                            })}
                                        </Input>
                                    </Row>
                                </FormGroup>
                            </Col>
                            <Col>
                                <Button style={{ marginTop: "32px" }}
                                    color="primary"
                                    onClick={handleForm}
                                >
                                    Search
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>


                <div style={{ display: "flex", flexWrap: "wrap", columnGap: "20px", justifyContent: "center" }}>
                    {products.map((product, id) => {
                        return (
                            <div key={id} style={{ width: "20%" }}>
                                <Card>
                                    <CardBody style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "150px" }}>
                                        <CardText tag="h5">
                                        {product.product_description.includes("PREMIUM QUALITY") ? product.product_description.split(". ")[1].split(".")[0] : product.product_description.split(".")[0]}
                                        </CardText>
                                        <CardText>
                                            <strong>£{product.price}</strong>
                                        </CardText>
                                    </CardBody>
                                    <CardImg
                                        alt="Product image"
                                        src={product.image_urls}
                                        width="100%"
                                        height="auto"
                                    />
                                </Card>
                                <br />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Shoes;