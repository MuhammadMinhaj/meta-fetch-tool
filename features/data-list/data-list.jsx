import { List, ListItem } from '../../components/list'
export const DataList = ({ children, ...rest }) => {
  return (
    <div className="w-[50%] m-auto">
      <h3 className="text-lg font-bold text-indigo-900">Meta Data</h3>
      <List>
        <ListItem keyName="Name" keyText="Value" />
        <ListItem keyName="Name" keyText="Value" />
        <ListItem keyName="Name" keyText="Value" />
        <ListItem keyName="Name" keyText="Value" disabledDivider />
      </List>
    </div>
  )
}
