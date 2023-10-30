import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/prismatic">
        <Image
          src="/prismatic/prismatic-mural.png"
          alt="MTG Logo"
          width={1920}
          height={358}
          priority
        />
      </Link>
      <Link href="/ultimate">
        <Image
          src="/smash/ssbu-mural.png"
          alt="MTG Logo"
          width={1920}
          height={358}
          priority
        />
      </Link>
    </main>
  )
}
