import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HdIcon from '@material-ui/icons/Hd';
import SearchIcon from '@material-ui/icons/Search';
import TvIcon from '@material-ui/icons/Tv';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { useHistory } from 'react-router';

const useStyles = makeStyles({    //inline styles/css
  root: {
    width: '100%',
    position: 'sticky',
    bottom: 0,
    zIndex: 100,
    backgroundColor: "#2d313a",
  },
});

export default function SimpleBottomNavigation() {     //displaying mainNav component for navigation purpose 
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const history = useHistory();
  useEffect(() => {
    if (value === 0)
      history.push("/");                            //giving values to all our icons
    else if (value === 1) history.push("/movies");
    else if (value === 2) history.push("/series");
    else if (value === 3) history.push("/search");
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction style={{ color: "white", fontWeight: "bold" }} label="Trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction style={{ color: "white", fontWeight: "bold" }} label="Movies" icon={<HdIcon />} />
      <BottomNavigationAction style={{ color: "white", fontWeight: "bold" }} label="TV Series" icon={<TvIcon />} />
      <BottomNavigationAction style={{ color: "white", fontWeight: "bold" }} label="Search" icon={<SearchIcon />} />
    </BottomNavigation>
  );
}
