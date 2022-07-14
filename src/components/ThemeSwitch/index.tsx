import * as React from 'react';
import Switch from '@mui/material/Switch';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { themeActionCreators } from '../../store';

export default function ControlledSwitches() {
  const [checked, setChecked] = React.useState(true);
  const dispatch = useDispatch()

  const {mudarTheme} = bindActionCreators(themeActionCreators, dispatch)
  React.useEffect(()=>{
    if (checked) {
      mudarTheme('light')
    } else {
      mudarTheme('dark')
    }

  },[checked])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
