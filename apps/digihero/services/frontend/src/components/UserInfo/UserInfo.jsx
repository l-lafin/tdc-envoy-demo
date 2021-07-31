import React from 'react';
import { Typography } from '@material-ui/core';
import useAxios from 'axios-hooks';

export const UserInfo = () => {
  const [{ data }] = useAxios('/digihero/oauth2/userinfo');
  return <Typography>{data?.email}</Typography>;
};
