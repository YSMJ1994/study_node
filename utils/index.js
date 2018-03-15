export function handleUrlQueryString(queryString) {
    let res = {}
    let type = getType(queryString)
    if(type === 'undefined') {
        return res
    }
}

export function getType(obj) {
    if (typeof obj === "undefined") return "undefined"
    return Object.prototype.toString.call(object).slice(8, -1).toLowerCase()
}