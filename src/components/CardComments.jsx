export function CardComment({ twit, id }) {
    return (
        <div className='elemento-twit' key={id}>
            <li style={{ listStyle: 'none' }}>
                <span style={{ color: '#f2a900', fontWeight: 'bold' }}>@Usuario: </span>
                {twit}
            </li>
        </div>
    )
}