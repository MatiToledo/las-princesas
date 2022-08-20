import styled from "styled-components";

export const Label = styled.label`
  font-size: 18px;
  font-weight: 400;
  color: var(--white);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled.input.attrs((props: any) => ({
  placeholder: props.placeholder,
}))`
  font-size: 16px;
  width: 100%;
  height: 35px;
  padding-left: 10px;
  border: 1px solid var(--gray-strong);
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;

  ::placeholder {
    color: var(--gray-strong);
  }

  :focus {
    outline: none;
    border: 1px solid var(--gray-strong);
  }
`;

export function TextField({ label, placeholder }: any) {
  return (
    <Label>
      {label}
      <Input placeholder={placeholder}></Input>
    </Label>
  );
}

const Textarea = styled.textarea`
  border-radius: 5px;
  border: 1px solid var(--gray-strong);
  width: 100%;
  min-height: 100px;
  resize: none;
  padding-left: 10px;
  padding: 8px;
  font-size: 16px;
  font-family: "Montserrat", sans-serif;

  ::placeholder {
    color: var(--gray-strong);
  }

  :focus {
    outline: none;
    border: 1px solid var(--gray-strong);
  }
`;

export function TextArea({ label, placeholder }: any) {
  return (
    <Label>
      {label}
      <Textarea placeholder={placeholder}></Textarea>
    </Label>
  );
}
