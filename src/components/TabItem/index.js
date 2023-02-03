// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onDisplayClick = () => {
    setActiveTabId(tabId)
  }

  const tabClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="list">
      <button type="button" onClick={onDisplayClick} className={tabClassName}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
