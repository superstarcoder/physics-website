import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Card from '../components/CardsPage/Card'
import { Engine, Render, Bodies, World } from 'matter-js'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

const Home: NextPage = () => {

  const scene = useRef()
  const isPressed = useRef(false)
  const engine = useRef(Engine.create())

  useEffect(() => {
    const cw = document.body.clientWidth
    const ch = document.body.clientHeight

    const render = Render.create({
      element: scene.current,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: 'transparent'
      }
    })

    World.add(engine.current.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true })
    ])

    Engine.run(engine.current)
    Render.run(render)

    return () => {
      Render.stop(render)
      World.clear(engine.current.world, false)
      Engine.clear(engine.current)
      render.canvas.remove()
      render.textures = {}
    }
  }, [])

  const handleDown = () => {
    isPressed.current = true
  }

  const handleUp = () => {
    isPressed.current = false
  }

  const handleAddCircle = e => {
    if (isPressed.current) {
      const ball = Bodies.circle(
        e.clientX,
        e.clientY,
        10 + Math.random() * 30,
        {
          mass: 10,
          restitution: 0.9,
          friction: 0.005,
          render: {
            fillStyle: '#0000ff'
          }
        })
      World.add(engine.current.world, [ball])
    }
  }


  return (

    
    <div className={styles.container}>
          <div
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onMouseMove={handleAddCircle}
    >
      <div ref={scene} style={{ width: '100%', height: '100%' }} />
    </div>
      <Head>
        <title>Physics Website</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* <div className={styles.background}></div> */}
        <h1>LHS Physics</h1>
        <h2>Mr. Taylor</h2>
	      <div className={styles.cards}>
            <Card fileName='/ap-physics.jpg' color='rgba(200, 255, 205, 0.9)' cardTitle='AP Physics C' linkTo='/apPhysics' myData={{}} editModeOn={false} pagePaths={{}}/>
            <Card fileName='/physics-honors.jpg' color='rgba(255, 209, 199, 0.9)' cardTitle='Physics Honors' linkTo='physics-honors' myData={{}} editModeOn={false}  pagePaths={{}}/>
	      </div>
        
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
