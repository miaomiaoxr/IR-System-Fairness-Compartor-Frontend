import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const HightLightSelect = ({ exposure, setExposure }) => {
    const handleChange = (event, newExposure) => {
        setExposure(newExposure);
    }

    return (
        <ToggleButtonGroup
            sx={{ml:1}}
            value={exposure}
            exclusive
            onChange={handleChange}
            size="small"
        >
            <ToggleButton value="none">None</ToggleButton>
            <ToggleButton value="gender">Gender</ToggleButton>
            <ToggleButton value="geo">GEO</ToggleButton>
        </ToggleButtonGroup>
    )
}

export default HightLightSelect