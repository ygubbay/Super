import React from 'react'
import Product from '../components/product'

export default class  CategoryList extends React.Component {
  constructor(props) {
        super(props);

        this.state = {
            category: {id: this.props.id, name: this.props.name},
            products: this.props.products
        }
  
    }
    
    render() {

      var products = [];
      this.state.products.map((p) => products.push(<Product key={p.id} id={p.id} name={p.name} category={p.category}  />) )

      return (
         <div className="category_list">
          <h2>{this.state.category.name}</h2>

          <div>
            {products}
          </div>
        </div>
        );
    }
}

