// const { Component } = require('react');
// const {
//   Animated, Easing
// } = require('react-native');


// class SlidingBox extends Component {
//   constructor(props) {
//     super(props);
//     this.slideIn = Animated.timing(
//       this.state.slide,
//       { toValue: {x: 200, y: 0},
//         duration:2000,
//         delay: 1000,
//         easing: Easing.in(Easing.ease) }
//     )
//     this.state = {
//       slide: new Animated.ValueXY({ x: 0, y: 0 })
//     }
//   }
//   render() {
//     const slideStyle = 
//     this.state.slide.getTranslateTransform();

//     return(
//       <Animated.View style={slideStyle}>
//         <Text>my box </Text>
//       </Animated.View>
//     );
//   }
//   componentDidMount() {
//     this.slideIn.start();
//   }
// }

// export default SlidingBox

// Window.onload(() => {
//   const box = document
//   .getElementsByClassName(
//     'slideIn').item(0);

//     box.style.transform = 'translate(200px, 0px)';
  
// })