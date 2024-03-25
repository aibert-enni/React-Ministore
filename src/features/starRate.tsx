import checkedStar from '../assets/star_checked_icon.svg'
import unchekedStar from '../assets/star_unchecked_icon.svg'

export const starRate = (rate: number) => {
    const content = []
    for (let i = 1; i <= 5; i++) {
        if (i <= rate) {
            content.push(<img className='max-w-4' src={checkedStar} />)
        } else {
            content.push(<img className='max-w-4' src={unchekedStar} />)
        }
    }
    return content
}