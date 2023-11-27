function Button(props: { name: string; searchFn: any }) {
  return (
    <div>
      <button
        className="border-2 border-black p-2 bg-green-500	"
        onClick={props.searchFn}
      >
        <i className="bi bi-search"></i> {props.name}
      </button>
    </div>
  );
}

export default Button;
