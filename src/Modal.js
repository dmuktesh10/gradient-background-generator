import PropTypes from "prop-types";
import "./Modal.css";
import ColourPallete from "./ColourPallete";
function Modal(props) {
  const onClose = (e) => {
    props.onClose && props.onClose(e);
  };
  if (props.show) {
    return (
      <div className="mmodal" id="modal">
        <h2>Modal Window</h2>
        <ColourPallete />
        <div className="content">{props.children}</div>
        <div className="actions">
          <button className="toggle-button btn btn-primary" onClose={onClose}>
            close
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
};
export default Modal;
