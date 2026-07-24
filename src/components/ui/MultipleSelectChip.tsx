import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {type SelectChangeEvent} from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import {AMENITIES} from "../../constants";
import Label from "./Label.tsx";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {slotProps: {paper: {style: {maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,}}},};


interface Props {
  value: string[];
  onChange: (value: string[]) => void;
}

const MultipleSelectChip = ({value, onChange}: Props) => {
  const theme = useTheme();
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const selected = event.target.value
    onChange(typeof selected === 'string' ? selected.split(',') : selected);
  };
  return (
    <Box
      sx={{
        mb: '5px'
      }}>
      <FormControl sx={{width: '100%'}}>
        <Label id="demo-multiple-chip-label">Property amenities</Label>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={value}
          onChange={handleChange}
          renderValue={(selected) => (
            <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
              {selected.map((value) => (
                <Chip key={value} label={value}/>
              ))}
            </Box>
          )}
          sx={{'.MuiSelect-select ': {p: '10px 14px'}}}
          MenuProps={{...MenuProps, disablePortal: true}}
        >
          {AMENITIES.map((amenity) => (
            <MenuItem
              key={amenity}
              value={amenity}
              sx={{
                fontWeight: value.includes(amenity)
                  ? theme.typography.fontWeightMedium
                  : theme.typography.fontWeightRegular,
              }}
            >
              {amenity}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

export default MultipleSelectChip
