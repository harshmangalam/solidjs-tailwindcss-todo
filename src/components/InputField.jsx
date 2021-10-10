function InputField(props) {
  return (
    <input
      type="text"
      class={`border-2 border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-600 px-1 py-1  md:px-2 md:py-2 rounded-lg ${props.class}`}
      onInput={props.onInput}
      value={props.value}
    />
  );
}

export default InputField;
