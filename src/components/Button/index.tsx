import "./index.scss"

type ButtonProps = {
  className?: string
  cta: string;
  url: string;
}

export function Button({ className = "", cta, url }: ButtonProps) {
  return (
    <button
      className={`button ${className}`.trim()}
      onClick={()=>alert(url)}>
      <span>{cta}</span>
    </button>
  )     
}