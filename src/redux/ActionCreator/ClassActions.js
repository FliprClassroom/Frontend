import * as ActionTypes from "../ActionTypes";
import axios from "../../axios";

export const fetchClasses =
  ({ user }) =>
  async (dispatch) => {
    dispatch(handleClassChanges({ prop: "isClassLoading", value: true }));

    try {
      let token = localStorage.getItem("login_access_token");

      let response = await axios.get(`/subjects_of_user/${user}/`, {
        headers: {
          authorization: `JWT Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log(response.data.results);
        dispatch(handleClassChanges({ prop: "isClassLoading", value: false }));
        dispatch(
          handleClassChanges({ prop: "classes", value: response.data.results })
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  export const fetchAssignments = ({user}) => async (dispatch) => {
      dispatch(handleClassChanges({ prop: "isClassLoading", value: true }));

      try
      {
        let token = localStorage.getItem("login_access_token");
        let response = await axios.get(`/assignment_of_user/${user}/`,{
            headers:{
                authorization : `JWT Bearer ${token}`
            }
        })

        if(response.status === 200)
        {
            dispatch(handleClassChanges({ prop: "isClassLoading", value: false }));
            dispatch(
            handleClassChanges({ prop: "assignments", value: response.data })
            );
        }
      }
      catch(err)
      {
          console.log(err)
      }
  }

    export const fetchTests = ({user}) => async (dispatch) => {
      dispatch(handleClassChanges({ prop: "isClassLoading", value: true }));

      try
      {
        let token = localStorage.getItem("login_access_token");
        let response = await axios.get(`/test_of_user/${user}/`,{
            headers:{
                authorization : `JWT Bearer ${token}`
            }
        })

        if(response.status === 200)
        {
            dispatch(handleClassChanges({ prop: "isClassLoading", value: false }));
            dispatch(
            handleClassChanges({ prop: "exams", value: response.data })
            );
        }
      }
      catch(err)
      {
          console.log(err)
      }
  }

export const handleClassChanges = ({ prop, value }) => {
  return {
    type: ActionTypes.HANDLE_CLASS_CHANGES,
    payload: { prop, value },
  };
};
