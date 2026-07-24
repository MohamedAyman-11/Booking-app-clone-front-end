import {TextareaAutosize, type TextareaAutosizeProps} from "@mui/material";

type TProps = TextareaAutosizeProps
const TextArea = ({...reset}: TProps) => {
  return (
    <TextareaAutosize
      aria-label="minimum height"
      className={'text-area'}
      minRows={5}
      {...reset}
    />
  );
};

export default TextArea;