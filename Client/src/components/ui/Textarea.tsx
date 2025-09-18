import React from "react";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: React.FC<Props> = (props) => {
  return (
    <textarea
      {...props}
      style={{
        width: "100%",
        padding: "8px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        resize: "vertical",
        ...props.style,
      }}
    />
  );
};

export default Textarea;
