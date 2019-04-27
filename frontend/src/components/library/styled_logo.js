import React from "react";
import Link from "./styled_link";
import Box from "./box";

export default function Logo({ children }) {
  return (
    <Box fontSize="large" padding="8px" row>
      <Link to="/">
        {/* <FontAwesomeIcon style={{ paddingRight: 5, paddingTop: 14 }} icon="feather-alt" /> */}
        <div style={{ display: "flex", paddingRight: 5, paddingTop: 9 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-feather"
            style={{ paddingRight: 5 }}
          >
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
            <line x1="16" y1="8" x2="2" y2="22" />
            <line x1="17.5" y1="15" x2="9" y2="15" />
          </svg>
          {children}
        </div>
      </Link>
    </Box>
  );
}
