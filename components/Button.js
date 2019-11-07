import React from "react";

export default function Button(props) {
  return (
    <>
      <button className={`button ${props.secondary ? 'button--secondary' : ''}`} {...props}>
        {props.children}
      </button>
      <style jsx>{`
        .button {
          background-color: var(--purple);
          padding: 0.75rem 2rem;
          font-weight: bold;
          font-size: 1rem;
          color: var(--white);
          border-radius: var(--border-radius);
          border: 2px solid transparent;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease;
          margin: 0 0.5rem;
        }

        .button--secondary {
          background-color: var(--white);
          box-shadow: none;
          color: var(--purple);
        }

        .button--secondary:hover,
        .button--secondary:focus {
          border-color: var(--purple);
        }

        .button:hover,
        .button:focus {
          outline: none;
          box-shadow: 0 5px 15px -5px rgba(133, 75, 242, 0.6);
          cursor: pointer;
        }

        .button:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
}
