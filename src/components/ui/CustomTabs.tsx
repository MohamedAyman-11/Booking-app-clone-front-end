import type {SyntheticEvent} from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import {alpha} from "@mui/material";

interface Props {
  setValue: (event: SyntheticEvent<Element, Event>, value: string) => void
  options: { text: string, value: string }[]
  value: string
}

const CustomTabs = ({setValue, options, value}: Props) => {
  return (
    <Box sx={{
      flexGrow: 0,
      typography: 'body1',
      ' .MuiTabs-indicator': {
        display: 'none'
      }
    }}>
      <TabContext value={value}>
        <Box>
          <TabList onChange={setValue} aria-label="lab API tabs example" sx={{
            display: 'flex',
            alignItems: 'center',
            '& .MuiTabs-list': {
              flexWrap: 'wrap',
              rowGap: '10px'
            }
          }}>
            {options.map(op =>
              <Tab label={op.text} value={op.value} sx={{
                borderRadius: '10px',
                height: '40px !important',
                minHeight: '40px',
                py: 0,
                transition: 'all 0.3s ease',
                '&.Mui-selected': {
                  bgcolor: alpha('#1976d2', 0.1)
                },
              }}/>
            )}
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
export default CustomTabs