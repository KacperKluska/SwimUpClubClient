import { IconButton, TableCell, TableRow } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Data } from './SwimmersTable.component';
import { MySwimmersCollapseBody } from './MySwimmersCollapseBody.component';

interface Props {
  row: Data;
  isSmartphone: boolean;
  refreshData: () => void;
}

export const MySwimmersRow = ({ row, isSmartphone, refreshData }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow
        hover
        role="checkbox"
        tabIndex={-1}
        key={row.email}
        sx={{
          '& > *': { borderBottom: 'unset' },
          '&:hover': { cursor: 'pointer' },
        }}
        onClick={() => setOpen(!open)}
      >
        <>
          {!isSmartphone && (
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
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
      <TableRow>
        <MySwimmersCollapseBody
          row={row}
          open={open}
          refreshData={refreshData}
        />
      </TableRow>
    </>
  );
};
