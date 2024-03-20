import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'


export default function Movies1() {
  return (
    <>
<Container>
<Row>
  <Col style={{backgroundColor:'rgb(235, 235, 235)'}}>
    <center>
   <Image height={150} width={150}  src="https://assets-in.bmscdn.com/m6/images/common/placeholder.png" 
   />
   </center>
    </Col>
</Row>
</Container>

    <div><h2 style={{margin:'10px',paddingLeft:'80px'}}> Recommended Movies</h2>
    <Container>
        <Row>
            <Col>
   
    <Card style={{ width: '10rem', border:'10px'}}>
      <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny45LzEwICAxMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00368739-qqquklesel-portrait.jpg "
      width="100%" height="100%" style={ {borderRadius:"10px"}} />
    </Card>
    <h4>Jatt Nu Chudail Takri</h4>
     <h5>Comedy</h5> 
        <h5>Punjabi Movie</h5>
        </Col>

       <Col>
        <Card style={{ width: '10rem',border:'10px'}}>
      <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4yLzEwICAxNS4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00318073-vnxhzuzaak-portrait.jpg" alt="Yodha" width="100%" height="100%"
     style={ {borderRadius:"10px"}} />
    </Card>
    <h4>Yodha</h4>
        <h5>Action Thriller</h5>
        <h5>Hindi Movie</h5>
        </Col>

    <Col>
        <Card style={{ width: '10rem',border:'10px'}}>
      <Card.Img variant="top" src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgNjI0IFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00366835-hywfldcdnm-portrait.jpg" alt="Blackia 2" width="100%" height="100%"
       style={ {borderRadius:"10px"}} />
    </Card>
    <h4>Blackia 2</h4>
    <h5>Action/Crime/Drama</h5>
        <h5>Punjabi Movie</h5>
        </Col>

<Col>
        <Card style={{ width: '10rem',border:'10px'}}>
      <Card.Img variant="top"  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgODEuOEsgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384234-namrszxlsp-portrait.jpg" alt="Shaitaan" width="100%" height="100%"
       style={ {borderRadius:"10px"}}/>
    </Card>
    <h4>Shaitaan</h4>
    <h5>Thriller</h5>
    <h5>Hindi Movie</h5>
    </Col>


    <Col>
    <Card style={{ width: '10rem',border:'10px'}}>
      <Card.Img variant="top"  alt="Kung Fu Panda 4" width="100%" height="100%" class="sc-eykeme-1 jrtRfk"   src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC41LzEwICAxMC42SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00379741-rxxpavyhrq-portrait.jpg"
       style={ {borderRadius:"10px" ,opacity: "1"}}/>
    </Card>
    <h4>Kung Fu Panda 4</h4>
    <h5>Action/Adventure/Comedy</h5>
    </Col>
    </Row>
    </Container>

    <Container>
<Row>
  <Col>
  <Card style={{padding:'25px',border:'10px'}}>
    <Card.Img variant='top'  src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/stream-leadin-web-collection-202210241242.png" alt="Stream" width="100%" height="100%"/>
    </Card>
    </Col>
</Row>
</Container>
</div>
</>
  )
}