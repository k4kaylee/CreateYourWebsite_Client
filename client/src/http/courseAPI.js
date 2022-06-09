import { $authHost, $host } from "./index";

export const createType = async (type) => {
    const { data } = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const { data } = await $host.get('api/type')
    return data
}

export const addToBasket = async (courseId) => {
    const { response } = await $host.post('api/basket', courseId)
    return response
}

export const getBasket = async () => {
    const { data } = await $host.get('api/basket')
    return data
}

export const createArea = async (area) => {
    const { data } = await $authHost.post('api/area', area)
    return data
}

export const fetchAreas = async () => {
    const { data } = await $host.get('api/area',)
    return data
}

export const createCourse = async (course) => {
    const { data } = await $authHost.post('api/course', course)
    return { data }
}

export const fetchCourses = async (areaId, typeId, page, limit=5) => {
    const { data } = await $host.get('api/course', {
        params: {
            areaId, typeId, page, limit
        }
    })
    return data
}

export const fetchOneCourse = async (id) => {
    const { data } = await $host.get('api/course/' + id)
    return data
}