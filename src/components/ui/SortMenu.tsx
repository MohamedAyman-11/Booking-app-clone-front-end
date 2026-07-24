import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {type SelectChangeEvent} from '@mui/material/Select';
import {Typography} from "@mui/material";


interface Props {
  onchange: (event: SelectChangeEvent) => void;
  value: string,
  sortOptions: { label: string, value: string }[]
}

const SortMenu = ({onchange, value, sortOptions}: Props) => {
  return (
    <Box sx={{minWidth: 200}}>
      <FormControl fullWidth>
        <Select
          labelId={`select-menu-label-id`}
          id="select-menu"
          value={value}
          onChange={onchange}
          sx={{'.MuiSelect-select ': {p: '10px 14px'}}}
        >
          {sortOptions.map(option => <MenuItem value={option.value} key={option.value}>Sort
            by:<Typography component={'span'}
                           sx={{fontWeight: 500, ml: '5px'}}>{option.label}</Typography></MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}
export default SortMenu