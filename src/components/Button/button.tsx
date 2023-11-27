function Button(props: { name: string; searchFn: any }) {
  return (
    <div>
      <button
        className="border-2 border-black p-2 bg-green-500	"
        onClick={props.searchFn}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Button;
