function TextInput(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
      />
    </div>
  );
}

export default TextInput;
