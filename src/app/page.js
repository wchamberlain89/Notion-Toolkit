import Link from 'next/link'
import LoginButton from './components/LoginButton'

export default function Home() {
  return (
    <>
      <h1 className='text-3xl font-bold'>Hello World, Welcome to The Notion Toolkit!</h1>
      <Link className='text-blue-400' href="widgets">Your Widgets</Link>
      <LoginButton />
    </>
  )
}
