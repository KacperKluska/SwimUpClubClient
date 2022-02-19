import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { FormControl, InputLabel, Select } from '@mui/material';
import { translate } from '../../translations/src';
import { CustomLink } from '../CustomLink/CustomLink.component';
import { UserContext } from '../../context/UserContext';

interface Props {
  title: React.ReactNode;
  name: string;
  darkMode?: boolean;
  setDarkMode?: React.Dispatch<React.SetStateAction<boolean>>;
  language?: string;
  setLanguage?: React.Dispatch<React.SetStateAction<string>>;
}

const handleLangChange = (
  language?: string,
  setLanguage?: React.Dispatch<React.SetStateAction<string>>,
) => {
  if (setLanguage !== undefined)
    setLanguage((prev) => (prev === 'PL' ? 'EN' : 'PL'));
  if (language !== undefined)
    localStorage.setItem('language', language === 'PL' ? 'EN' : 'PL');
};

const handleThemeChange = (
  darkMode?: boolean,
  setDarkMode?: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  if (setDarkMode !== undefined) setDarkMode((prev) => !prev);
  if (darkMode !== undefined)
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
};

export const MyAppBar = ({
  title,
  name,
  darkMode = false,
  setDarkMode,
  language = 'PL',
  setLanguage,
}: Props) => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const settings = [
    { name: 'Profile', path: '/settings' },
    { name: 'Logout', path: '/' },
  ];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}
          >
            <CustomLink path="/">
              <div>{title}</div>
            </CustomLink>
          </Typography>

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: 'flex', md: 'flex' },
              gap: '1rem',
            }}
          >
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-helper-label">
                {translate('language')}
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={language}
                label="Age"
                onChange={() => handleLangChange(language, setLanguage)}
                defaultValue="PL"
              >
                <MenuItem value="PL">PL</MenuItem>
                <MenuItem value="EN">ENG</MenuItem>
              </Select>
            </FormControl>
            <IconButton
              sx={{ ml: 1 }}
              onClick={() => handleThemeChange(darkMode, setDarkMode)}
              color="inherit"
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={name} src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <CustomLink path={setting.path}>
                  <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting.name}</Typography>
                  </MenuItem>
                </CustomLink>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
