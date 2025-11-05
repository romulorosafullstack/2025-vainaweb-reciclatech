import "./index.scss"

type ButtonProps = {
  className: string
  cta: string;
  url: string;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className={props.cta}
      onClick={()=>alert(props.url)}>
      <span>{props.cta}</span>
    </button>
  )
}