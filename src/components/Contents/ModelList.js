import Stack from "@mui/material/Stack";
import Model from "./Model";



const ModelList = ({ data,  ...props }) => {

    const propertyToColor = {
        first_color: '#f06767',
        second_color: '#6da9fc',
        third_color: '#9d6dfc',
        fourth_color: '#e46dfc',
        fifth_color: '#ff80ea',
        sixth_color: '#80ff91',
        other_color: '#f2ff80',
    }

    const pre_genderToProperty = {
        '': '',
        female: 'first_color',
        male: 'second_color',
    }
    const pre_GeoToProperty = {
        '': '',
        'Northern America': 'first_color',
        'Europe': 'second_color',
        'Asia': 'third_color',
        'Oceania': 'fourth_color',
        'Latin America and the Caribbean': 'fifth_color',
        'Africa': 'sixth_color',
    }

    let proxyhandler = {
        get: function (target, name) {
            return target.hasOwnProperty(name) ? target[name] : 'other_color';
        }
    };

    const GeoToProperty = new Proxy(pre_GeoToProperty, proxyhandler)
    const genderToProperty = new Proxy(pre_genderToProperty, proxyhandler)

    const passedProps = {
        propertyToColor,
        genderToProperty,
        GeoToProperty,
        ...props//exposure, setData, renameModel
    }



    return (
        <>
            <h2>Model List</h2>
            <Stack sx={{ maxHeight: "100%", width: "100%" }} direction="row" spacing={1}>
                {data.map(model => <Model key={model.id} modelID={model.id} modelName={model.modelName} querys={model.querys} {...passedProps} />)}
            </Stack>
        </>
    )
}

export default ModelList;