import { useQuery } from '@apollo/client';
import Card from '../Card';
import { CardsQuery } from './CardsQuery';
import styled from 'styled-components';
import { TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackRoutes } from '../../navigator/Routes';

const CardsContainer = () => {
    const navigation = useNavigation();
    const { loading, error, data } = useQuery(CardsQuery);

    if (loading) return <Message>Loading...</Message>;
    if (error) return <Message>Error: {error.message}</Message>

    return (
        <ScrollView 
            horizontal={true}
            style={{paddingBottom: 30}}
            showsHorizontalScrollIndicator={false}
        >
            {data.cardsCollection.items.map((card, index) => (    
                <TouchableOpacity 
                    key={index}
                    onPress={() => navigation.push(StackRoutes.SECTION, {
                        section: card
                    })}
                >
                    <Card
                        title={card.title}
                        image={card.image}
                        logo={card.logo}
                        caption={card.caption}
                        subtitle={card.subtitle}
                    />
                </TouchableOpacity> 
            ))}
        </ScrollView>
    );
}

export default CardsContainer;

const Message = styled.Text`
    margin: 20px;
    color: #b8bece;
    font-size: 15px;
    font-weight: 500;
`;