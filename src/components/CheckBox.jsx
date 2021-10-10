function CheckBox(props) {
  return (
    <input
      type="checkbox"
      checked={props.checked}
      onChange={props.onChange}
      class="w-4 h-4 md:w-6 md:h-6 flex-shrink-0"
    />
  );
}

export default CheckBox;
