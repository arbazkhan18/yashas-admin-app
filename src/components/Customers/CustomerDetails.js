import React from 'react';

const CustomerDetails = (props) => {
    const id = props.match.params.id

    return (
        <div className="container section customer-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title"> Customer details - {id}
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    </span>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>added by the ruck</div>
                    <div>on 3rd dec 2019</div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

export default CustomerDetails;