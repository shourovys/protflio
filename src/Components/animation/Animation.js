
export const containerVariant = {
    initial: {
      opacity: 0,
      x: '100vw'
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: .2, when: 'beforeChildren', staggerChildren: 1, type: 'spring', stiffness: 30 }
    },
    exit: {
      x: '-100vw',
      transition: { ease: 'easeInOut', duration: .5 }
    }
  }

  export const textVariant = {
    initial: {
        opacity:0,
      y: '80px',
    },
    animate: {
        opacity:1,
      y: 0,
      transition: { type: 'spring', stiffness: 120 }
    }
  }

  export const btnVariant = {
    initial: {
      x: '60vw'
    },
    animate: {
      x: 0,
      transition: { type: 'spring', stiffness: 120 }
    },
    whileHover: {
      scale: 1.01,
      boxShadow: '0 0 10px rgba(255,255,255)',
    //   textShadow: '0 0 8px rgba(255,255,255)',
      transition: { duration: 1, yoyo: Infinity }
  
    }
  }
  export const imgVariant = {
    initial: {
        x: '-120vw'
      },
      animate: {
        x: 0,
        transition: {delly:1 ,type: 'spring', stiffness: 120 }
      }
  }
 

  export const liVariant = {
    whileHover: {
      scale: 1.3,
      borderBottom:'2px solid wheat',
      transition: { type: 'spring', stiffness: 220 }

    }
  }
  