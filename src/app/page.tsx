import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/prismatic/mtg-sg.jpg"
        alt="MTG Logo"
        width={1200}
        height={700}
        priority
      />
    </main>
  )
}
