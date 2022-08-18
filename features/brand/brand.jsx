import PropTypes from 'prop-types'
// Main Brand component
export const Brand = ({ imgSrc, title }) => {
  return (
    <div className="flex flex-col items-center py-5">
      <img src={imgSrc} alt={title} className="max-w-[100px] h-auto" />
      <h3 className="text-lg font-bold text-indigo-900 py-2">
        {title || 'N/A'}
      </h3>
    </div>
  )
}

// Prop types
Brand.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
