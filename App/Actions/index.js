import axios from "axios";
import { Config } from "./../Config";
export const getMobileList = (reqPayload) => {

    return dispatch => {
        let url = Config.API_URL + "/Lists/mobiles"

        dispatch(fetchData());
        axios.get(url, {
            params: reqPayload
        })
            .then(function (res) {

                if (res.status == 200) {

                    dispatch(fetchDataFulfilled(res.data));
                }
            })
            .catch(function (error) {

                dispatch(fetchDataRejected(error))
            });
    }
    function fetchData() { return { type: "GET_PAGE_LIST_REQUEST" } }
    function fetchDataFulfilled(payload) { return { type: "GET_PAGE_LIST_DATA", data: payload } }
    function fetchDataRejected(err) { return { type: "GET_PAGE_LIST_ERR", data: err } }
}