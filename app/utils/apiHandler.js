export const apiRequest = async ({
    axiosInstance,
    method = "get",
    url,
    data = null,
    params = null,
    customErr = "Something went wrong"
}) => {
    try {
        const res = await axiosInstance({
            method,
            url,
            data,
            params
        })
        return res?.data
    } catch (error) {
        console.error(`❌ ${customErr}:`, error.response?.data || error.message);

    }
}





