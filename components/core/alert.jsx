import PropTypes from 'prop-types'

// Contants
const contants = {
  error: 'ERROR:',
  warning: 'WARNING:',
  success: 'SUCCESS:',
  info: 'INFO:',
}
const textClasses = {
  error: 'text-[#ef1010]',
  warning: 'text-[#ff9800]',
  success: 'text-[#4caf50]',
  info: 'text-[#00bcd4]',
}

const borderClasses = {
  error: 'border-[#ef1010]',
  warning: 'border-[#ff9800]',
  success: 'border-[#4caf50]',
  info: 'border-[#00bcd4]',
}
// Main alert component
export const Alert = ({ type, text }) => {
  return (
    <div
      className={`font-mono text-xl border p-4 my-2 ${borderClasses[type]} rounded-lg`}
    >
      <span className={`font-bold ${textClasses[type]}`}>{contants[type]}</span>{' '}
      <span className={textClasses[type]}>{text}</span>
    </div>
  )
}
// Prop types
Alert.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
