import Link from "next/link";

export function Header() {
  return (
    <header>
      <nav>
        <Link href="/todolist">Nanostores todo</Link>
        <Link href="/vopros">Вопрос</Link>
      </nav>
    </header>
  );
}