import { Button, Input } from '../../components/core'

export const Search = ({ handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex border-2 border-indigo-700 rounded-md w-[50%] m-auto overflow-hidden"
    >
      <Input placeholder="https://example.com" name="url" />
      <Button type="submit">Search</Button>
    </form>
  )
}
