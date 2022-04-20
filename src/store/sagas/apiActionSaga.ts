export const API_ACTION = (action: string, url: string) => ({
    API: url,
    FETCH: `${action}_FETCH`,
    SUCCESS: `${action}_SUCCESS`,
    FAILED: `${action}_FAILED`,
    RESET: `${action}_RESET`,
})