function Button(props) {
  return (
    <button
      onClick={props.onClick}
      class={`bg-${props.bg}-500 text-${props.bg}-50 hover:bg-${props.bg}-700 focus:outline-none focus:ring-2 focus:ring-${props.bg}-600 focus:ring-opacity-50 px-1 py-1 md:px-4 md:py-2 rounded-lg ${props.class}`}
    >
      {props.children}
    </button>
  );
}

export default Button;
