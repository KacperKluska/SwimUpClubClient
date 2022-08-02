import { Button, Collapse, TableCell } from '@mui/material';
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslations } from '../../translations/src';
import { Data } from './SwimmersTable.component';
import { UserContext } from '../../context/UserContext';
import { SnackBarContext } from '../../context/SnackBarContext';
import { StyledCollapsedBody } from './SwimmersTable.styles';

interface Props {
  row: Data;
  open: boolean;
  refreshData: () => void;
}

export const MySwimmersCollapseBody = ({ row, open, refreshData }: Props) => {
  const translate = useTranslations();
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);
  const { setSnackBar } = useContext(SnackBarContext);
  const { user } = userData;

  const handleRemove = async (email: string) => {
    if (
      // eslint-disable-next-line no-restricted-globals
      confirm(
        translate('mySwimmersPage.confirmRemoveMessage', { value: email }),
      )
    ) {
      try {
        const result = await axios.delete(
          'http://localhost:3001/users-coaches',
          {
            params: { swimmerEmail: email, coachEmail: user?.email ?? '' },
            withCredentials: true,
          },
        );
        setSnackBar(result.data.message, 'success');
        refreshData();
      } catch (error) {
        setSnackBar(
          translate('mySwimmersPage.removeMessageError', { value: email }),
          'error',
        );
      }
    }
  };

  const handleViewData = async (userEmail: string) => {
    navigate(`/coach/user/${userEmail}`, { replace: true });
  };

  return (
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <StyledCollapsedBody>
          <Button
            type="button"
            variant="outlined"
            color="error"
            onClick={() => handleRemove(row.email)}
          >
            {translate('mySwimmersPage.remove')}
          </Button>
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
