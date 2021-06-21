// Write your code here.
import FaqQ from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="app-Con">
      <div className="bg-con">
        <h1 className="heading">FAQs</h1>
        <ul className="q-con">
          {faqsList.map(eachQ => (
            <FaqQ key={eachQ.id} faqDetails={eachQ} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
