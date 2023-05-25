import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { green } from '@mui/material/colors';
import { alpha, styled } from '@mui/material/styles';

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: green[600],
    '&:hover': {
      backgroundColor: alpha(green[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: green[600],
  },
}));
export default function SwitchLabels() {
  const greenSwitchLabel = { inputProps: { 'aria-label': 'Green switch demo' } };

  return (<div style= {{position: "absolute", top: "700px",}}>
    <FormGroup>
      {/* <FormControlLabel control={<Switch defaultChecked color="warning" />} label="Did sharing your feelings help?" /> */}
      <FormControlLabel required control={<GreenSwitch />} label="Are the suggestions provided by us of any use?" />

      <FormControlLabel control={<GreenSwitch {...greenSwitchLabel} defaultChecked />} label="Did sharing your emotions helped you?" />
      {/* <FormControlLabel disabled control={<Switch />} label="Disabled" /> */}
    </FormGroup>
    </div>
  );
}
