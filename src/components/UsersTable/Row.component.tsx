import {
  Button,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styled from 'styled-components';
import { useTranslations } from '../../translations/src';
import { Data } from './UsersTable.component';

interface Props {
  row: Data;
  isSmartphone: boolean;
}

const StyledCollapsedBody = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
`;

export const Row = ({ row, isSmartphone }: Props) => {
  const translate = useTranslations();
  const [open, setOpen] = useState(false);

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
    <>
      <TableRow
        hover
        role="checkbox"
        tabIndex={-1}
        key={row.email}
        sx={{
          '& > *': { borderBottom: 'unset' },
          '&:hover': { cursor: 'pointer' },
        }}
        onClick={() => setOpen(!open)}
      >
        <>
          {!isSmartphone && (
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
          )}
          <TableCell key="name" align="left">
            {row.name}
          </TableCell>
          <TableCell key="surname" align="left">
            {row.surname}
          </TableCell>
          <TableCell key="email" align="left">
            {row.email}
          </TableCell>
        </>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <StyledCollapsedBody>
              <TableCell key="remove" align="center">
                <Button
                  type="button"
                  variant="outlined"
                  color="error"
                  onClick={() => handleDelete(row.email)}
                >
                  {translate('usersList.delete')}
                </Button>
              </TableCell>
              <TableCell key="edit" align="center">
                <Button type="button" variant="outlined" color="primary">
                  {translate('usersList.edit')}
                </Button>
              </TableCell>
            </StyledCollapsedBody>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};
