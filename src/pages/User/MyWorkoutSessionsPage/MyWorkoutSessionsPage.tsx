import TablePagination from '@mui/material/TablePagination';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import { CenteredPaper } from '../../CenteredPaper/CenteredPaper.component';
import { Data } from '../../../components/UsersTable/UsersTable.component';
import { useTranslations } from '../../../translations/src';
import { UserContext } from '../../../context/UserContext';
import { SwimmersTable } from '../../../components/SwimmersTable/SwimmersTable.component';
import useWindowDimensions from '../../../hooks/useWindowDimension';
import { LoadingPage } from '../../LoadingPage/LoadingPage';
import { MyCoachesRow } from '../../../components/MyCoaches/MyCoachesRow.component';

export const MyWorkoutSessionsPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [coaches, setCoaches] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const translate = useTranslations();
  const { userData } = useContext(UserContext);
  const { user } = userData;
  const { width } = useWindowDimensions();
  const isSmartphone = width < 756;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const getUsers = async () => {
    setLoading(true);
    const result = await axios.get(
      'http://localhost:3001/users-coaches/forSwimmer',
      {
        withCredentials: true,
        params: { email: user?.email ?? '' },
      },
    );
    if (result.status === 200) {
      setCoaches(
        result.data.coaches.map(
          (coach: { name: string; surname: string; email: string }) => ({
            name: coach.name,
            surname: coach.surname,
            email: coach.email,
          }),
        ),
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <CenteredPaper>
      <div>
        <Typography variant="h4">
          {translate('myWorkoutSessionsPage.title')}
        </Typography>
        <SwimmersTable>
          {coaches
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <MyCoachesRow
                row={row}
                isSmartphone={isSmartphone}
                key={row.email}
              />
            ))}
        </SwimmersTable>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={coaches.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage={translate('usersList.rowsPerPage')}
        />
      </div>
    </CenteredPaper>
  );
};
