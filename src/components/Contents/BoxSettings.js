import GeoAndGender from '../PropertyToColor/GeoAndGender.js'

const { propertyToColor } = GeoAndGender;

const colorSettings = {
    '& .query.first_color': {
        backgroundColor: propertyToColor['first_color'],
    },
    '& .query.second_color': {
        backgroundColor: propertyToColor['second_color'],
    },
    '& .query.third_color': {
        backgroundColor: propertyToColor['third_color'],
    },
    '& .query.fourth_color': {
        backgroundColor: propertyToColor['fourth_color'],
    },
    '& .query.fifth_color': {
        backgroundColor: propertyToColor['fifth_color'],
    },
    '& .query.sixth_color': {
        backgroundColor: propertyToColor['sixth_color'],
    },
    '& .query.other_color': {
        backgroundColor: propertyToColor['other_color'],
    }
}

const BoxSettings = {
    height: 400,
    pb: 5,
}


export {colorSettings, BoxSettings}