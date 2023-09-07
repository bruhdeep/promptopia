import Feed from '../components/feed';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className="head_text text_center">
        Discover and share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI-Powered Prompts
        </span>
      </h1>
      <p className="desc text-center">Promptopia is an opensource AI prompting tool for modern world ro discover, create and share creative prompts</p>

      <Feed />
    </section>
  )
}

export default Home