import React from "react";

export default function Prompt(props) {
  return (
    <>
      <div className="prompt">
        <div className="container">
          {props.children}
        </div>
      </div>
      <style jsx>{`
        .prompt {
          position: fixed;
          width: 100vw;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0,0,0,0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .container {
          border-radius: var(--border-radius);
          background-color: var(--white);
          padding: 1rem;
          min-width: 400px;
          max-width: 500px;
          min-height: 200px;
          max-height: 400px;
          box-shadow: 0px 5px 20px -10px var(--black);
        }

        @media screen and (max-width: 500px) {
          .prompt {
            justify-content: flex-end;
          }
        }
        `}</style>
    </>
  );
}
