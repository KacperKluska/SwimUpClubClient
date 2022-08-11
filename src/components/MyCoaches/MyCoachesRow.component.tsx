import { TableRow } from '@mui/material';
import { useState } from 'react';
import { Data } from '../SwimmersTable/SwimmersTable.component';
import { TableValues } from '../SwimmersTable/TableValues.component';
import { MyCoachesCollapseBody } from './MyCoachesCollapseBody.component';

interface Props {
  row: Data;
  isSmartphone: boolean;
}

export const MyCoachesRow = ({ row, isSmartphone }: Props) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <TableValues
        row={row}
        isSmartphone={isSmartphone}
        open={open}
        toggleOpen={toggleOpen}
      />
      <TableRow>
        <MyCoachesCollapseBody
          row={row}
          open={open}
        />
      </TableRow>
    </>
  );
};
