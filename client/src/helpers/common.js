export const getAPIResponseError = (e) => {
    if (e) {
      console.log(e)
      if (e.response && e.response.data) {
        if (e.response.data.message) {
          return e.response.data.message;
        }
      }
    }
    return;
};