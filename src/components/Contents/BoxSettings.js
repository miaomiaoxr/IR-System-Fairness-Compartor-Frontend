import GeoAndGender from '../PropertyToColor/GeoAndGender.js'

const { propertyToColor } = GeoAndGender;

const colorSettings = {
    '& .query.first_color': {
        backgroundColor: propertyToColor['first_color'],
        fontWeight: 'bold'
    },
    '& .query.second_color': {
        backgroundColor: propertyToColor['second_color'],
        fontWeight: 'bold'
    },
    '& .query.third_color': {
        backgroundColor: propertyToColor['third_color'],
        fontWeight: 'bold'
    },
    '& .query.fourth_color': {
        backgroundColor: propertyToColor['fourth_color'],
        fontWeight: 'bold'
    },
    '& .query.fifth_color': {
        backgroundColor: propertyToColor['fifth_color'],
        fontWeight: 'bold'
    },
    '& .query.sixth_color': {
        backgroundColor: propertyToColor['sixth_color'],
        fontWeight: 'bold'
    },
    '& .query.other_color': {
        backgroundColor: propertyToColor['other_color'],
        fontWeight: 'bold'
    }
}

const BoxSettings = {
    height: 400,
    pb: 5,
}


export {colorSettings, BoxSettings}