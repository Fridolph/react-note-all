import React, {Component} from 'react'
import CategorySelect from '../../components/CategorySelect'
import PriceForm from '../../components/PriceForm'

let categories = [
  {
    id: 1,
    name: '旅行',
    type: 'outcome',
    iconName: 'ios-plane'
  },
  {
    id: 2,
    name: '理财',
    type: 'income',
    iconName: 'ios-yen'
  },
  {
    id: 3,
    name: '挣外块',
    type: 'income',
    iconName: 'ios-yen'
  }
]

class Create extends Component {
  state = {
    categories: categories,
    selectedCategoryId: 1
  }

  onSelectCategory = id => {
    this.setState({
      selectedCategoryId: id
    })
  }

  render() {
    const {categories, selectedCategoryId} = this.state
    return (
      <div>
        <h2>this is the create page</h2>
        <CategorySelect categories={categories} selectedCategoryId={selectedCategoryId} onSelectCategory={this.onSelectCategory} />

        <PriceForm />
      </div>
    )
  }
}

export default Create
