import { TableRow } from '@mui/material';
import { useState } from 'react';
import { Data } from './SwimmersTable.component';
import { MySwimmersCollapseBody } from './MySwimmersCollapseBody.component';
import { TableValues } from './TableValues.component';

interface Props {
  row: Data;
  isSmartphone: boolean;
  refreshData: () => void;
}

export const MySwimmersRow = ({ row, isSmartphone, refreshData }: Props) => {
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
        <MySwimmersCollapseBody
          row={row}
          open={open}
          refreshData={refreshData}
        />
      </TableRow>
    </>
  );
};
