import { produce } from "immer";
import { cloneDeep } from "lodash";
import { useMemo, useReducer } from "react";
import {
  getActions,
  INITIAL_FORM_STATE,
  UpdateUserDetailEmailAction,
  UpdateUserDetailNameAction,
  UpdateUserLocationCityAction,
  UpdateUserLocationCountryAction,
  UserFormAction,
  UserFormActions,
  UserFormState
} from "./UserFormState";

function initializeFormState() {
  return cloneDeep(INITIAL_FORM_STATE);
}

function formReducer(state: UserFormState, action: UserFormAction) {
  switch (action.type) {
    case UserFormActions.UPDATE_USER_NAME:
      const { name } = action as UpdateUserDetailNameAction;
      // without immer
      // return {
      //   ...state,
      //   userDetail: {
      //     ...state.userDetail,
      //     name
      //   }
      // }
      // We would have to repeat this for every switch case.
      return produce(state, (draft) => {
        draft.userDetail.name = name;
      });
    case UserFormActions.UPDATE_USER_EMAIL:
      const { email } = action as UpdateUserDetailEmailAction;
      return produce(state, (draft) => {
        draft.userDetail.email = email;
      });
    case UserFormActions.UPDATE_USER_CITY:
      const { city } = action as UpdateUserLocationCityAction;
      return produce(state, (draft) => {
        draft.userLocation.city = city;
      });
    case UserFormActions.UPDATE_USER_COUNTRY:
      const { country } = action as UpdateUserLocationCountryAction;
      return produce(state, (draft) => {
        draft.userLocation.country = country;
      });
    case UserFormActions.RESET_FORM:
      return initializeFormState();
    default:
      return state;
  }
}

export const useUserFormState = () => {
  const [formState, dispatch] = useReducer(formReducer, initializeFormState());

  const formActions = useMemo(() => getActions(dispatch), [dispatch]);

  return { formState, formActions };
};
