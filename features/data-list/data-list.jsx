import { List, ListItem } from '../../components/list'

export const DataList = ({ data }) => {
  return (
    <div className="w-[50%] m-auto">
      <h3 className="text-lg font-bold text-indigo-900">Meta Data</h3>
      <List>{data?.map(handler)}</List>
    </div>
  )
}

const handler = (data, index, arr) => (
  <ListItem
    key={data?.name}
    keyName={data?.name || 'N/A'}
    keyText={data?.value || 'N/A'}
    disabledDivider={index === arr.length - 1}
  />
)
