import React, {Component} from 'react'

export const Tab = ({children}) => {
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

class Tabs extends Component {
  state = {
    activeIndex: this.props.activeIndex
  }

  tabChange = (event, index) => {
    event.preventDefault()
    this.setState({
      activeIndex: index
    })
    this.props.onTabChange(index)
  }

  render() {
    const {children} = this.props
    const {activeIndex} = this.state
    return (
      <ul className="nav nav-tabs nav-fill my-4">
        {
          React.Children.map(children, (child, index) => {
            const activeName = activeIndex === index ? 'nav-link active' : 'nav-link'
            return (
              <li className="nav-item">
                <a className={activeName} href="#" onClick={evt => this.tabChange(evt, index)}>{child}</a>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default Tabs
