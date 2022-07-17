import '../styles/globals.css'
import {motion,AnimatePresence} from 'framer-motion'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps,router }: AppProps) {
  return (
    <AnimatePresence exitBeforeEnter>
        <motion.div
      key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial:{
            opacity:0
          },
          pageAnimate:{
            opacity: 1

          }
        }}
        >
        <Component {...pageProps} />
        </motion.div>
  </AnimatePresence>
   )
}

export default MyApp
