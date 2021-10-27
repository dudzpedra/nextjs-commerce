import Link from "next/link"

export default function JogosPc() {
    return (
        <div>
            <h1>Jogos para PC</h1>
            <Link href="/cursos">
                <a>Voltar para lista de cursos</a>
            </Link>
        </div>
    )
}