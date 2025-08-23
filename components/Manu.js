import React from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import MenuItem from "./MenuItem";
import { connect } from "react-redux";
import { toggleMenuState } from '../redux/menuSlice';

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;
var cardWidth = screenWidth;
if (screenWidth > 500) {
    cardWidth = 500;
}

function mapStateToProps(state) {
    return { action: state.menuState?.action || false }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleMenuState: () => dispatch(toggleMenuState())
    };
}

class Menu extends React.Component {
    state = {
        top: new Animated.Value(screenHeight)
    };
    
    componentDidMount() {
        this.toggleMenu();
    }

    componentDidUpdate() {
        this.toggleMenu();
    }

    toggleMenu = () => {
        Animated.spring(this.state.top, {
            toValue: this.props.action ? 65 : screenHeight,
            useNativeDriver: false
        }).start();
    };
    
    render() {
        return (
            <AnimatedContainer style={{ top: this.state.top }}>
            <Cover>
                <Image source={require("../assets/background2.jpg")} />
                <Title>Meng To</Title>
                <Subtitle>Designer at Design+Code</Subtitle>
            </Cover>
            <TouchableOpacity 
            onPress={this.props.toggleMenuState}
            style={{
                position: "absolute",
                top: 120,
                left: "50%",
                marginLeft: -22,
                zIndex: 1,
            }}
            >
                <CloseView>
                <Ionicons name="close-outline" size={44} color="#546bfb"></Ionicons>
                </CloseView>
            </TouchableOpacity>
            <Content>
                {
                items.map((item, index) => (
                    <MenuItem 
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    text={item.text}
                    />
                ))
                }
            </Content>
            </AnimatedContainer>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const Container = styled.View`
    position: absolute;
    background: white;
    width: ${cardWidth};
    align-self: center;
    height: 100%;
    z-index: 100;
    border-radius: 10px;
    overflow: hidden;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container)

const Image = styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const Title = styled.Text`
    color: white;
    font-size: 24px;
    font-weight: 600;
`;

const Subtitle = styled.Text`
    color: rgba(255, 255, 255, 0.5);
    font-size: 13px;
    margin-top: 8px;
`;

const Cover = styled.View`
    height: 142px;
    background: black;
    justify-content: center;
    align-items: center;
`;

const CloseView = styled.View`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background: white;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Content = styled.View`
    height: ${screenHeight};
    background: #f0f3f5;
    padding: 50px;
`;

const items = [
    {
        icon: "settings-outline",
        title: "Account",
        text: "settings"
    },
    {
        icon: "card-outline",
        title: "Billing",
        text: "payments"
    },
    {
        icon: "compass-outline",
        title: "Learn React",
        text: "start course"
    },
    {
        icon: "exit-outline",
        title: "Log out",
        text: "see you soon!"
    },
];
