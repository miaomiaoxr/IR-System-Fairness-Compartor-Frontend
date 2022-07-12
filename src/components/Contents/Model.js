import Query from "./Query";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Model = ({model,querys}) => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Item>
            <h3>Model: {model}</h3>
            {querys.map(query => <Query key={query.qid} query={query} />)}
        </Item>
    );
}

export default Model;