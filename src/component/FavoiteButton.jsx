import { useSelector } from "react-redux"

export default function FavoriteButton({pokemonId}) {
  const isFavorite = useSelector(state => state.favorite.some((item => item === pokemonId)))
  return (
    <button onClick={(e) => {
      e.stopPropagation()
    }}className={isFavorite ? "text-[red]" : ''}>
      {isFavorite ? '❤️' : '🖤'}
    </button>
  )
}