

import { useEffect, useReducer } from "react";
import axios from "axios";

interface Category {
    id: number;
    categoryname: string;
    categorytype: string;
    coverimage: string
}



interface State {
  data: Category[] | null;
  error: string | null;
  loading: boolean;
}

const initialState: State = {
  data: null,
  error: null,
  loading: false,
};

enum ActionType {
  LOADING,
  SUCCESS,
  FAILED,
}

type Action =
  | { type: ActionType.LOADING }
  | { type: ActionType.SUCCESS; payload: Category[] }
  | { type: ActionType.FAILED; payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ActionType.FAILED:
      return {
        loading: false,
        error: action.payload,
        data: null,
      };
    case ActionType.SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    default:
      return initialState;
  }
};

const useCategoryList = () => {
  const [{ data, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    fetchCategoryList();
  }, []);

  const fetchCategoryList = async () => {
    //const sessionToken = cookie.get("session_token");
    dispatch({ type: ActionType.LOADING });
    try {
      const response = await axios.get(
        `http://localhost:8080/category/list`);
      const CategoryData = response.data
      //console.log('from usecategory', CategoryData)
      dispatch({ type: ActionType.SUCCESS, payload: CategoryData });
    } catch (error: any) {
      //console.log(error);
      dispatch({
        type: ActionType.FAILED,
        payload: error?.response.error,
      });
    }
  };

  const addCategory = async (data: FormData) => {
    try {
        const response = await axios.post(
          `http://localhost:8080/category/add`,data);
        const CategoryData = response.data
        console.log('from usecategory actegory upload', CategoryData)
        //dispatch({ type: ActionType.SUCCESS, payload: CategoryData });
      } catch (error: any) {
        console.log(error);
      }
  }

  return { data, loading, error, addCategory };
};

export default useCategoryList;