import React, { Component } from 'react';
import Card from "../card/card"

import devgrub from '../../assets/images/devgrub.png';
import youtube from '../../assets/images/youtube.png';
import evverest from '../../assets/images/evverest.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        items: [
            {
                id: 0,
                title: 'FaceRecognition Github',
                subTitle: 'My FaceRecognition projects',
                imgSrc: devgrub,
                link: 'https://github.com/Visavesj-dev/FaceRecognition',
                selected: false
            },
            {
                id: 1,
                title: 'Visavesj Chiangsan',
                subTitle: 'Facebook',
                imgSrc: youtube,
                link: 'https://www.facebook.com/visavesj',
                selected: false
            },
            {
                id: 2,
                title: 'Research information system',
                subTitle: 'My RIS projects',
                imgSrc: evverest,
                link: 'https://github.com/Visavesj-dev/RIS_CMU',
                selected: false
            },
            
        ]
    }
}


handleCardClick = (id, card) => {

  let items = [...this.state.items];

  items[id].selected = items[id].selected ? false : true;

  items.forEach(item => {
      if(item.id !== id) {
          item.selected = false; //ถ้าไม่ได้ ตรง id ให้เป็น false
      }
  });

  this.setState({
      items
  });
}

makeItems(item){
  return (
    item.map(item => {
      return (
         <Card item={item} click={(e)=> this.handleCardClick(item.id , e)} key={item.id} />
      );
    })
  )
}


  render() {
    return (
      <Container fluid={true}>
      <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
      </Row>
  </Container>
    );
  }
}

export default Carousel;
