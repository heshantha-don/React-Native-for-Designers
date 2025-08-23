import * as React from 'react';
import styled from 'styled-components';
import { TouchableOpacity, StatusBar, Linking, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import Ionicons from '@expo/vector-icons/Ionicons';
import Markdown from 'react-native-showdown';

class SectionScreen extends React.Component {
    webviewRef = React.createRef();

    static navigationOptions = {
        title: 'Section'
    };

    componentDidMount() {
        StatusBar.setBarStyle('light-content', true);
    }

    componentWillUnmount() {
        StatusBar.setBarStyle('dark-content', true);
    }

    render() {
        const { route } = this.props
        const section = route.params?.section;

        return (
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{height: '1500'}}>
                <Container>
                    <StatusBar hidden />
                    <Cover>
                        <Image source={section.image} />
                        <Wrapper>
                            <Logo source={section.logo} />
                            <Subtitle>{section.subtitle}</Subtitle>
                        </Wrapper>
                        <Title>{section.title}</Title>
                        <Caption>{section.caption}</Caption>
                    </Cover>
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.goBack()}
                        style={{ position: 'absolute', top: 20, right: 20 }}
                    >
                        <CloseView>
                            <Ionicons name='close' size={25} color='#4775f2' />
                        </CloseView>
                    </TouchableOpacity>
                    <Content>
                        {/* <WebView 
                            originWhitelist={['*']}
                            source={{ html: section.content + htmlStyle }}
                            scalesPageToFit={false}
                            style={{ flex: 1 }}
                            javaScriptEnabled={true}
                            domStorageEnabled={true}
                            scrollEnabled={false}
                            ref={this.webviewRef}
                            onNavigationStateChange={event => {
                                console.log(event);
                                if (event.url != "about:blank") {
                                    this.webviewRef.current.stopLoading();
                                    Linking.openURL(event.url);
                                }
                            }}
                        /> */}
                        <Markdown
                            body={section.content}
                            pureCSS={htmlStyle}
                            scalesPageToFit={false}
                            scrollEnabled={false}
                        />
                    </Content>
                </Container>
            </ScrollView>
        )
    }
}

export default SectionScreen

const Container = styled.View`
    flex: 1;
`

const Cover = styled.View`
    height: 375px;
`

const Image = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
`

const Title = styled.Text`
    font-size: 24px;
    color: white;
    font-weight: bold;
    width: 170px;
    position: absolute;
    top: 95px;
    left: 20px;
`

const Caption = styled.Text`
    color: white;
    font-size: 17px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: 300px;
`

const CloseView = styled.View`
    width: 32px;
    height: 32px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    justify-content: center;
    align-items: center;
`

const Wrapper = styled.View`
    flex-direction: row;
    position: absolute;
    top: 60px;
    left: 20px;
    align-items: center;
`;

const Logo = styled.Image`
    width: 24px;
    height: 24px;
`;

const Subtitle = styled.Text`
    font-size: 15px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.8);
    margin-left: 5px;
    text-transform: uppercase;
`;

const Content = styled.View`
    height: 1000%;
    padding: 12px;
    background-color: #ffffff;
`

const htmlContent = `
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <style>
        body {
          margin: 0;
          padding: 0;
        }
        img, iframe {
          max-width: 100%;
          height: auto;
        }
      </style>
    </head>
    <body>
      <div>
        <h2>This is a titile</h2>
        <p>This <strong>is</strong> a <a href="https://designcode.io">link</a></p>
        <img src="https://picsum.photos/200" />
      </div>
    </body>
  </html>
`

const htmlStyle = `
    * {
        font-family: -apple-system, Roboto;
        margin: 0,
        padding: 0;
        font-size: 17px;
        font-weight: normal;
        color: £3c4560;
        line-height: 24px;
    }

    h2 {
        font-size: 20px;
        text-transform: uppercase;
        color: #b8bece;
        font-weight: 600;
        margin-top: 50px;
    }

    p {
        margin-top: 20px;
    }

    a {
        color: #4775f2;
        font-weight: 600;
        text-decoration: none;
    }

    strong {
        font-weight: 700;
    }

    img {
        width: 100%;
        height: 300px;
        border-radius: 10px;
        margin-top: 20px;
    }

    pre {
        padding: 20px;
        background: #212C4F;
        overflow: hidden;
        word-wrap: break-word;
        border-radius: 10px;
        margin-top: 20px;
    }

    code {
        color: white;
    }
`