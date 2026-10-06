import { useEffect, useRef } from 'react'

export type MovementKeys = {
  ArrowUp: boolean
  ArrowDown: boolean
  ArrowLeft: boolean
  ArrowRight: boolean
}

export function useKeyboardControls() {
  const keys = useRef<MovementKeys>({
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
  })

  useEffect(() => {
    const onDown = (e: KeyboardEvent) => {
      if (e.key in keys.current) {
        e.preventDefault()
        keys.current[e.key as keyof MovementKeys] = true
      }
    }

    const onUp = (e: KeyboardEvent) => {
      if (e.key in keys.current) {
        keys.current[e.key as keyof MovementKeys] = false
      }
    }

    window.addEventListener('keydown', onDown)
    window.addEventListener('keyup', onUp)
    return () => {
      window.removeEventListener('keydown', onDown)
      window.removeEventListener('keyup', onUp)
    }
  }, [])

  return { keys }
}