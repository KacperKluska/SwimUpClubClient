import { Button, Collapse, TableCell } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslations } from '../../translations/src';
import { Data } from '../SwimmersTable/SwimmersTable.component';
import { StyledCollapsedBody } from '../SwimmersTable/SwimmersTable.styles';

interface Props {
  row: Data;
  open: boolean;
}

export const MyCoachesCollapseBody = ({ row, open }: Props) => {
  const translate = useTranslations();
  const navigate = useNavigate();

  const handleViewData = async (userEmail: string) => {
    navigate(`/user/coach/${userEmail}`, { replace: true });
  };

  return (
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <StyledCollapsedBody>
          <Button
            type="button"
            variant="outlined"
            color="primary"
            onClick={() => handleViewData(row.email)}
          >
            {translate('mySwimmersPage.view')}
          </Button>
        </StyledCollapsedBody>
      </Collapse>
    </TableCell>
  );
};
