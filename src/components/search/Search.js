import React, { Component } from "react";
import { TextField, SelectField, MenuItem } from "material-ui";
import axios from "axios";
import ImageResults from "../image-results/ImageResults";

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: "",
            amount: 15,
            apiUrl: "https://pixabay.com/api",
            apiKey: "12713807-2afa4d2fe79b08a56f881f55b",
            images: []
        };
    }

    onTextChange = e => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val }, () => this.fetchImages(val));
    };

    onAmountChange = (e, index, value) => {
        const val = this.state.searchText;
        this.setState({ amount: value }, () => this.fetchImages(val));
    };

    fetchImages = val => {
        if (val === "") {
            this.setState({ images: [] });
        } else {
            axios
                .get(
                    `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
                        this.state.searchText
                    }&image_type=photo&per_page=${
                        this.state.amount
                    }&safesearch=true`
                )
                .then(res => this.setState({ images: res.data.hits }))
                .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <div style={{margin: "1rem"}}>
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search for images"
                    fullWidth={false}
                />
                <br />
                <SelectField
                    name="amount"
                    floatingLabelText="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    style={{ textAlign: "left" }}
                >
                    <MenuItem value={5} primaryText="5" />
                    <MenuItem value={10} primaryText="10" />
                    <MenuItem value={15} primaryText="15" />
                    <MenuItem value={30} primaryText="30" />
                    <MenuItem value={50} primaryText="50" />
                </SelectField>
                <br />
                {this.state.images.length > 0 ? (
                    <ImageResults images={this.state.images} />
                ) : null}
            </div>
        );
    }
}
