import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import axios from 'axios';
import { useTranslations } from '../../translations/src';

interface Column {
  id: 'name' | 'surname' | 'email' | 'remove' | 'edit';
  label: string;
  minWidth?: number;
  align?: 'left' | 'center' | 'right';
  format?: (value: number) => string;
}

export interface Data {
  name: string;
  surname: string;
  email: string;
}

interface Props {
  page: number;
  rowsPerPage: number;
  users: Data[];
}

export const UsersTable = ({ page, rowsPerPage, users }: Props) => {
  const translate = useTranslations();

  const columns: readonly Column[] = [
    { id: 'name', label: translate('usersList.name'), minWidth: 150 },
    { id: 'surname', label: translate('usersList.surname'), minWidth: 150 },
    {
      id: 'email',
      label: translate('usersList.email'),
      minWidth: 250,
    },
    {
      id: 'remove',
      label: translate('usersList.remove'),
      align: 'center',
    },
    {
      id: 'edit',
      label: translate('usersList.edit'),
      align: 'center',
    },
  ];

  const handleDelete = async (email: string) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(translate('usersList.confirmMessage', { value: email }))) {
      const result = await axios.delete('http://localhost:3001/users', {
        params: { email },
        withCredentials: true,
      });
      if (result.status !== 200) {
        return;
      }
      window.location.reload();
    }
  };

  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row) => (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.email}>
                {columns.map((column) => {
                  if (column.id === 'remove') {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <Button
                          type="button"
                          variant="outlined"
                          color="error"
                          onClick={() => handleDelete(row.email)}
                        >
                          X
                        </Button>
                      </TableCell>
                    );
                  }
                  if (column.id === 'edit') {
                    return (
                      <TableCell key={column.id} align={column.align}>
                        <Button
                          type="button"
                          variant="outlined"
                          color="primary"
                        >
                          {translate('usersList.edit')}
                        </Button>
                      </TableCell>
                    );
                  }
                  const value = row[column.id];
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.format && typeof value === 'number'
                        ? column.format(value)
                        : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
