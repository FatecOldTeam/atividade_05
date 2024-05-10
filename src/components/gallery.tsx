import { Card, Col, Container, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import Bolo from '../galeria/bolo.jpg'
import Pao from '../galeria/paoDeQueijo.jpg'
import Pizza from '../galeria/pizza.jpg'
import Tapioca from '../galeria/tapioca.jpg'

const imagens = [
    { src: Bolo, alt: 'Imagem do café' },
    { src: Pao, alt: 'Imagem do café' },
    { src: Pizza, alt: 'Imagem do café' },
    { src: Tapioca, alt: 'Imagem do café' },
];
const Gallery: React.FC = () => {

    return (
        <section className="gallery">
            <Container className="mt-5">
                <h2>Galeria</h2>
                <Row>
                    {imagens.map((imagem) => (
                        <Col md={4} key={imagem.src}>
                            <Card className="mb-3">
                                <Image src={imagem.src} alt={imagem.alt} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Gallery;
