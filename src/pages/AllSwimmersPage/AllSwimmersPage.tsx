import TablePagination from '@mui/material/TablePagination';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import { CenteredPaper } from '../CenteredPaper/CenteredPaper.component';
import { Data } from '../../components/UsersTable/UsersTable.component';
import { useTranslations } from '../../translations/src';
import { SwimmersTable } from '../../components/SwimmersTable/SwimmersTable.component';
import useWindowDimensions from '../../hooks/useWindowDimension';
import { LoadingPage } from '../LoadingPage/LoadingPage';
import { SnackBarContext } from '../../context/SnackBarContext';
import { AllSwimmersRow } from '../../components/SwimmersTable/AllSwimmersRow.component';

export const AllSwimmersPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users, setUsers] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const translate = useTranslations();
  const { setSnackBar } = useContext(SnackBarContext);
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
    try {
      setLoading(true);
      const result = await axios.get('http://localhost:3001/users/swimmers', {
        withCredentials: true,
      });
      setUsers(
        result.data.swimmers.map(
          (swimmer: { name: string; surname: string; email: string }) => ({
            name: swimmer.name,
            surname: swimmer.surname,
            email: swimmer.email,
          }),
        ),
      );
      setLoading(false);
    } catch (error) {
      setSnackBar(translate('allSwimmersPage.loadingError'), 'error');
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) return <LoadingPage />;

  return (
    <CenteredPaper>
      <div>
        <Typography variant="h4">
          {translate('allSwimmersPage.title')}
        </Typography>
        <SwimmersTable>
          {users
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <AllSwimmersRow
                row={row}
                isSmartphone={isSmartphone}
                key={row.email}
              />
            ))}
        </SwimmersTable>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={users.length}
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
