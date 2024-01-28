

import { useEffect, useReducer } from "react";
import axios from "axios";

interface Image {
    id: number;
    imagename: string;
    size: string;
    licence: string;
    link: string;
    price: number;
}



interface State {
  data: Image[] | null;
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
  | { type: ActionType.SUCCESS; payload: Image[] }
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

const useImage = (id: string) => {
  const [{ data, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    fetchCategoryImage();
  }, []);

  const fetchCategoryImage = async () => {
    //const sessionToken = cookie.get("session_token");
    dispatch({ type: ActionType.LOADING });
    try {
      const response = await axios.get(
        `http://localhost:8080/image/get/${id}`);
      const ImageData = response.data
      //console.log('from usecategory', ImageData)
      dispatch({ type: ActionType.SUCCESS, payload: ImageData });
    } catch (error: any) {
      //console.log(error);
      dispatch({
        type: ActionType.FAILED,
        payload: error?.response.error,
      });
    }
  };

  const addImage = async (data: FormData) => {
    try {
        const response = await axios.post(
          `http://localhost:8080/image/add`,data);
        const ImageData = response.data
        console.log('from usecategory actegory upload', ImageData)
        //dispatch({ type: ActionType.SUCCESS, payload: CategoryData });
      } catch (error: any) {
        console.log(error);
      }
  }

  return { data, loading, error, addImage };
};

export default useImage;