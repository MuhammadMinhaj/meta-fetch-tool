import PropTypes from 'prop-types'
import { List, ListItem } from '../../components/list'

const handler = (data, index, arr) => (
  <ListItem
    key={data?.name}
    keyName={data?.name || 'N/A'}
    keyText={data?.value || 'N/A'}
    disabledDivider={index === arr.length - 1}
  />
)
// Main DataList component
export const DataList = ({ data }) => <List>{data?.map(handler)}</List>

// Prop types
DataList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
}
