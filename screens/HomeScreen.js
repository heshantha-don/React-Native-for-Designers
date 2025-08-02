import React from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, Animated, Easing, StatusBar } from 'react-native';
import styled from 'styled-components';
import Card from '../components/Card';
import { NotificationIcon } from '../components/Icons';
import Logo from '../components/Logo';
import Course from '../components/Course';
import Menu from '../components/Manu';
import { connect } from 'react-redux';
import { toggleMenuState  } from '../redux/menuSlice';

function mapStateToProps(state) {
    return { action: state.menuState.isMenuOpen.action }
}

function mapDispatchToProps(dispatch) {
    return {
         toggleMenuState: () => dispatch(toggleMenuState())
    };
}

class HomeScreen extends React.Component {
  state = {
    scale: new Animated.Value(1), 
    opacity: new Animated.Value(1)
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    Animated.timing(this.state.scale, {
      toValue: this.props.action ? 0.9 : 1,
      duration: 300,
      easing: Easing.in(),
    }).start()

    Animated.spring(this.state.opacity, {
      toValue: this.props.action ? 0.5 : 1
    }).start()

    StatusBar.setBarStyle(this.props.action ? "light-content" : "dark-content", this.props.action);
  };

  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer style={{ transform: [{ scale: this.state.scale }], opacity: this.state.opacity }}>
            <SafeAreaView style={{flex: 1}}>
              <ScrollView>
                <TitleBar>
                  <TouchableOpacity 
                    onPress={this.props.toggleMenuState} 
                    style={{ position: "absolute", top: 0, left: 20 }}
                  >
                    <Avatar source={require("../assets/avatar.jpg")} />
                  </TouchableOpacity>
                  <Title>Welcome back,</Title>
                  <Name>Heshantha</Name>
                  <NotificationIcon
                    style={{ position: "absolute", right: 20, top: 5}}
                  />
                </TitleBar>

                <ScrollView 
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  style={{padding: 20, paddingLeft: 12, paddingTop: 30}}
                >
                  {logos.map((logo, index) => (
                    <Logo 
                      key={index}
                      image={logo.image}
                      text={logo.title}
                    />
                  ))}
                </ScrollView>

                <Subtitle>Continue Learning</Subtitle>
                <ScrollView 
                  horizontal={true}
                  style={{paddingBottom: 30}}
                  showsHorizontalScrollIndicator={false}
                >
                  {
                    cards.map((card, index) => (
                      <Card
                        key={index}
                        title={card.title}
                        image={card.image}
                        logo={card.logo}
                        caption={card.caption}
                        subtitle={card.subtitle}
                      /> 
                    ))
                  }
                </ScrollView>

                <Subtitle>Popular Courses</Subtitle>
                <ScrollView 
                  style={{paddingBottom: 35}}
                >
                  {
                    courses.map((course, index) => (
                      <Course 
                        key={index}
                        title={course.title}
                        subtitle={course.subtitle}
                        image={course.image}
                        logo={course.logo}
                        author={course.author}
                        avatar={course.avatar}
                        caption={course.caption}
                      />
                    ))
                  }
                </ScrollView>
              </ScrollView>
            </SafeAreaView>
        </AnimatedContainer>
      </RootView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const RootView = styled.View`
  background: black;
  flex: 1;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
  border-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container)

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const logos = [
    {
        image: require("../assets/logo-framerx.png"),
        title: "Framer X",
    },
    {
        image: require("../assets/logo-figma.png"),
        title: "Figma"
    },
    {
        image: require("../assets/logo-studio.png"),
        title: "Studio"
    },
    {
        image: require("../assets/logo-react.png"),
        title: "React"
    },
    {
        image: require("../assets/logo-swift.png"),
        title: "Swift"
    },
    {
        image: require("../assets/logo-sketch.png"),
        title: "Sketch"
    },
];

const cards = [
  {
    title: "React Native for Designers",
    image: require('../assets/background11.jpg'),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require('../assets/logo-react.png'),
  },
  {
    title: "Styled Components",
    image: require('../assets/background12.jpg'),
    subtitle: "React Native",
    caption: "2 of 12 sections",
    logo: require('../assets/logo-react.png'),
  },
  {
    title: "Props and Icons",
    image: require('../assets/background13.jpg'),
    subtitle: "React Native",
    caption: "3 of 12 sections",
    logo: require('../assets/logo-react.png'),
  },
  {
    title: "Static Data and Loop",
    image: require('../assets/background14.jpg'),
    subtitle: "React Native",
    caption: "4 of 12 sections",
    logo: require('../assets/logo-react.png'),
  },
];

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require('../assets/background13.jpg'),
    logo: require('../assets/logo-studio.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Design and interactive prototype'
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require('../assets/background11.jpg'),
    logo: require('../assets/logo-react.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Learn to design and code a React site'
  },
  {
    title: "Design and Code with Frame X",
    subtitle: "10 sections",
    image: require('../assets/background14.jpg'),
    logo: require('../assets/logo-framerx.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Create powerful design and code components for your app'
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require('../assets/background6.jpg'),
    logo: require('../assets/logo-figma.png'),
    author: 'Meng To',
    avatar: require('../assets/avatar.jpg'),
    caption: 'Complete guide to designing a site using a collaborative design tool'
  },
]; 