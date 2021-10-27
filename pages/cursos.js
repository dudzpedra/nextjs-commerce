import { Button } from '@components/ui'
import Link from 'next/link'
import s from './cursos.module.css'

export default function Cursor() {
  return (
    <div className={s.container}>
      <header className={s.header}>
        <h1>Cursos de Programação</h1>
      </header>
      <main>
        <section className={s.jogos}>
          <h2>Criação de Jogos</h2>
          <nav>
            <section>
              <p>Jogos para PC com a ferramenta MIT Scratch</p>
              <Button className={s.btn}>
                <Link href="/jogos-pc">
                  <a>Saiba mais</a>
                </Link>
              </Button>
            </section>
            <section>
              <p>Jogos Mobile com a ferramenta MIT App Inventor</p>
              <Button className={s.btn}>
                <Link href="/jogos-mobile">
                  <a>Saiba mais</a>
                </Link>
              </Button>
            </section>
          </nav>
        </section>
        <section className={s.apps}>
          <h2>Criação de Apps</h2>
        </section>
        <Button className={s.btn}>
          <Link href="/">
            <a>Voltar para a página principal</a>
          </Link>
        </Button>
      </main>
    </div>
  )
}
