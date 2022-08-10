import AnalyticsIcon from '@mui/icons-material/Analytics';
import RuleIcon from '@mui/icons-material/Rule';

const IconControl = (name) => {
    if (name === 'stats') {
        return (
            <AnalyticsIcon />
        )
    }
    if(name === 'Display'){
        return (
            <RuleIcon />
        )
    }
    return (
        <></>
    )
}

export default IconControl