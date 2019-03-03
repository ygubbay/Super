import React from 'react'

export default class  Product extends React.Component {
  constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            name: this.props.name,
            category: this.props.category
        }
  
    }
    
    render() {

      
      return (

         <div className="product_line">
           <div className="product_name">{this.state.name}</div>
           <div className="product_amount" ><input type="text" className="product_input" /></div>
           <div className="product_check"><input type="checkbox" className="product_cb" /></div>
        </div>
        );
    }
}
