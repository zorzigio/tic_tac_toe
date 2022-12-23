import React from "react";
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/game");
        }}
      >
        Play
      </button>
    </>
  );
}

export default Start;
