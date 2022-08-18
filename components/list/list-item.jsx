export const ListItem = ({ keyName, keyText, disabledDivider }) => {
  if (disabledDivider) {
    return (
      <li className="flex justify-between p-2 border-none font-mono">
        <span className="font-bold pr-3 text-[#53646c]">{keyName}</span>
        <span className="text-right">{keyText}</span>
      </li>
    )
  }
  return (
    <li className="flex justify-between p-2 border-b font-mono">
      <span className="font-bold text-[#53646c] pr-3">{keyName}</span>
      <span className="text-right">{keyText}</span>
    </li>
  )
}
