import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    GridList,
    GridTile,
    IconButton,
    Dialog,
    FlatButton
} from "material-ui";
import { ActionZoomIn } from "material-ui/svg-icons";

export default class ImageResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            currentImg: ""
        };
    }

    handleOpen = img => {
        this.setState({ open: true, currentImg: img });
    };

    handleClose = () => {
        this.setState({ open: false, currentImg: "" });
    };

    render() {
        let imageListContent;
        const { images } = this.props;
        if (images) {
            imageListContent = (
                <GridList cols={3}>
                    {images.map(img => (
                        <GridTile
                            title={img.tags}
                            key={img.id}
                            subtitle={
                                <span>
                                    by <strong>{img.user}</strong>
                                </span>
                            }
                            actionIcon={
                                <IconButton
                                    onClick={() =>
                                        this.handleOpen(img.largeImageURL)
                                    }
                                >
                                    <ActionZoomIn color="white" />
                                </IconButton>
                            }
                            onClick={() => this.handleOpen(img.largeImageURL)}
                            style={{ cursor: "pointer" }}
                        >
                            <img src={img.largeImageURL} alt={img.tags} />
                        </GridTile>
                    ))}
                </GridList>
            );
        } else {
            imageListContent = null;
        }

        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onClick={this.handleClose}
            />
        ];

        return (
            <div>
                {imageListContent}
                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <img
                        src={this.state.currentImg}
                        style={{ width: "100%" }}
                        alt="zoomed in"
                    />
                </Dialog>
            </div>
        );
    }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired
};
