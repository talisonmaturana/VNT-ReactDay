import React from 'react';
import classes from "./SearchBar.module.scss";


const SarchBar = () => {
  return (
    <div className={classes.searchBar}>
      <div className={classes.logo}>CLIMÃO.COM</div>
      <div className={classes.search}>
        <input type="text"/>
      </div>
    </div>
  )
}

export default SarchBar;
