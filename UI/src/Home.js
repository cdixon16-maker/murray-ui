/*import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css";
*/

/*
function Home(props){
    return(
      
<Carousel className="Carousel">
  <Carousel.Item>
    <img
      className="Bathroom"
      src="./Images/Bathroom.jpg"
      alt="Bathroom"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="Ceiling"
      src="./Images/Ceiling.jpg"
      alt="Ceiling"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="Dining"
      src="./Images/Dining.jpg"
      alt="Dining"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="Kitchen"
    src="./Images/Kitchen.jpg"
    alt="Kitchen"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="Living"
    src="./Images/Livingroom.jpg"
    alt="Living Room"
    />
  </Carousel.Item>
</Carousel>

    )};
export default Home;



class Carousel extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      images: []
    }
    this.moveToNextSlide = this.moveToNextSlide.bind(this);
  }
  componentDidMount()
  {
    if (this.props.images)
    {
      this.setState(
        {
          images: this.props.images.map(function(img, idx)
          {
            return <Slide key={`slide${idx}`} src={img} />
          })
        }
      )
    }
  }
  moveToNextSlide() {

  }
  render()
  {
    return (
      <div className="carousel"> 
        {this.state.images}
        <div className="leftButton" onClick={}></div>
        <div className="rightButton" onClick={}></div>
      <img src="???" />
      </div>
    )
  }
}

class Slide extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      style: {}
    }
    this.moveSlide = this.moveSlide.bind(this);
  }
  moveSlide(idx) {
    this.setState(
      {
        style: {
          marginLeft: `${idx * 100}vw`
        }
      }
    )
  }
  render() {
    return (
      <div className="slide"> 
      
      </div>
    )
  }
}
*/

import React from 'react';
import "./Home.css";
export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: this.props.images || [],
            slides: [],
            currentSlide: null,
            currentIndex: 0,
            slideKeys: [],
            containerStyle: {
                maxHeight: this.props.height
            }
        }
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }
    componentDidMount() {
        this.setState({
            slides: Object.keys(this.refs).map((key) => {
                return this.refs[key];
            }),
            slideKeys: Object.keys(this.refs)
        })
    }
    async nextSlide() {
        const { currentIndex, slideKeys } = this.state;
        const lastIndex = slideKeys.length - 1;
        let nextIndex = 0;
        if (currentIndex !== lastIndex) {
            nextIndex = currentIndex + 1;
        }
        this.setState({
            currentIndex: nextIndex,
            currentSlide: this.state.slides[nextIndex],
        })
        console.log(this.state)
        this.state.slides[0].moveSlide(nextIndex);
    }
    prevSlide = () => {
        console.log('prev slide');
        const { currentIndex, slideKeys } = this.state;
        const lastIndex = slideKeys.length - 1;
        let nextIndex = lastIndex;
        if (currentIndex !== 0) {
            nextIndex = currentIndex - 1;
        }
        this.setState({
            currentIndex: nextIndex,
            currentSlide: this.state.slides[nextIndex],
        })
        console.log(this.state)
        this.state.slides[0].moveSlide(nextIndex);
    }
    render() {
        return (
            <div className="carouselContainer" style={this.state.containerStyle}>
                <div className="moveLeft carouselControl" onClick={this.prevSlide}><i className="left"></i></div>
                <div className="moveRight carouselControl" onClick={this.nextSlide}><i className="right"></i></div>
                {this.state.images.map((img, idx) => {
                    return <Slide key={`slide${idx}`} ref={`slide${idx}`} height={this.props.height} title={img} />
                })}
            </div>
        )
    }
}
class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.moveSlide = this.moveSlide.bind(this);
        this.state = {
            speed: this.props.speed || 0.2,
            style: {
                width: '100vw',
                marginLeft: '0',
                height: this.props.height,
                backgroundImage: `url('./images/${this.props.title}')`
            }
        }
    }
    moveSlide(index) {
        this.setState({
            style: {
                width: '100vw',
                marginLeft: `-${index * 100}vw`,
                height: this.props.height,
                backgroundImage: `url('./images/${this.props.title}')`,
                transition: `margin ${this.state.speed}s ease 0.2s`
            }
        })
    }
    render() {
        return (
            <div className="slide" style={this.state.style}>
            </div>
        )
    }
}
export { Slide };