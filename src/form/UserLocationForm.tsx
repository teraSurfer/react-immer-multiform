import React from "react";
import { UserDetail } from "../hook/UserFormState";

interface Props {
  onSubmit: () => void;
  onReset: () => void;
  onUserCityChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUserCountryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userDetail: UserDetail;
}

const UserLocationForm = ({
  onSubmit,
  onReset,
  userDetail,
  onUserCityChange,
  onUserCountryChange
}: Props) => {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit} onReset={onReset}>
      <p>
        Name: {userDetail.name}, Email: {userDetail.email}
      </p>
      <div className="form-group">
        <label htmlFor="name">City: </label>
        <input onChange={onUserCityChange} type="text" placeholder="City" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Country: </label>
        <input
          onChange={onUserCountryChange}
          type="text"
          placeholder="Country"
        />
      </div>
      <button type="submit">Submit</button>
      <button type="reset">Reset </button>
    </form>
  );
};

export default UserLocationForm;
