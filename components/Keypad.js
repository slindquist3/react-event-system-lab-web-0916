const React = require('react')

 class Keypad extends React.Component {
   constructor() {
     super()
      this.keyUp = this.keyUp.bind(this)
   }

   keyUp() {
     console.log("Entering password...")
   }

   render() {
     return(
       <input onKeyUp={this.keyUp} type="password" />
     )
   }
 }


 module.exports = Keypad
