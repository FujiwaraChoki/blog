import Container from '@/components/Container'
import ContactForm from '@/components/ContactForm'
import BLOG from '@/blog.config'

export const Contact = () => {
  return (
    <Container title={BLOG.title} description={BLOG.description}>
      <div className='mb-8 md:mb-16 text-gray-600 dark:text-gray-200'>
        <h2 className='text-xl lg:text-3xl font-light text-center mb-4'>
          {'Contact'}
        </h2>
        <p className='max-w-screen-md font-light md:text-lg text-center mx-auto'>
          {'If you have any questions or suggestions, please contact me.'}
        </p>
        <p className='max-w-screen-md font-light md:text-lg text-center mx-auto'>
          {'Or you can contact me via Telegram: '}
          <a
            href={BLOG.socialLink.telegram}
            className='hover:text-indigo-500 active:text-indigo-600 underline transition duration-100'
          >
            @{BLOG.socialLink.telegram.slice(13)}
          </a>
        </p>
      </div>
      <ContactForm />
    </Container>
  )
}

export default Contact
