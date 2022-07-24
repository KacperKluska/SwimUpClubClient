import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useWindowDimensions from '../../hooks/useWindowDimension';
import { useTranslations } from '../../translations/src';
import { Row } from './Row.component';

export interface Column {
  id: 'name' | 'surname' | 'email';
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
  const { width } = useWindowDimensions();
  const isSmartphone = width < 756;

  const columns: Column[] = [
    { id: 'name', label: translate('usersList.name'), minWidth: 50 },
    { id: 'surname', label: translate('usersList.surname'), minWidth: 50 },
    {
      id: 'email',
      label: translate('usersList.email'),
      minWidth: 100,
    },
  ];

  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {!isSmartphone && <TableCell />}
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
              <Row row={row} isSmartphone={isSmartphone} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
