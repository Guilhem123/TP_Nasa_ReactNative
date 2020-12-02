import {Nasa, JSONNasa} from "./type"

export const toNasa = (jsonNasa: JSONNasa) => {
    const nasa: Nasa = {
        dateNasa: jsonNasa.date,
        titleNasa: jsonNasa.title,
        explanantionNasa: jsonNasa.explanation,
        urlNasa: jsonNasa.url,
        hdurlNasa: jsonNasa.hdurl,
        serviceNasa:jsonNasa.service_version,
        mediaTypeNasa:jsonNasa.media_type,
        //tag: jsonMeal.strTag,
    }
    return nasa;
}