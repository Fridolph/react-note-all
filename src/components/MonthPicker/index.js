import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { padLeft, range } from '../../utils'

class MonthPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      selectedYear: this.props.year,
      selectedMonth: this.props.month,
    }
  }

  toggleDropdown = e => {
    e.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  selectYear = (event, year) => {
    event.preventDefault()
    this.setState({
      selectedYear: year
    })
  }

  selectMonth = (event, month) => {
    event.preventDefault()
    const year = this.state.selectedYear
    this.setState({
      selectedMonth: month,
      isOpen: false
    })
    this.props.onDateChange({
      year,
      month
    })
  }

  componentDidMount() {

  }

  render() {
    const {selectedYear, selectedMonth} = this.state
    const {isOpen} = this.state
    const yearRange = range(9, -4).map(n => n + selectedYear)
    // console.log('yearRange: ', yearRange)
    const monthRange = range(12, 1)
    // console.log('monthRange: ', monthRange)

    return (
      <div className="dropdown month-picker-component">
        <h5 style={{color: '#ddd'}}>选择时间</h5>
        <button
          className="btn btn-lg btn-secondary dropdown-toggle"
          onClick={this.toggleDropdown}
        >
          {`${selectedYear}年${padLeft(selectedMonth)}月`}
        </button>
        {
          isOpen && <div className="dropdown-menu" style={{display: 'block'}}>
            {/* <div className="row">
              <div className="col">
                <a
                  className="dropdown-item"
                  href="#">
                  所有日期
                </a>
              </div>
            </div> */}
            <div className="row">
              <div className="col border-right">
                { yearRange.map((y, i) =>
                  <a
                    key={i}
                    className={y === selectedYear ? 'dropdown-item active' : 'dropdown-item'}
                    onClick={e => this.selectYear(e, y)}
                    href="#">
                    {y}年
                  </a>
                )}
              </div>
              <div className="col">
                { monthRange.map((m, i) =>
                  <a
                    key={i}
                    className={m === selectedMonth ? 'dropdown-item active' : 'dropdown-item'}
                    onClick={e => this.selectMonth(e, m)}
                    href="#">
                    {padLeft(m)}月
                  </a>
                )}
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default MonthPicker
