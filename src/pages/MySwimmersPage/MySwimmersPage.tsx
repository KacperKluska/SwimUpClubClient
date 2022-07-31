import TablePagination from '@mui/material/TablePagination';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import { CenteredPaper } from '../CenteredPaper/CenteredPaper.component';
import { Data } from '../../components/UsersTable/UsersTable.component';
import { useTranslations } from '../../translations/src';
import { UserContext } from '../../context/UserContext';
import { SwimmersTable } from '../../components/SwimmersTable/SwimmersTable.component';
import { MySwimmersRow } from '../../components/SwimmersTable/MySwimmersRow.component';
import useWindowDimensions from '../../hooks/useWindowDimension';

export const MySwimmersPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users, setUsers] = useState<Data[]>([]);
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
      'http://localhost:3001/users-coaches/forCoach',
      {
        withCredentials: true,
        params: { email: user?.email ?? '' },
      },
    );
    if (result.status === 200) {
      setUsers(
        result.data.swimmers.map(
          (swimmer: { name: string; surname: string; email: string }) => ({
            name: swimmer.name,
            surname: swimmer.surname,
            email: swimmer.email,
          }),
        ),
      );
    }
    setLoading(false);
  };

  const refreshData = async () => {
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) return <div>loading...</div>;

  return (
    <CenteredPaper>
      <div>
        <Typography variant="h4">
          {translate('mySwimmersPage.title')}
        </Typography>
        <SwimmersTable>
          {users
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <MySwimmersRow
                row={row}
                isSmartphone={isSmartphone}
                refreshData={refreshData}
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
