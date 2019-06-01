import React  from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));

const HistoryList = ({list,onClick}) => {
    const classes = useStyles();
    console.log(list);
    return(
      <div>
          {list.length?
            <Paper>
                <List component="nav" className={classes.root}>
                    {list.map(item =>
                    <ListItem key={item}  onClick={()=>onClick(item)} button>
                    <ListItemText primary={item} />
                    </ListItem>
                    )}
                </List>
            </Paper>
           :null}
        </div>
        
    )
  }
  HistoryList.propTypes = {
    onClick: PropTypes.func.isRequired,
    list: PropTypes.array.isRequired,
  }

export default HistoryList