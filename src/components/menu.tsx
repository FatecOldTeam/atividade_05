import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const CardapioItem: React.FC<{ titulo: string; descricao: string; preco: number }> = (
    { titulo, descricao, preco }
) => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{titulo}</Card.Title>
                <Card.Text>{descricao}</Card.Text>
                <Card.Text>R${preco.toFixed(2)}</Card.Text>
            </Card.Body>
        </Card>
    );
};

const Menu: React.FC = () => {
    const cardapio = [
        { titulo: 'Café Expresso', descricao: 'Um café clássico e saboroso.', preco: 5.00 },
        {
            titulo: 'Café com Leite',
            descricao: 'Café com leite cremoso e delicioso.',
            preco: 6.00,
        },
        {
            titulo: 'Capuccino',
            descricao: 'Café cremoso com espuma de leite.',
            preco: 7.00,
        },
        {
            titulo: 'Mocha',
            descricao: 'Café com chocolate e chantilly.',
            preco: 8.00,
        },
        { titulo: 'Pão de Queijo', descricao: 'Pão de queijo quentinho e saboroso.', preco: 3.00 },
        { titulo: 'Croissant', descricao: 'Croissant crocante e delicioso.', preco: 4.00 },
        { titulo: 'Bolo de Chocolate', descricao: 'Bolo de chocolate fofinho e saboroso.', preco: 5.00 },
    ];

    return (
        <section className="menu">
            <Container className='d-flex flex-wrap'>
                <h2>Cardápio</h2>
                <Row>
                    {cardapio.map((item) => (
                        <Col md={4} key={item.titulo}>
                            <CardapioItem {...item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Menu;
