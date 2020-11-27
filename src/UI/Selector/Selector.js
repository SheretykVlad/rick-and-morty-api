import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectFilter({getTheFilter}) {
  const classes = useStyles();
  const [filter, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
    getTheFilter(event.target.value)
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Filter by</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={filter}
          onChange={handleChange}
          label="Filter by"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'/?gender=male'}>Male</MenuItem>
          <MenuItem value={'/?gender=female'}>Female</MenuItem>
          <MenuItem value={'/?gender=genderless'}>Genderless</MenuItem>
          <MenuItem value={'/?gender=unknown'}>Unknown gender</MenuItem>
          <MenuItem value={'/?status=alive'}>Alive</MenuItem>
          <MenuItem value={'/?status=dead'}>Dead</MenuItem>
          <MenuItem value={'/?status=unknown'}>Status unknown</MenuItem>
          <MenuItem value={'/?species=Human'}>Human</MenuItem>
          <MenuItem value={'/?species=Alien'}>Alien</MenuItem>
          <MenuItem value={'/?species=Mythological Creature'}>Mythological Creature</MenuItem>
          <MenuItem value={'/?species=Humanoid'}>Humanoid</MenuItem>
          <MenuItem value={'/?species=Cronenberg'}>Cronenberg</MenuItem>
          <MenuItem value={'/?species=Animal'}>Animal</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
