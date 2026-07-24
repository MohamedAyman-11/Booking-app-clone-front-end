import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {type SelectChangeEvent} from '@mui/material/Select';
import Label from "./Label.tsx";
import theme from "../../config/mui.config.ts";

interface Props {
  label?: string;
  onchange: (event: SelectChangeEvent) => void;
  value: string,
  options: string[]
}

const SelectMenu = ({label, onchange, value, options}: Props) => {
  return (
    <Box sx={{minWidth: 200, zIndex: 999999999}}>
      <FormControl fullWidth>
        {label && <Label id="select-menu-label-id">{label}</Label>}
        <Select
          labelId={`select-menu-label-id`}
          id="select-menu"
          value={value}
          onChange={onchange}
          sx={{'.MuiSelect-select ': {p: '10px 14px'}, zIndex: theme.zIndex.modal}}
          MenuProps={{
            disablePortal: true,
          }}
        >
          {options.map(val => <MenuItem sx={{zIndex: 9999999999999}} value={val} key={val}>{val}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}
export default SelectMenu