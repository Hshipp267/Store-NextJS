import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> replace with a card ico */}
      </Head>

      <main className={styles.main}>
        <div className={styles.containImg}>
          <img src='https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701245671-1200x750.jpg' alt="Banner"></img>
        </div>

        <div>
          <h1 id={styles.title}>Information</h1>
          <p id={styles.infoText}>
            This is a website dedicated getting all types of cards, from game boards to shows. <b>YOU</b> need to <b>LOGIN</b> in order to purchase any of the cards.
            I have search all types of cards with short description of each to anyone knew to it. Each would contain the price for either small deck to big box.
          </p>
        </div>

        <div className={styles.ViewList}>
          <div className={styles.card}>
            <img src="https://i5.walmartimages.com/asr/8fcb252f-6369-4eb5-8513-5f8d67b6b0d0_1.448f37226c364e41e1a36d8c8313ebf7.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" alt="name"></img>
            <hr></hr>
            <div>
              <p>UNO</p>
              <p>$4.89</p>
            </div>
            <p id={styles.desc}>
            UNO is a multi-player card game in which the objective is to be the first player to get rid of all the cards in their hand. Each player is dealt 7 cards and players take turn drawing cards from the deck.
            </p>
            <Link href="/Login"><button className={styles.btn}>Buy</button></Link>
          </div>

          <div className={styles.card}>
            <img src="https://media.gamestop.com/i/gamestop/11161884/Yu-Gi-Oh-Trading-Card-Game-Maximum-Gold-El-Dorado-Booster-Full-Box?$pdp$" alt="name"></img>
            <hr></hr>
            <div>
              <p>Yugioh</p>
              <p>$29.99</p>
            </div>
            <p id={styles.desc}>
            Gameplay revolves around three types of cards: Monster, Spell, and Trap cards. Monster cards are monsters used to attack and defend against the opposing player, mainly for the purpose of damaging an opponent's life points.
            </p>
            <Link href="/Login"><button className={styles.btn}>Buy</button></Link>
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
