import React, {useState} from 'react'

export default function Admin() {
    const [quiz, setQuiz] = useState()
console.log(quiz)
    function addQuiz(e){
        e.preventDefault()
        setQuiz({
            image: e.target.image,
            title: e.target.eventName,
            place: e.target.address,
            when: e.target.date,
            players: e.target.text,
            ekipe: e.target.moreText,
            price: e.target.price,
            link: e.target.link,
        })
    }
  return (
    <div className='bg-white border-2 border-white h-96'>
        <form onSubmit={addQuiz}>
            <input name="image" type="text" placeholder="image link" />
            <input name="eventName" type="text" placeholder="ime dogodka" />
            <input name="address" type="text" placeholder="ulica, stevilka, kraj" />
            <input name="date" type="text" placeholder="dan, datum, ura" />
            <input name="text" type="text" placeholder="Zberi ekipo 3-4 igralcev in pokaži svoje znanje!" />
            <input name="moreText" type="text" placeholder="Število ekip je omejeno." />
            <input name="price" type="number" placeholder="cena" />
            <input name="link" type="text" placeholder="eventsframe link" />
            <button>Submit</button>
        </form>
    </div>
  )
}
