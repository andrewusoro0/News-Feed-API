import React, { Component } from "react";
import { Card, CardDeck, Container, Row, Col} from "react-bootstrap";
import Uppercase from "./Uppercase";
import Footer from "./Footer";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      error: false,
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b4ec2664dc034e3ebf30329aa004c569"
    )
      .then((response) => {
        return response.json();
      })
      .then((myjson) => {
        this.setState({
          articles: myjson.articles,
        });
      })
      .catch((err) => {
        this.setState({
          articles: [],
          error: true,
        });
      });
  }
  
  render() {
    return (
      <>
        <Uppercase />

        {this.state.articles && this.state.articles.length ? (
          this.state.articles.map((item, index) => {
            return (
              <>
                <Container className="card-main">
                <Row  >
                <Col>
                  <CardDeck className="card_Deck" >
                    <Card style={{ width: "28rem" , margin:'10px' }}  className="card">
                      <Card.Img
                        variant="top"
                        src={item.urlToImage}
                        className="imgBox"
                      />
                      <Card.Body className="cardBody">
                        <Card.Title className="cardTitle">
                          {item.title}
                        </Card.Title>
                        <Card.Text className="text-author">
                          {item.author}
                        </Card.Text>
                        <Card.Text className="text-content">
                          {item.content}
                        </Card.Text>
                      </Card.Body>
                      <a href={item.url} className="readMore">
                        Read more
                      </a>
                    </Card>
                  </CardDeck>
                </Col>
                </Row>
                </Container>
              </>
            );
          })
        ) : this.state.error === true ? (
          <div className='err-msg'>
          <h1> Your connection was interrupted </h1>
          <p>Reconnecting to Wi-Fi.</p>
          <p>ERR_INTERNET_DISCONNECTED</p>
          <br />
          <form action="" method="GET URL">
           <button>Reload</button>
            </form>
          </div>
        ) : (
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <div>
        
        <Footer />
        </div>
      </>
    );
  }
}

export default App;
