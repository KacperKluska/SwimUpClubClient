import { IconButton, TableCell, TableRow } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Data } from './SwimmersTable.component';

interface Props {
  open: boolean;
  isSmartphone: boolean;
  toggleOpen: () => void;
  row: Data;
}

export const TableValues = ({ open, toggleOpen, isSmartphone, row }: Props) => (
  <TableRow
    hover
    role="checkbox"
    tabIndex={-1}
    key={row.email}
    sx={{
      '& > *': { borderBottom: 'unset' },
      '&:hover': { cursor: 'pointer' },
    }}
    onClick={toggleOpen}
  >
    <>
      {!isSmartphone && (
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={toggleOpen}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      )}
      <TableCell key="name" align="left">
        {row.name}
      </TableCell>
      <TableCell key="surname" align="left">
        {row.surname}
      </TableCell>
      <TableCell key="email" align="left">
        {row.email}
      </TableCell>
    </>
  </TableRow>
);
