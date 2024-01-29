import { noteContext } from "./NoteContext";
import PropTypes from "prop-types";

export const NoteState = (props) => {
  const state = {
    name: "vikas",
    age: 23,
  };
  return (
    <noteContext.Provider value={state}>{props.children}</noteContext.Provider>
  );
};

NoteState.propTypes = {
  children: PropTypes.node,
};
