import React from "react";

export type UserDetail = {
  name: string;
  email: string;
};

export type UserLocation = {
  city: string;
  country: string;
};

export interface UserFormState {
  userDetail: UserDetail;
  userLocation: UserLocation;
}

export enum UserFormActions {
  UPDATE_USER_NAME = "UPDATE_USER_NAME",
  UPDATE_USER_EMAIL = "UPDATE_USER_EMAIL",
  UPDATE_USER_CITY = "UPDATE_USER_CITY",
  UPDATE_USER_COUNTRY = "UPDATE_USER_COUNTRY",
  RESET_FORM = "RESET_FORM"
}

export interface UserFormAction {
  type: UserFormActions;
}

export interface UpdateUserDetailNameAction extends UserFormAction {
  name: string;
}

export interface UpdateUserDetailEmailAction extends UserFormAction {
  email: string;
}

export interface UpdateUserLocationCityAction extends UserFormAction {
  city: string;
}

export interface UpdateUserLocationCountryAction extends UserFormAction {
  country: string;
}

export const INITIAL_FORM_STATE: UserFormState = {
  userDetail: {
    email: "",
    name: ""
  },
  userLocation: {
    city: "",
    country: ""
  }
};

export const getActions = (dispatch: React.Dispatch<UserFormAction>) => {
  const updateUserName = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: UserFormActions.UPDATE_USER_NAME,
      name: e.target.value
    } as UpdateUserDetailNameAction);

  const updateUserEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: UserFormActions.UPDATE_USER_EMAIL,
      email: e.target.value
    } as UpdateUserDetailEmailAction);

  const updateUserCity = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: UserFormActions.UPDATE_USER_CITY,
      city: e.target.value
    } as UpdateUserLocationCityAction);

  const updateUserCountry = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: UserFormActions.UPDATE_USER_COUNTRY,
      country: e.target.value
    } as UpdateUserLocationCountryAction);

  const resetForm = () => dispatch({ type: UserFormActions.RESET_FORM });

  return {
    resetForm,
    updateUserName,
    updateUserEmail,
    updateUserCity,
    updateUserCountry
  };
};
