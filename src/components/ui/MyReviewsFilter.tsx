import {Box, Stack, Typography} from "@mui/material";
import type {SelectChangeEvent} from "@mui/material/Select";
import SortMenu from "./SortMenu.tsx";
import {SORT_OPTIONS} from "../../constants";


interface Props {
  handleSortOptionChange: (event: SelectChangeEvent) => void;
  sortOption: string
  reviews: number
}

const MyReviewsFilter = ({handleSortOptionChange, sortOption, reviews}: Props) => {

  return (
    <Box sx={{my: '25px', borderRadius: '12px', border: '1px solid #ccc', p: '6px 12px'}}>
      <Stack direction={{xs: "column", md: "row",}} spacing={2}
             sx={{alignItems: 'center', justifyContent: 'space-between'}}>
        <Typography component={'p'} sx={{
          fontSize: '14px',
          color: '#737373'
        }}>You have <Typography sx={{fontSize: '14px', fontWeight: 600}} component={'span'}
                                color={'error'}>{reviews}</Typography> reviews</Typography>
        <SortMenu sortOptions={SORT_OPTIONS} value={sortOption} onchange={handleSortOptionChange}/>
      </Stack>
    </Box>
  );
};

export default MyReviewsFilter;