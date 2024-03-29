export default function Alert(props: any) {
  return (
    <div className="flex alert shadow-lg max-w-[80vw] m-auto mt-3 place-items-center select-none">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-primary flex-shrink-0 -ml-2 w-10 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>{props.texto}</div>
      </div>
    </div>
  );
}
