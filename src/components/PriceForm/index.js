import React, { Component } from 'react'

class PriceForm extends Component {
  static defaultProps = {
    items: {},
  }

  state = {
    validatePass: true,
    errorMessage: '',
    title: '',
    price: '',
    date: '',
  }

  submitForm = event => {
    event.preventDefault()
    const title = this.titleInput.value.trim()
    const price = this.priceInput.value.trim() * 1
    const date = this.dateInput.value.trim()

    if (price && date && title) {
      if (price < 0) {
        this.setState({
          validatePass: true,
          errorMessage: '价格数字必须大于0',
        })
      } else if (!/\d{4}\/\d}{2}\/\d{2}/.test(date)) {
        this.setState({
          validatePass: true,
          errorMessage: '请填写正确的日期格式',
        })
      } else {
        this.setState({
          validatePass: true,
          errorMessage: '',
        })
        console.log('提交成功')
      }
    } else {
      this.setState({
        validatePass: false,
        errorMessage: '请输入所有选项',
      })
    }
  }

  changeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  changePrice = event => {
    this.setState({
      price: event.target.value,
    })
  }

  changeDate = event => {
    this.setState({
      date: event.target.value,
    })
  }

  render() {
    const { validatePass, errorMessage, title, price, date  } = this.state
    return (
      <div style={{ marginTop: '30px' }} className="container-fluid">
        <form onSubmit={event => this.submitForm(event)} noValidate>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              标题: *
            </label>
            <div className="col-sm-9">
              <input
                value={title}
                required
                placeholder="请输入标题"
                ref={input => (this.titleInput = input)}
                onChange={e => this.changeTitle(e)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              金额: *
            </label>
            <div className="col-sm-9">
              <input
                value={price}
                type="number"
                required
                placeholder="请输入金额"
                ref={input => (this.priceInput = input)}
                onChange={e => this.changePrice(e)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              日期: *
            </label>
            <div className="col-sm-9">
              <input
                type="date"
                className="form-control"
                required
                value={date}
                ref={input => (this.dateInput = input)}
                onChange={e => this.changeDate(e)}
              />
            </div>
          </div>

          <button className="btn btn-primary" type="submit">
            提交
          </button>
          <button className="btn btn-secondary" type="reset">
            取消
          </button>
          {!validatePass && (
            <div className="alert alert-danger mt-5" role="alert">
              {errorMessage}
            </div>
          )}
        </form>
      </div>
    )
  }
}

export default PriceForm
