import { TableRow } from '@mui/material';
import { useState } from 'react';
import { Data } from './SwimmersTable.component';
import { AllSwimmersCollapseBody } from './AllSwimmersCollapseBody.component';
import { TableValues } from './TableValues.component';

interface Props {
  row: Data;
  isSmartphone: boolean;
}

export const AllSwimmersRow = ({ row, isSmartphone }: Props) => {
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
        <AllSwimmersCollapseBody row={row} open={open} />
      </TableRow>
    </>
  );
};
