import React, {Component} from 'react'
import Ionicon from 'react-ionicons'
import './style.css'

export default class CategorySelect extends Component {
  selectCategory = categoryId => {
    this.props.onSelectCategory(categoryId)
  }

  render() {
    const {categories, selectedCategoryId} = this.props
    return (
      <div className="container-fluid category-select-component">
        <div className="row">
          {
            categories.map((category, index) => {
              const activeName = selectedCategoryId === category.id
                ? 'category-item active'
                : 'category-item'

              return (
                <div className="col-3" key={category.id}>
                  <div
                    className={activeName}
                    key={index}
                    onClick={() => this.selectCategory(category.id)}>
                    <Ionicon
                      className="rounded-circle"
                      fontSize="40px"
                      color="#555"
                      icon={category.iconName}
                    /><br/>
                    <span>{category.name}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
