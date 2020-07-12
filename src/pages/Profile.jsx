import React from 'react'

class ProfileComponent extends React.Component {

    render() {
        return (
            <div>
                <h2>Hello to Profile #{this.props.match.params.profileId}</h2>
            </div>
        )
    }
}

export default ProfileComponent