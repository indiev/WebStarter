import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SearchIcon from '@mui/icons-material/Search';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { green, pink } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import { createTheme, Theme } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import { withStyles, WithStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, PureComponent, useState } from 'react';
import {
  AutoSizer,
  Column,
  Table,
  TableCellRenderer,
  TableHeaderProps
} from 'react-virtualized';

import { useWorkerContext } from '../../../Context';

import WorkerRegistModal from './WorkerRegistModal';

import { FlexView, Text } from 'Components';

const styles = (theme: Theme) =>
  ({
    flexContainer: {
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box'
    },
    table: {
      // temporary right-to-left patch, waiting for
      // https://github.com/bvaughn/react-virtualized/issues/454
      '& .ReactVirtualized__Table__headerRow': {
        ...(theme.direction === 'rtl' && {
          paddingLeft: '0 !important'
        }),
        ...(theme.direction !== 'rtl' && {
          paddingRight: undefined
        })
      }
    },
    tableRow: {
      cursor: 'pointer'
    },
    tableRowHover: {
      '&:hover': {
        backgroundColor: theme.palette.grey[200]
      }
    },
    tableCell: {
      flex: 1
    },
    noClick: {
      cursor: 'initial'
    }
  } as const);

interface ColumnData {
  dataKey: string;
  label: string;
  numeric?: boolean;
  width: number;
}

interface Row {
  index: number;
}

interface MuiVirtualizedTableProps extends WithStyles<typeof styles> {
  columns: readonly ColumnData[];
  headerHeight?: number;
  onRowClick?: () => void;
  rowCount: number;
  rowGetter: (row: Row) => Data;
  rowHeight?: number;
}

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      width: 24,
      height: 24,
      fontSize: 4,
      mr: 1,
      bgcolor: stringToColor(name)
    },
    children: `${name[0]}${name[1]}`
  };
}

