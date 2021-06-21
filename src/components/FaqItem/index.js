import {Component} from 'react'

import './index.css'

const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqQ extends Component {
  state = {moreInfo: false}

  showAns = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {moreInfo} = this.state

    if (moreInfo) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onClickPlus = () => {
    this.setState(prevState => ({moreInfo: !prevState.moreInfo}))
  }

  showIcon = () => {
    const {moreInfo} = this.state
    const imUrl = moreInfo ? minusImg : plusImg
    const altText = moreInfo ? 'minus' : 'plus'
    return (
      <button type="button" className="button" onClick={this.onClickPlus}>
        <img className="img" src={imUrl} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="item ">
        <div className="Q-container">
          <h1 className="question">{questionText}</h1>
          {this.showIcon()}
        </div>
        {this.showAns()}
      </li>
    )
  }
}

export default FaqQ
