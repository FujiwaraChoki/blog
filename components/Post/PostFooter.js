import BLOG from '@/blog.config'
import { useState } from 'react'

import WechatPay from '@/components/Post/WechatPay'
import { MailIcon, ThumbUpIcon } from '@heroicons/react/outline'

const PostFooter = () => {
  const [showPay, setShowPay] = useState(false)

  return (
    <div className='w-full pb-12 justify-between font-medium text-gray-500 dark:text-gray-400'>
      <div className='flex flex-wrap sm:flex-nowrap sm:justify-between items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 relative gap-3 px-4 py-3'>
        <div className='w-full sm:w-auto max-w-screen-sm inline-block text-sm font-light md:text-base mb-2 sm:mb-0'>
          {'If you have any questions, please contact me.'}
        </div>
        <div className='flex flex-wrap gap-3'>
          {BLOG.showWeChatPay && (
            <button
              onClick={() => setShowPay((showPay) => !showPay)}
              className='flex gap-1 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 hover:text-gray-600 dark:hover:text-gray-300 text-sm rounded-lg px-4 py-2'
            >
              <ThumbUpIcon className='flex flex-col justify-center items-center select-none cursor-pointer relative w-5 h-5' />
              {'Coffee'}
            </button>
          )}
          <button
            onClick={() => router.push(BLOG.path || '/contact')}
            className='flex gap-1 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 hover:text-gray-600 dark:hover:text-gray-300 text-sm rounded-lg px-4 py-2'
          >
            <MailIcon className='flex flex-col justify-center items-center select-none cursor-pointer relative w-5 h-5' />
            {'Contact'}
          </button>
        </div>
      </div>
      {showPay && <WechatPay />}
    </div>
  )
}

export default PostFooter
