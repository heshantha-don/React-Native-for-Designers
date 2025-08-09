import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { updateFirstName } from '../redux/profileSlice';

function mapStateToProps(state) {
    return { firstName: state.profileDetails?.name?.first || '' }
}

function mapDispatchToProps(dispatch) {
    return {
        updateFirstName: (firstName) => dispatch(updateFirstName(firstName))
    };
}

class Avatar extends React.Component {
    state = {
        photo: "https://www.pngkey.com/png/detail/115-1150152_default-profile-picture-avatar-png-green.png"
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/")
            .then(response => response.json())
            .then(json => {
                if (json.results && json.results[0] && json.results[0].picture && json.results[0].picture.large) {
                    this.setState({
                        photo: json.results[0].picture.large
                    });

                    this.props.updateFirstName(json.results[0].name.first);
                }
            })
            .catch(error => console.error("Error fetching avatar:", error));
    }

    render() {
        return <Image source={{ uri: this.state.photo }} />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

const Image = styled.Image`
    width: 44px;
    height: 44px;
    background: black;
    border-radius: 22px;
`;