import StorageInterface from "./services/storageInterface";

export default class LocalStorage extends StorageInterface{
    load(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    }

    save(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
}