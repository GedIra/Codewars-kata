export function flyBy(lamps: string, drone: string): string {
  const lenLambs = lamps.length
  const lenDrone = drone.length
  const str = lenLambs <= lenDrone ? 'o'.repeat(lenLambs) : 'o'.repeat(lenDrone)+lamps.slice(lenDrone)
  return str
}

