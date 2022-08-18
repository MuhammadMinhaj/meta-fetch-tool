export const Button = ({ children, ...rest }) => {
  return (
    <button
      className="p-3 text-white bg-indigo-700 hover:bg-white hover:text-indigo-700 border-l-2 hover:border-indigo-700"
      {...rest}
    >
      {children}
    </button>
  )
}
