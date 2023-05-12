import Image from 'next/image'
import styles from '@/styles/Home.module.css'

const Loading = () => {
  return (
    <div className={styles.center}>
      <div style={{ display:'flex', flexDirection:'column', alignContent:'center'}}>
        <Image
          className={styles.logo}
          src='/retro-logo.png'
          alt='retroIO Logo'
          width={80}
          height={80}
          priority
        />
        <p>Loading ...</p>
      </div>
    </div>
  )
}

export default Loading
