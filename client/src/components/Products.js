import React, { useState, useEffect } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Card, CardImg, CardBody, CardText, Nav, NavItem, NavLink } from 'reactstrap';

const ProductList = () => {
    let [input, setInput] = useState("");
    let [colour, setColour] = useState()
    let [products, setProducts] = useState([]);

    const handleInput = ({ target }) => {
        setInput(target.value);
    }

    const handleForm = async (e) => {
        e.preventDefault();
        await fetch(`/api/products/${input} - ${colour}`)
            .then(res => res.json())
            .then(data => setProducts(data));
        console.log(products);
    }

    const colourSelect = ({ target }) => {
        setColour(target.value);
    }

    useEffect(() => {
        async function fetchData() {
            await fetch("/api/products/Cotton Twill Cap - Blue")
                .then(res => res.json())
                .then(data => setProducts(data));
        }
        fetchData();
    }, [])

    if (products === []) {
        return (
            <Container>
                <Form>
                    <FormGroup>
                        <Label for="search">
                            Search by Description
                        </Label>
                        <Input
                            id="search"
                            name="search"
                            placeholder="Enter description to search..."
                            type="text"
                            value={input}
                            onChange={handleInput}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="colour">
                            Colour
                        </Label>
                        <Input
                            id="colour"
                            name="colour"
                            type="select"
                            onChange={colourSelect}
                        >
                            <option value="Blue">
                                Blue
                            </option>
                            <option value="Red">
                                Red
                            </option>
                            <option value="Green">
                                Green
                            </option>
                            <option value="Black">
                                Black
                            </option>
                            <option value="White">
                                White
                            </option>
                        </Input>
                    </FormGroup>
                    <Button
                        color="primary"
                        onClick={handleForm}
                    >
                        Search
                    </Button>
                </Form>
            </Container>
        );
    } else {
        return (
            <div style={{ width: "90%", margin: "auto", display: "flex", flexDirection: "row" }}>
                <div style={{ minWidth: "15%", backgroundColor: "rgb(33, 37, 41)" }}>
                    <div>
                        <Nav
                            vertical
                        >
                            <NavItem>
                                <NavLink
                                    active
                                    href="#"
                                >
                                    T-shirts
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    Jeans
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                    <Form>
                        <FormGroup>
                            <Label for="search">
                                Search by Description
                            </Label>
                            <Input
                                id="search"
                                name="search"
                                placeholder="Enter description to search..."
                                type="text"
                                value={input}
                                onChange={handleInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="colour">
                                Colour
                            </Label>
                            <Input
                                id="colour"
                                name="colour"
                                type="select"
                                onChange={colourSelect}
                            >
                                <option value="Blue">
                                    Blue
                                </option>
                                <option value="Red">
                                    Red
                                </option>
                                <option value="Green">
                                    Green
                                </option>
                                <option value="Black">
                                    Black
                                </option>
                                <option value="White">
                                    White
                                </option>
                            </Input>
                        </FormGroup>
                        <Button
                            color="primary"
                            onClick={handleForm}
                        >
                            Search
                        </Button>
                    </Form>
                </div>


                <div style={{ display: "flex", flexWrap: "wrap", columnGap: "20px", justifyContent: "center" }}>
                    {products.map((product, id) => {
                        return (
                            <div key={id} style={{ width: "20%" }}>
                                <Card>
                                    <CardBody style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "150px" }}>
                                        {/* <CardTitle tag="h5">
                                            {product.product_title}
                                        </CardTitle> */}
                                        <CardText tag="h5">
                                            {product.product_description.split(".")[0]}
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

export default ProductList;