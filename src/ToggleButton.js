import PropTypes from 'prop-types';
import './ToggleButton.css'

const propTypes = {
    status: PropTypes.string,
    className: PropTypes.string,
};

const ToggleButton = (props) => {

    const currentStatus = (props.status) === '1' ? true : false;
    return (
        <div className={props.className ? props.className : ''}>
            <label className="switch">
                <input type="checkbox"
                    defaultChecked={currentStatus}
                />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

ToggleButton.propTypes = propTypes;
export default ToggleButton;