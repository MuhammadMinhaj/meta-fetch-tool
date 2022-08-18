import PropTypes from 'prop-types'

// Main ListItem component
export const ListItem = ({ keyName, keyText, disabledDivider }) => (
  <li
    className={`flex justify-between p-2 ${
      disabledDivider ? 'border-none' : 'border-b'
    } font-mono`}
  >
    <span className="font-bold text-[#53646c] pr-3">{keyName}</span>
    <span className="text-right">{keyText}</span>
  </li>
)

// Prop types
ListItem.propTypes = {
  keyName: PropTypes.string.isRequired,
  keyText: PropTypes.string.isRequired,
  disabledDivider: PropTypes.bool,
}