class MuiVirtualizedTable extends PureComponent<MuiVirtualizedTableProps> {
  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48
  };

  // const [selected, setSelected] = React.useState<readonly string[]>([]);

  // isSelected = (name: string) => selected.indexOf(name) !== -1;

  getRowClassName = ({ index }: Row) => {
    const { classes, onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null
    });
  };

  cellRenderer: TableCellRenderer = ({ cellData, columnIndex }) => {
    const { columns, classes, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        align={
          (columnIndex != null && columns[columnIndex].numeric) || false
            ? 'right'
            : 'left'
        }
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null
        })}
        component="div"
        style={{
          height: rowHeight,
          justifyContent: 'center'
        }}
        variant="body"
      >
        {columns[columnIndex].dataKey === 'workerName' && (
          <Avatar {...stringAvatar(cellData as string)} />
        )}
        {
          // eslint-disable-next-line no-nested-ternary
          columns[columnIndex].dataKey === 'check' ? (
            <Checkbox />
          ) : cellData === '' ? (
            <Text style={{ color: '#B4B4B4' }}>내역 없음</Text>
          ) : (
            cellData
          )
        }
        {columns[columnIndex].dataKey === 'hasAb' &&
          (cellData ? (
            <CheckCircleIcon fontSize="small" sx={{ color: green[500] }} />
          ) : (
            <CancelIcon fontSize="small" sx={{ color: pink[500] }} />
          ))}
      </TableCell>
    );
  };

  headerRenderer = ({
    label,
    columnIndex
  }: TableHeaderProps & { columnIndex: number }) => {
    const { headerHeight, columns, classes } = this.props;

    return (
      <TableCell
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}
        className={clsx(
          classes.tableCell,
          classes.flexContainer,
          classes.noClick
        )}
        component="div"
        style={{
          height: headerHeight,
          justifyContent: 'center',
          backgroundColor: '#F7F7F7'
        }}
        variant="head"
      >
        {columns[columnIndex].dataKey === 'check' ? (
          <Checkbox />
        ) : (
          <span>{label}</span>
        )}
      </TableCell>
    );
  };

  render() {
    const { classes, columns, rowHeight, headerHeight, ...tableProps } =
      this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            className={classes.table}
            gridStyle={{
              direction: 'inherit'
            }}
            headerHeight={headerHeight!}
            height={height}
            rowHeight={rowHeight!}
            width={width}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {/* <TableCell padding="checkbox">
              <Checkbox
                // checked={isItemSelected}
                color="primary"
                inputProps={{
                  'aria-labelledby': labelId
                }}
              />
            </TableCell> */}
            {columns.map(({ dataKey, ...other }, index) => (
              <Column
                key={dataKey}
                cellRenderer={this.cellRenderer}
                className={classes.flexContainer}
                dataKey={dataKey}
                headerRenderer={(headerProps) =>
                  this.headerRenderer({
                    ...headerProps,
                    columnIndex: index
                  })
                }
                {...other}
              />
            ))}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

const defaultTheme = createTheme();
const VirtualizedTable = withStyles(styles, { defaultTheme })(
  MuiVirtualizedTable
);

// ---

interface Data {
  workerName: string;
  hasAb: boolean;
  testDate: string;
  second: string;
  third: string;
  id: string;
  retest: string;
}
type Sample = [string, boolean, string, string, string, string];

const sample: readonly Sample[] = [
  ['김민준', true, '2021.09.21', '', '', ''],
  ['김서준', false, '2021.09.19', '2021.10.22', '2021.12.08', '검사 필요'],
  ['김예준', false, '', '', '', ''],
  ['이도윤', false, '', '2021.10.22', '', ''],
  ['이시우', true, '2021.09.15', '2021.10.22', '', ''],
  ['장주원', true, '2021.09.21', '', '', ''],
  ['장하준', false, '2021.09.19', '2021.10.22', '2021.12.08', '검사 필요'],
  ['김서연', true, '', '', '', ''],
  ['김서윤', false, '2021.09.18', '2021.10.22', '', ''],
  ['이지우', true, '2021.09.15', '2021.10.22', '', ''],
  ['이서현', true, '2021.09.21', '', '', ''],
  ['장민서', false, '', '2021.10.22', '2021.12.08', '검사 필요'],
  ['장하은', true, '2021.09.20', '', '', ''],
  ['박지후', false, '2021.09.18', '2021.10.22', '', ''],
  ['박지호', true, '2021.09.15', '2021.10.22', '', ''],
  ['박준서', true, '2021.09.21', '', '', ''],
  ['박하윤', false, '2021.09.19', '2021.10.22', '2021.12.08', '검사 필요'],
  ['박윤서', true, '2021.09.20', '', '', ''],
  ['최현우', false, '2021.09.18', '2021.10.22', '', ''],
  ['최도현', true, '2021.09.15', '2021.10.22', '', ''],
  ['최지훈', true, '2021.09.21', '', '', ''],
  ['최채원', false, '2021.09.19', '2021.10.22', '2021.12.08', '검사 필요'],
  ['최지민', true, '2021.09.20', '', '', ''],
  ['최지유', false, '2021.09.18', '2021.10.22', '', ''],
  ['최은서', true, '2021.09.15', '2021.10.22', '', '']
];

function createData(
  id: string,
  workerName: string,
  hasAb: boolean,
  testDate: string,
  second: string,
  third: string,
  retest: string
): Data {
  return {
    id,
    workerName,
    hasAb,
    testDate,
    second,
    third,
    retest
  };
}

const rows: Data[] = [];

for (let i = 0; i < 200; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(
    createData(
      `M${String(Math.floor(Math.random() * 10000000)).padStart(7, '0')}`,
      ...randomSelection
    )
  );
}

export default function ReactVirtualizedTable() {
  const [team, setTeam] = useState('2');
  const [searchCategory, setSearchCategory] = useState('2');
  const [open, setOpen] = useState(false);
  const { workers, updateAntibody } = useWorkerContext();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onTeamChange = (e: SelectChangeEvent<string>) => {
    setTeam(e.target.value);
  };
  const onSearchCategoryChange = (e: SelectChangeEvent<string>) => {
    setSearchCategory(e.target.value);
  };
  const items = [...workers, ...rows];

  return (
    <Fragment>
      <WorkerRegistModal handleClose={handleClose} open={open} />
      <Stack alignItems="center" direction="row" sx={{ mb: 3 }}>
        <FlexView style={{ alignItems: 'center' }} fill row>
          <FormControl size="small" sx={{ minWidth: 80, mr: 2 }}>
            <InputLabel id="demo-simple-select-label">팀/부서</InputLabel>
            <Select
              label="팀/부서"
              labelId="demo-simple-select-label"
              value={team}
              autoWidth
              onChange={onTeamChange}
            >
              <MenuItem value="1">사업팀</MenuItem>
              <MenuItem value="2">영업팀</MenuItem>
              <MenuItem value="3">생산팀</MenuItem>
              <MenuItem value="3">프로덕트팀</MenuItem>
            </Select>
          </FormControl>
          <Paper>
            <FormControl
              size="small"
              sx={{ minWidth: 80, pl: 2, pr: 2 }}
              variant="standard"
            >
              <InputLabel id="demo-simple-select-label">검색항목</InputLabel>
              <Select
                label="검색항목"
                labelId="demo-simple-select-label"
                value={searchCategory}
                autoWidth
                onChange={onSearchCategoryChange}
              >
                <MenuItem value="1">사원명</MenuItem>
                <MenuItem value="2">사원번호</MenuItem>
              </Select>
            </FormControl>
            <InputBase
              inputProps={{ 'aria-label': 'search input' }}
              placeholder="검색어를 입력하세요"
              size="small"
              sx={{ ml: 1, flex: 1 }}
            />
            <IconButton
              aria-label="search"
              sx={{ p: '10px' }}
              type="submit"
              onClick={updateAntibody}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          <Button
            color="inherit"
            sx={{ ml: 2, color: '#323A42', borderColor: '#E1E1E1' }}
            variant="outlined"
            onClick={handleClickOpen}
          >
            + 직원 등록하기
          </Button>
        </FlexView>
      </Stack>
      {/* <Paper style={{ height: 400, width: '100%' }}> */}
      <VirtualizedTable
        columns={[
          {
            width: 200,
            label: '사원번호',
            dataKey: 'id'
          },
          {
            width: 500,
            label: '사원명',
            dataKey: 'workerName'
          },
          {
            width: 200,
            label: '항체 보유 여부',
            dataKey: 'hasAb'
          },
          {
            width: 300,
            label: '최근 항체 검사일',
            dataKey: 'testDate'
          },
          {
            width: 200,
            label: '(재)검사 요망',
            dataKey: 'retest'
          }
        ]}
        rowCount={items.length}
        rowGetter={({ index }) => items[index]}
      />
      {/* </Paper> */}
    </Fragment>
  );
}
