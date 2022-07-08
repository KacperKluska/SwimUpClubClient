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
import { Button, FormControl, InputLabel, Paper, Select } from '@mui/material';
import axios from 'axios';
import { CustomLink } from '../CustomLink/CustomLink.component';
import { Routes } from '../../pages/Routing/Routes.type';
import { useTranslations } from '../../translations/src';
import { useUserImage } from '../../hooks/useImage';

interface Props {
  title: string;
  name: string;
  imageName: string;
  userLogged?: boolean;
  setUserLogged?: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode?: boolean;
  setDarkMode?: React.Dispatch<React.SetStateAction<boolean>>;
  language?: string;
  setLanguage?: React.Dispatch<React.SetStateAction<string>>;
}

export const MyAppBar = ({
  title,
  name,
  imageName,
  userLogged,
  setUserLogged,
  darkMode = false,
  setDarkMode,
  language = 'PL',
  setLanguage,
}: Props) => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );
  const translate = useTranslations();
  const img = useUserImage(imageName);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLangChange = () => {
    if (setLanguage !== undefined)
      setLanguage((prev) => (prev === 'PL' ? 'EN' : 'PL'));
    if (language !== undefined)
      localStorage.setItem('language', language === 'PL' ? 'EN' : 'PL');
  };

  const handleThemeChange = () => {
    if (setDarkMode !== undefined) setDarkMode((prev) => !prev);
    if (darkMode !== undefined)
      localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  const handleLogout = async () => {
    await axios.delete('http://localhost:3001/auth/logout', {
      withCredentials: true,
    });
    if (setUserLogged !== undefined) setUserLogged(false);
  };

  const settings = [
    { name: 'profile', path: Routes.SETTINGS },
    { name: 'logout', path: Routes.HOME, onClick: handleLogout },
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
            <CustomLink path={userLogged ? '/main-menu' : '/'}>
              <div>{translate(title)}</div>
            </CustomLink>
          </Typography>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: 'flex', md: 'flex' },
              gap: { md: '1rem', xs: '0.5rem' },
            }}
          >
            <FormControl sx={{ m: 1, minWidth: 100 }}>
              <InputLabel id="demo-simple-select-helper-label">
                {translate('language')}
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={language}
                label="Age"
                onChange={handleLangChange}
                defaultValue="PL"
              >
                <MenuItem value="PL">PL</MenuItem>
                <MenuItem value="EN">ENG</MenuItem>
              </Select>
            </FormControl>
            <IconButton
              sx={{ ml: 1 }}
              onClick={handleThemeChange}
              color="inherit"
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            {userLogged ? (
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt={name} src={img || 'undefined'} />
                </IconButton>
              </Tooltip>
            ) : (
              <CustomLink path={Routes.LOGIN}>
                <Paper>
                  <Button type="button">{translate('appBar.signIn')}</Button>
                </Paper>
              </CustomLink>
            )}
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
                <CustomLink path={setting.path} key={setting.name}>
                  <MenuItem
                    key={setting.name}
                    onClick={handleCloseUserMenu}
                    sx={{ width: '100%' }}
                  >
                    <Typography textAlign="center" onClick={setting?.onClick}>
                      {translate(`appBar.${setting.name}`)}
                    </Typography>
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
