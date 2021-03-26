import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import 'semantic-ui-css/semantic.min.css'
import {Card, Icon} from 'semantic-ui-react'
import Button from "react-bootstrap/Button";

class Rooms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: [],
            filter: []
        }
        this.compareOccupancy = this.compareOccupancy.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.reset = this.reset.bind(this);
        this.comparePriceHightoLow = this.comparePriceHightoLow.bind(this);
        this.handlePriceHighToLow = this.handlePriceHighToLow.bind(this);
        this.comparePriceLowtoHigh = this.comparePriceLowtoHigh.bind(this);
        this.handlePriceLowToHigh = this.handlePriceLowToHigh.bind(this);
      }

    // Method used to sort through Occupancies
    compareOccupancy(a, b) {
        if (a.Occupancy > b.Occupancy) return 1;
        if (b.Occupancy > a.Occupancy) return -1;
        return 0;
    }

    // Method used to sort through Price from High to Low
    comparePriceHightoLow(a, b) {
        if (a.price > b.price) return -1;
        if (b.price > a.price) return 1;
        return 0;
    }

    // Deals with Price filter
    handlePriceHighToLow(e) {
        console.log(e);
        console.log(this.state.filter);
        let filteredArray = [...this.state.listings];
        filteredArray = filteredArray.sort(this.comparePriceHightoLow);
        this.setState({filter: filteredArray});
        console.log(this.state.filter)
    }

    // Method used to sort through Price from High to Low
    comparePriceLowtoHigh(a, b) {
        if (a.price > b.price) return 1;
        if (b.price > a.price) return -1;
        return 0;
    }

    // Deals with Price filter
    handlePriceLowToHigh(e) {
        console.log(e);
        console.log(this.state.filter);
        let filteredArray = [...this.state.listings];
        filteredArray = filteredArray.sort(this.comparePriceLowtoHigh);
        this.setState({filter: filteredArray});
        console.log(this.state.filter)
    }

    // Deals with Occupancy filter
    handleChange(e) {
        console.log(this.state.filter);
        let filteredArray = [...this.state.listings];
        filteredArray = filteredArray.sort(this.compareOccupancy);
        this.setState({filter: filteredArray});
        console.log(this.state.filter)
    }

    reset() {
        let originalArray = [...this.state.listings];
        console.log(originalArray);
        this.setState({filter: originalArray});
    }
    
    componentDidMount() {
        //Receives listings from api
        axios.get('/api/listing', {
        })
        .then(res => {
            this.setState({listings: res.data});
            this.setState({filter: res.data});
            console.log(this.state.listings)
        });
    }
    
    render() {
        return (
            <div className="container" style={{paddingTop: "30px"}}>
                <div style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Link to="/dashboard" className="btn-flat waves-effect">
                        <i className="material-icons left">keyboard_backspace</i> Back to Dashboard
                    </Link>
                    <h1 style={{textAlign:"center", margin: "0px"}}><strong>Room Listings</strong></h1>
                    <div style={{paddingTop: "10px"}}>
                        <Dropdown style={{display: "inline", padding: "0px 10px"}}>
                            <Dropdown.Toggle style={{backgroundColor: "#FFFB9B", color: "black", borderColor: "#FFFB9B"}}>
                                Sort By
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.handlePriceLowToHigh}>Price Low to High</Dropdown.Item>
                                <Dropdown.Item eventKey="Price" onClick={this.handlePriceHighToLow}>Price High to Low</Dropdown.Item>
                                <Dropdown.Item eventKey="Occupancy" onSelect={this.handleChange}>Occupancy</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown style={{display: "inline", padding: "0px 10px"}}>
                            <Dropdown.Toggle style={{backgroundColor: "#FFFB9B", color: "black", borderColor: "#FFFB9B"}}>
                                Filter By
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>Price Low to High</Dropdown.Item>
                                <Dropdown.Item>Price High to Low</Dropdown.Item>
                                <Dropdown.Item>Occupancy</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button variant="light" onClick={this.reset} style={{margin: "0px 10px"}}>
                            Reset
                        </Button>
                    </div>
                    
                </div>
                <div className="row" style={{margin: "30px 10px", justifyContent: 'center'}}>
                    {this.state.filter.map((listing) => {
                        console.log(listing);
                        var occupancy = "Occupancy: " + listing.Occupancy;
                        var extra = ( <div> <Icon name='user'/> {occupancy} </div>);
                        var price = "Price: $" + listing.price;
                        var card = (
                            <Link to="/room" style={{margin: '20px', justifyContent: 'center'}}>
                                <Card centered
                                    link
                                    image='https://cdn2.atlantamagazine.com/wp-content/uploads/sites/4/2015/11/1115_homepark05_cck_oneuseonly.jpg'
                                    header={listing.name}
                                    meta={listing.location}
                                    extra = {extra}
                                    description = {price}
                                    />
                            </Link>
                        );
                        return card
                    })};
                </div>
            </div>
        );
    }
}

export default Rooms;