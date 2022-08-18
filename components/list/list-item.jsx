export const ListItem = ({ keyName, keyText, disabledDivider }) => {
  if (disabledDivider) {
    return (
      <li className="flex justify-between p-2 border-none">
        <span className="font-[500] text-[#53646c]">{keyName}</span>
        <span>{keyText}</span>
      </li>
    )
  }
  return (
    <li className="flex justify-between p-2 border-b">
      <span className="font-[500] text-[#53646c]">{keyName}</span>
      <span>{keyText}</span>
    </li>
  )
}
