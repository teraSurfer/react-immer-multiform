import React from "react";

interface Props {
  onSubmit: () => void;
  onUserNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onUserEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserDetailForm = ({
  onSubmit,
  onUserEmailChange,
  onUserNameChange
}: Props) => {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name: </label>
        <input onChange={onUserNameChange} type="text" placeholder="Name" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email: </label>
        <input onChange={onUserEmailChange} type="text" placeholder="Email" />
      </div>
      <button type="submit">Next</button>
    </form>
  );
};

export default UserDetailForm;
