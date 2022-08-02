import { Button, Collapse, TableCell } from '@mui/material';
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslations } from '../../translations/src';
import { Data } from './SwimmersTable.component';
import { UserContext } from '../../context/UserContext';
import { SnackBarContext } from '../../context/SnackBarContext';
import { handleAxiosError } from '../../utils/handleAxiosError';
import { StyledCollapsedBody } from './SwimmersTable.styles';

interface Props {
  row: Data;
  open: boolean;
}

export const AllSwimmersCollapseBody = ({ row, open }: Props) => {
  const translate = useTranslations();
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);
  const { setSnackBar } = useContext(SnackBarContext);
  const { user } = userData;

  const handleAddSwimmerToCoachList = async (swimmerEmail: string) => {
    try {
      await axios.post(
        'http://localhost:3001/users-coaches',
        {},
        {
          params: { swimmerEmail, coachEmail: user?.email ?? '' },
          withCredentials: true,
        },
      );
      setSnackBar(translate('allSwimmersPage.addedToMyList'), 'success');
    } catch (error) {
      const errorMsg = translate('allSwimmersPage.addToMyListError', {
        value: swimmerEmail,
      });
      handleAxiosError(error, setSnackBar, errorMsg);
    }
  };

  const handleViewData = (userEmail: string) => {
    navigate(`/coach/user/${userEmail}`, { replace: true });
  };

  return (
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <StyledCollapsedBody>
          <Button
            type="button"
            variant="outlined"
            color="success"
            onClick={() => handleAddSwimmerToCoachList(row.email)}
          >
            {translate('allSwimmersPage.addToMyList')}
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
