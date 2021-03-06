import ReactTable from 'react-table';
import PropTypes from 'prop-types';
const {
  libraries: { React },
} = NEXUS;
const Table = ({ data, columns, defaultSortingColumnIndex, ...rest }) => (
  <ReactTable
    noDataText={'No Rows Found'}
    minRows={5}
    PropTypes={PropTypes}
    data={data}
    pageText={'Page'}
    columns={columns}
    defaultSorted={[{ ...columns[defaultSortingColumnIndex], desc: true }]}
    rowsText={'rows'}
    previousText={'< ' + 'Previous'}
    getTbodyProps={() => {
      return { style: { overflow: 'hidden' } };
    }}
    nextText={'Next' + ' >'}
    {...rest}
    className={`-striped -highlight ${rest.className}`}
  />
);

export default Table;
