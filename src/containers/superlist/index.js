import React from 'react'
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as api from '../../api';
import CategoryList from '../../components/category-list'

class SuperList extends React.Component {
  constructor(props) {
        super(props);

          this.state = {
            categories: []
          }
       // this.state = {
       //     "categories": [{id: "1000", name: "Fridge"},
       // {id: "1001", name: "Bakery"}]
        }

        componentWillMount() {

          const cats = api.productsByCategory();
          this.setState( { categories: cats } );
    
       }
  
    

    
    render() {

      const cat_list2 = [];
      this.state.categories.map((val) => cat_list2.push(<CategoryList key={val.id} name={val.name} products={val.products} />));
      
      return (
         <div>
    <h1>Super List</h1>

    <div>
      {cat_list2}
      <div className="no_float"></div>
    </div>


    <div>
      <button className="primary_button">Save</button>
    </div>    
   
  </div>
        );
    }
}


const mapStateToProps = ({ counter }) => ({
  count: counter.count,
  isIncrementing: counter.isIncrementing,
  isDecrementing: counter.isDecrementing
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
     
      changePage: () => push('/about-us')
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SuperList)
