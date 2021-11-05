import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const PageNotFound = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h3>Страница не найдена</h3>
    </div>
  );
};

export default PageNotFound;
