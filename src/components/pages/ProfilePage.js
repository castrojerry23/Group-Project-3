import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";

const ProfilePage = ({ isConfirmed }) => (

    <div>
        {!isConfirmed && <ConfirmEmailMessage />}
    </div>

);

ProfilePage.propTypes = {
    isConfirmed: PropTypes.bool.isRequired
};
            
function mapStateToProps(state) {
    return {
        isConfirmed: !!state.user.confirmed
    }
}

export default connect(mapStateToProps)(ProfilePage);