import React, { Component } from 'react';
import {Card , CardDeck} from 'react-bootstrap'
import Uppercase from './Uppercase';
import Footer from "./Footer";



class App extends Component {
   constructor(props){
       super(props)
       this.state ={
           articles:[]
       }
   }
    componentDidMount(){
      fetch( 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b4ec2664dc034e3ebf30329aa004c569')
      .then((response) => {
          return response.json()
        })
        .then((myjson) => {
            this.setState({
                articles: myjson.articles
              })
              
           console.log(myjson)
      }) 
    }
    render() {

        return (
          <div>
             <Uppercase />
             
              {this.state.articles.map((item, index) => {
                  return(
                    <>
                      <main className='card-main'>
                   <CardDeck className='card_Deck'>
                    <Card style={{ width: '28rem' }} className= 'card'> 
                     <Card.Img variant="top" src={item.urlToImage} className="imgBox" />
                   <Card.Body className='cardBody'>
                     <Card.Title className='cardTitle'>{item.title}</Card.Title>
                     <Card.Text className="text-author">{item.author}</Card.Text>
                     <Card.Text className="text-content">{item.content}</Card.Text>
                     <Card.Text className="text-description">{item.description}</Card.Text>  
                    </Card.Body>
                    <a href ={item.url} className='readMore'> Read more </a>
                    </Card>
                    </CardDeck>
                    </main>
                    </>
                  )
              })}
              <Footer />     
          </div>
        )
    }
}

export default App



