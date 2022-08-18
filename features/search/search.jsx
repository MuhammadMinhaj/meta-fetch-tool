import PropTypes from 'prop-types'
import { Button, Input } from '../../components/core'

// Main Search component
export const Search = ({ handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex border-2 border-indigo-700 rounded-md overflow-hidden"
    >
      <Input placeholder="https://example.com" name="url" />
      <Button type="submit">Search</Button>
    </form>
  )
}
// Prop types
Search.propTypes = {
  handleSubmit:PropTypes.func
}