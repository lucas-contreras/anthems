import "./index.scss";

const TITLE_DEFAULT = "himnario adventista";

interface HeaderProps {
  title?: string;
}

export function Header({ title = TITLE_DEFAULT }: HeaderProps) {
  return (
    <header>
      <h1 className="title">{title}</h1>
    </header>
  );
}
