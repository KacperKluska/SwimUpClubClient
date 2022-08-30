import TablePagination from '@mui/material/TablePagination';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import { CenteredPaper } from '../../CenteredPaper/CenteredPaper.component';
import {
  Data,
  UsersTable,
} from '../../../components/UsersTable/UsersTable.component';
import { useTranslations } from '../../../translations/src';

export const CoachesPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users, setUsers] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const translate = useTranslations();

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
    const result = await axios.get('http://localhost:3001/users/coaches', {
      withCredentials: true,
    });
    if (result.status === 200) {
      setUsers(
        result.data.coaches.map(
          (user: { name: string; surname: string; email: string }) => ({
            name: user.name,
            surname: user.surname,
            email: user.email,
          }),
        ),
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) return <div>loading...</div>;

  return (
    <CenteredPaper>
      <div>
        <Typography variant="h4">
          {translate('usersList.coachesListTitle')}
        </Typography>
        <UsersTable page={page} rowsPerPage={rowsPerPage} users={users} />
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
