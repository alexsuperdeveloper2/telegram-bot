import React, { Component } from "react";
import { connect } from "react-redux";
import ReactTooltip from "react-tooltip";

import "./sidebar.css";

class Navbar extends Component {
  onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      const file = event.target.files[0];
      reader.fileName = file.name;

      reader.onloadend = (upload) => {
        this.props.handleUploadedFile(upload.target);
      };
      reader.readAsDataURL(file);
    }
  }

  render() {
    return (
      <div>
        <div
          className="sidebar-icons"
          data-tip="Edit image"
          onClick={() => this.props.handleShowSlider(this.props.showSlider)}
        >
          {this.props.showSlider ? (
            <i className="fas fa-lg fa-sun active" />
          ) : (
            <i className="fal fa-lg fa-sun" />
          )}
        </div>

        <div
          className="sidebar-icons"
          onClick={() =>
            this.props.handleShowResizeSection(this.props.showResizeSection)
          }
          data-tip="Resize image"
        >
          {this.props.showResizeSection ? (
            <i className="far fa-lg fa-compress-arrows-alt active" />
          ) : (
            <i className="fal fa-lg fa-compress-arrows-alt" />
          )}
        </div>
        <div
          className="sidebar-icons"
          data-tip="Crop image"
          onClick={() =>
            this.props.handleShowCropCanvas(this.props.showCropCanvas)
          }
        >
          {this.props.showCropCanvas ? (
            <i className="far fa-lg fa-crop-alt active" />
          ) : (
            <i className="fal fa-lg fa-crop-alt" />
          )}
        </div>

        <div
          className="sidebar-icons"
          data-tip="Rotate image"
          onClick={() =>
            this.props.handleShowRotateSection(this.props.showRotateSection)
          }
        >
          {this.props.showRotateSection ? (
            <i className="far fa-lg fa-sync-alt active" />
          ) : (
            <i className="fal fa-lg fa-sync-alt" />
          )}
        </div>
        <ReactTooltip place="right" type="info" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleShowResizeSection: (showResizeSection) => {
    dispatch({
      type: "SHOW_RESIZE_SECTION",
      payload: showResizeSection,
    });
  },
  handleShowSlider: (showSlider) => {
    dispatch({ type: "SHOW_SLIDER", payload: showSlider });
  },
  handleShowCropCanvas: (showCropCanvas) => {
    dispatch({ type: "SHOW_CROP_CANVAS", payload: showCropCanvas });
  },
  handleShowTextField: (showTextField) => {
    dispatch({ type: "SHOW_TEXT_FIELD", payload: showTextField });
  },
  handleShowRotateSection: (showRotateSection) => {
    dispatch({
      type: "SHOW_ROTATE_SECTION",
      payload: showRotateSection,
    });
  },
});

const mapPropsToState = (state) => ({
  showResizeSection: state.showResizeSection,
  showCropCanvas: state.showCropCanvas,
  showSlider: state.showSlider,
  showTextField: state.showTextField,
  errorMessage: state.errorMessage,
  image: state.image,
  showRotateSection: state.showRotateSection,
});

export default connect(mapPropsToState, mapDispatchToProps)(Navbar);
