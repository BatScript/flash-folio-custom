import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {
  return <div className={`${inter.className} text-red`}>{props.name}</div>
}

export const getServerSideProps = async () => {
  return {
    props: {
      name: 'Mohit'
    }
  }
}
