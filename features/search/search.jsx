import PropTypes from 'prop-types'
import { Button, Input } from '../../components/core'

// Main Search component
export const Search = ({ handleSubmit, isReset }) => {
  return (
    <form
      onSubmit={(e) => handleSubmit(e, isReset)}
      className={`flex border-2 ${
        isReset ? 'border-[#ff9800]' : 'border-indigo-700'
      } rounded-md overflow-hidden`}
    >
      <Input placeholder="https://example.com" name="url" />

      {!isReset && <Button type="submit">Search</Button>}

      {isReset && (
        <button
          className="p-3 text-white bg-[#ff9800] hover:text-[#ff9800] border-[#ff9800] border-l-2 hover:bg-white"
          type="submit"
        >
          Reset
        </button>
      )}
    </form>
  )
}
// Prop types
Search.propTypes = {
  handleSubmit: PropTypes.func,
  isReset: PropTypes.bool,
}
