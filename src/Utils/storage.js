export const favorites = [];

export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getItem = (key) => {
    return localStorage.getItem(key);
}

export const updateArray = (id) => {
    favorites.push(id)
}

